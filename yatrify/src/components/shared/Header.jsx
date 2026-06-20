import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  PlusCircle,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { clearAuthData, getAuthData } from "../../lib/auth";
import { apiUrl } from "../../lib/api";
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
    setMobileMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const currentUser = authData?.user;
  const mobileNavigation = [
    ...(currentUser
      ? [{ label: "Dashboard", path: "/dashboard", icon: LayoutDashboard }]
      : []),
    { label: "Create Trip", path: "/create-trip", icon: PlusCircle },
  ];

  const handleMobileNavigate = (path) => {
    setMobileMenu(false);
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      if (authData?.token) {
        await axios.post(
          apiUrl("/api/auth/logout"),
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
      <div className="relative mx-auto w-full">
        <div className="flex w-full items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenu(false)}>
            <PremiumLogo />
            <span className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-4xl">
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
                  <span className="text-sm font-bold tracking-tight text-slate-700">
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
                  <User className="mr-2 h-5 w-5" />
                  Login
                </Button>
              </motion.div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-expanded={mobileMenu}
            aria-controls="mobile-navigation"
            aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm outline-none backdrop-blur-md md:hidden"
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

        <AnimatePresence>
          {mobileMenu ? (
            <>
              <motion.button
                type="button"
                aria-label="Close mobile navigation"
                onClick={() => setMobileMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-[73px] bg-slate-950/20 backdrop-blur-[2px] md:hidden"
              />

              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 right-4 top-full z-10 mt-3 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
              >
                {currentUser ? (
                  <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                    <PremiumAvatar name={currentUser.name} />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">{currentUser.name}</p>
                      <p className="mt-1 text-sm text-slate-500">Signed in to Yatrify</p>
                    </div>
                  </div>
                ) : null}

                <div className="space-y-2">
                  {mobileNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => handleMobileNavigate(item.path)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                          isActive
                            ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isActive
                              ? "bg-indigo-100 text-indigo-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                  {currentUser ? (
                    <button
                      type="button"
                      onClick={async () => {
                        setMobileMenu(false);
                        await handleLogout();
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <LogOut className="h-5 w-5" />
                      </div>
                      <span>Logout</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleMobileNavigate("/login")}
                      className="flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-4 py-3 text-left text-sm font-semibold text-white"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <LogIn className="h-5 w-5" />
                      </div>
                      <span>Login</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
