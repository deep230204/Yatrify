import { motion } from "framer-motion";
import {
  ArrowRight,
  Plane,
  DollarSign,
  Heart,
  Globe,
  MapPin,
  Briefcase,
  Star,
  ChevronDown,
} from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Plane,
    title: "Smart Routes",
  },
  {
    icon: DollarSign,
    title: "Budget Control",
  },
  {
    icon: Heart,
    title: "Personalized",
  },
];

const stats = [
  "10K+ Happy Travelers",
  "120+ Countries",
  "4.9/5 User Rating",
];

const Hero = () => {
    const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden bg-[#f7f8ff] px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-slate-100 to-yellow-50" />

      {/* Glow Effects */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-0 top-20 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-0 top-32 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-200/20 blur-3xl"
      />

      {/* Heading Glow */}
      <div className="absolute left-[20%] top-[28%] hidden h-72 w-72 rounded-full bg-violet-300/20 blur-[120px] lg:block" />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[10%] top-[22%] hidden lg:block"
      >
        <Plane className="h-8 w-8 rotate-12 text-violet-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[15%] top-[28%] hidden lg:block"
      >
        <MapPin className="h-7 w-7 text-pink-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[18%] left-[12%] hidden lg:block"
      >
        <Globe className="h-8 w-8 text-blue-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[20%] right-[12%] hidden lg:block"
      >
        <Briefcase className="h-8 w-8 text-yellow-400" />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 pt-28 pb-20 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-7 py-3 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-5 w-5 rounded-full bg-violet-400 blur-md opacity-70" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-violet-600" />
            </motion.div>

            <span>AI-Powered Travel Agent v2.0</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Design Your Dream
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Getaway in Seconds
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-violet-600 sm:text-base"
          >
            Travel Smarter • Go Further
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
          >
            Tell us where you want to go, and let our advanced AI craft
            the perfect itinerary tailored to your budget, style, and
            travel interests.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-10 flex flex-col items-center gap-5 lg:items-start"
          >
            <Button 
            onClick={()=>navigate('/create-trip')}
              size="xl"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-10 py-8 text-lg font-semibold text-white shadow-[0_15px_50px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_70px_rgba(99,102,241,0.55)]"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute -left-10 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
              </span>

              <span className="absolute inset-0 rounded-full bg-violet-500 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40" />

              <span className="relative flex items-center gap-2">
                Start Planning
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Trusted By */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              </div>

              <p className="text-sm text-slate-500">
                Trusted by <span className="font-semibold text-slate-700">10K+</span> travelers
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 lg:justify-start"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <span>{stat}</span>
                {index !== stats.length - 1 && (
                  <span className="hidden sm:block">•</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Airplane Path */}
          <svg
            className="absolute -left-20 top-1/2 hidden xl:block"
            width="180"
            height="120"
            viewBox="0 0 180 120"
            fill="none"
          >
            <path
              d="M10 100C60 20 120 20 170 60"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative w-full max-w-md rounded-[36px] border border-white/40 bg-white/40 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Next Destination</p>
                <h3 className="text-2xl font-bold text-slate-800">
                  Bali, Indonesia
                </h3>
              </div>

              <div className="rounded-2xl bg-violet-100 p-4">
                <Plane className="h-7 w-7 text-violet-600" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                <p className="text-sm text-slate-500">Budget</p>
                <h4 className="mt-1 text-xl font-bold text-slate-800">$2,450</h4>
              </div>

              <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
                <p className="text-sm text-slate-500">Duration</p>
                <h4 className="mt-1 text-xl font-bold text-slate-800">7 Days</h4>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">AI Recommended</p>
                  <h4 className="mt-1 text-xl font-semibold">
                    Luxury Beach Escape
                  </h4>
                </div>

                <Star className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-2xl bg-white/70 px-3 py-4 shadow-sm"
                  >
                    <Icon className="mb-2 h-5 w-5 text-violet-600" />
                    <span className="text-center text-xs font-medium text-slate-700">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-slate-400 lg:flex"
      >
      </motion.div>
    </section>
  );
};

export default Hero;