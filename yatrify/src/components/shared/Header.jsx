import { motion } from "framer-motion";
import { User, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { clearAuthData, getAuthData } from "../../lib/auth";
import {
  PremiumLogo,
  PremiumDashboardIcon,
  PremiumCreateTripIcon,
  PremiumAvatar,
  PremiumLogoutIcon,
} from "./PremiumIcons";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [authData, setAuthState] = useState(() => getAuthData());

  useEffect(() => {
    const syncAuthState = () => setAuthState(getAuthData());

    window.addEventListener("storage", syncAuthState);
    window.addEventListener("focus", syncAuthState);

    return () => {
      window.removeEventListener("storage", syncAuthState);
      window.removeEventListener("focus", syncAuthState);
    };
  }, []);

  useEffect(() => {
    setAuthState(getAuthData());
  }, [location.pathname]);

  const currentUser = authData?.user;

  const handleLogout = async () => {
    try {
      if (authData?.token) {
        await axios.post(
          "http://localhost:5000/api/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${authData.token}`,
            },
          }
        );
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      clearAuthData();
      setAuthState(null);
      toast.success("Logged out successfully");
      navigate("/login");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
  <div className="mx-auto flex w-full items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
    <Link to="/" className="flex items-center gap-3">
      <PremiumLogo />
      <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent sm:text-4xl">
        Yatrify
      </span>
    </Link>

    <div className="hidden items-center gap-4 md:flex">
      {currentUser && (
        <motion.div
          whileHover="hover"
          initial="initial"
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className={`rounded-2xl border px-5 py-6 text-base font-semibold backdrop-blur-md transition-all duration-300 ${
              location.pathname === "/dashboard"
                ? "border-indigo-200 bg-indigo-50/80 text-indigo-700 shadow-[0_4px_15px_rgba(99,102,241,0.12)]"
                : "border-slate-200/80 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_15px_rgba(15,23,42,0.04)]"
            }`}
          >
            <PremiumDashboardIcon />
            Dashboard
          </Button>
        </motion.div>
      )}

      <motion.div
        whileHover="hover"
        initial="initial"
        whileTap={{ scale: 0.97 }}
      >
        <Button
          onClick={() => navigate("/create-trip")}
          variant="outline"
          className={`rounded-2xl border px-5 py-6 text-base font-semibold backdrop-blur-md transition-all duration-300 ${
            location.pathname === "/create-trip"
              ? "border-indigo-200 bg-indigo-50/80 text-indigo-700 shadow-[0_4px_15px_rgba(99,102,241,0.12)]"
              : "border-slate-200/80 bg-white/70 text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_15px_rgba(15,23,42,0.04)]"
          }`}
        >
          <PremiumCreateTripIcon />
          Create Trip
        </Button>
      </motion.div>

      {currentUser ? (
        <>
          <motion.div
            whileHover="hover"
            initial="initial"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-[0_4px_15px_rgba(99,102,241,0.08)]"
          >
            <PremiumAvatar name={currentUser.name} />
            <span className="text-sm font-bold text-slate-700 tracking-tight">
              {currentUser.name}
            </span>
          </motion.div>

          <motion.div
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.97 }}
          >
            <Button
              onClick={handleLogout}
              className="rounded-2xl bg-slate-900 px-6 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-slate-900/25 hover:shadow-xl"
            >
              <PremiumLogoutIcon />
              Logout
            </Button>
          </motion.div>
        </>
      ) : (
        <motion.div
          whileHover="hover"
          initial="initial"
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={() => navigate("/login")}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-95 hover:shadow-indigo-500/20"
          >
            <User className="h-5 w-5 mr-2" />
            Login
          </Button>
        </motion.div>
      )}
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setMobileMenu(!mobileMenu)}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md md:hidden cursor-pointer outline-none"
    >
      <motion.div
        key={mobileMenu ? "close" : "menu"}
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 45, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {mobileMenu ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  </div>
</header>
  );
};

export default Header;
