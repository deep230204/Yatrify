import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { setAuthData } from "../lib/auth";
import { apiUrl, getApiErrorMessage } from "../lib/api";
import PasswordRequirements from "../components/auth/PasswordRequirements";
import { PASSWORD_POLICY_MESSAGE, isStrongPassword } from "../lib/passwordPolicy";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const isPasswordStrong = isStrongPassword(password);
  const passwordsMatch = !confirmPassword || password === confirmPassword;
  const shouldShowPasswordRequirements =
    showPasswordRequirements || password.length > 0;

  const handleRequestOtp = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(apiUrl("/api/auth/forgot-password/request-otp"), {
        email,
      });

      toast.success(response.data.message || "OTP sent to your email");
      setOtpSent(true);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to send OTP"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !otp || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (!isPasswordStrong) {
      toast.error(PASSWORD_POLICY_MESSAGE);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(apiUrl("/api/auth/forgot-password/reset"), {
        email,
        otp,
        password,
        confirmPassword,
      });

      setAuthData(response.data);
      toast.success(response.data.message || "Password reset successful");
      navigate("/create-trip", { replace: true });
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to reset password"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-[36px] border border-white/60 bg-white/90 p-6 sm:p-10 shadow-[0_25px_80px_rgba(99,102,241,0.15)]"
      >
        <motion.div
          whileHover={{ rotate: -8, scale: 1.05 }}
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[28px] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-lg sm:h-20 sm:w-20"
        >
          <img src="/logo.png" alt="" className="h-full w-full object-cover" draggable="false" />
        </motion.div>

        <h1 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Forgot Password
        </h1>

        <p className="mt-3 text-center text-sm text-slate-500 sm:text-base">
          Enter your email and we will send you a password reset OTP.
        </p>

        <form
          onSubmit={otpSent ? handleResetPassword : handleRequestOtp}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>

          {otpSent ? (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="Enter 6-digit OTP"
                  className="h-14 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    New Password <span className="text-rose-500">*</span>
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onFocus={() => setShowPasswordRequirements(true)}
                      onBlur={() => {
                        if (!password) {
                          setShowPasswordRequirements(false);
                        }
                      }}
                      onChange={(e) => {
                        const nextValue = e.target.value;
                        setPassword(nextValue);
                        if (nextValue) {
                          setShowPasswordRequirements(true);
                        }
                      }}
                      placeholder="Create a new password"
                      autoComplete="new-password"
                      className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {shouldShowPasswordRequirements ? (
                  <PasswordRequirements password={password} />
                ) : null}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm Password <span className="text-rose-500">*</span>
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your new password"
                      autoComplete="new-password"
                      className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {confirmPassword && !passwordsMatch ? (
                    <p className="mt-2 text-sm font-medium text-rose-500">
                      Passwords do not match.
                    </p>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting
              ? otpSent
                ? "Resetting Password..."
                : "Sending OTP..."
              : otpSent
                ? "Verify OTP & Reset Password"
                : "Send OTP"}
          </button>

          {otpSent ? (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleRequestOtp}
              className="w-full rounded-2xl text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 disabled:opacity-70"
            >
              Resend OTP
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full h-14 rounded-2xl border border-slate-200 text-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
