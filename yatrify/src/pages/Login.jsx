import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Plane,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { setAuthData } from "../lib/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      setAuthData(response.data);
      toast.success("Login successful");
      navigate(location.state?.from || "/create-trip", { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-[36px] border border-white/60 bg-white/90 p-8 sm:p-10 shadow-[0_25px_80px_rgba(99,102,241,0.15)] backdrop-blur-xl"
      >
        <div className="text-center mb-10">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-[0_15px_40px_rgba(99,102,241,0.45)]"
          >
            <Plane className="h-9 w-9 text-white" />
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Login to continue planning your dream trips with Yatrify.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                className="h-15 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-15 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-12 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>

           <button
  type="button"
  onClick={() => navigate("/forgot-password")}
className="cursor-pointer font-medium text-indigo-600 transition-colors hover:text-indigo-700">
  Forgot password?
</button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-base font-semibold text-white shadow-[0_12px_35px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(99,102,241,0.45)]"
          >
            {isSubmitting ? "Logging In..." : "Login"}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
  Don&apos;t have an account?
  <span
    onClick={() => navigate("/signup")}
    className="ml-1 cursor-pointer font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
  >
    Sign Up
  </span>
</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
