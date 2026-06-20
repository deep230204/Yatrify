import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthData } from "../lib/auth";
import { apiUrl, getApiErrorMessage } from "../lib/api";
import PasswordRequirements from "../components/auth/PasswordRequirements";
import { PASSWORD_POLICY_MESSAGE, isStrongPassword } from "../lib/passwordPolicy";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const isPasswordStrong = isStrongPassword(password);
  const passwordsMatch = !confirmPassword || confirmPassword === password;
  const shouldShowPasswordRequirements =
    showPasswordRequirements || password.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
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
      const response = await axios.post(apiUrl("/api/auth/signup"), {
        name,
        email,
        password,
        confirmPassword,
      });

      setAuthData(response.data);
      toast.success("Account created successfully");
      navigate("/create-trip", { replace: true });
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Signup failed"));
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
          Create Account
        </h1>

        <p className="mt-3 text-center text-sm text-slate-500 sm:text-base">
          Sign up to start planning your dream trips.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password <span className="text-rose-500">*</span>
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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
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
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {confirmPassword && !passwordsMatch ? (
                <p className="mt-2 text-sm font-medium text-rose-500">
                  Passwords do not match.
                </p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white font-semibold disabled:opacity-70"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
