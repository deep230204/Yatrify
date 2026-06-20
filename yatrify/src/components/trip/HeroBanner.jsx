import { MapPin, Calendar, Wallet, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = ({ tripData }) => {
  const destinationName =
    tripData?.destination?.split(",")[0]?.trim().toLowerCase() || "";
  const dataSource = tripData?.dataSource || "fallback";
  const aiProvider = tripData?.aiProvider || "none";

  const sourceConfig = {
    "google-places": {
      label: "Verified Places",
      className:
        "border-emerald-400/30 bg-emerald-400/15 text-emerald-100",
    },
    "local-dataset": {
      label: "Curated Picks",
      className: "border-cyan-400/30 bg-cyan-400/15 text-cyan-100",
    },
    fallback: {
      label: "Essential Picks",
      className: "border-amber-400/30 bg-amber-400/15 text-amber-100",
    },
  };

  const currentSource = sourceConfig[dataSource] || sourceConfig.fallback;

  const providerConfig = {
    gemini: {
      label: "Smart AI Planning",
      className:
        "border-fuchsia-400/30 bg-fuchsia-400/15 text-fuchsia-100",
    },
    groq: {
      label: "Smart AI Planning",
      className: "border-violet-400/30 bg-violet-400/15 text-violet-100",
    },
    none: {
      label: "",
      className: "border-slate-300/30 bg-slate-300/10 text-slate-100",
    },
  };

  const currentProvider = providerConfig[aiProvider] || providerConfig.none;

  let heroImage =
    tripData?.backgroundImage ||
    `https://source.unsplash.com/1600x900/?${destinationName},travel`;

  if (destinationName.includes("goa")) {
    heroImage =
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("mumbai")) {
    heroImage =
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("delhi")) {
    heroImage =
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("bali")) {
    heroImage =
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("paris")) {
    heroImage =
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("dubai")) {
    heroImage =
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("tokyo")) {
    heroImage =
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("london")) {
    heroImage =
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("new york")) {
    heroImage =
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop";
  } else if (destinationName.includes("maldives")) {
    heroImage =
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[42px] border border-white/15 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-6 text-white shadow-[0_25px_80px_rgba(79,70,229,0.35)] sm:p-8 md:p-12"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Destination"
          className="h-full w-full scale-105 object-cover opacity-25 transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-purple-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
      </div>

      <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="absolute left-20 top-16 h-3 w-3 animate-pulse rounded-full bg-white/40" />
      <div className="absolute right-32 top-28 h-2 w-2 animate-ping rounded-full bg-pink-400/50" />
      <div className="absolute bottom-20 right-20 h-4 w-4 animate-pulse rounded-full bg-cyan-400/40" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 shadow-lg backdrop-blur-xl"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          AI Generated Travel Plan
        </motion.div>

        <div className="mb-6 flex flex-wrap gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg backdrop-blur-xl ${currentSource.className}`}
          >
            {currentSource.label}
          </motion.div>

          {aiProvider !== "none" ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-lg backdrop-blur-xl ${currentProvider.className}`}
            >
              {currentProvider.label}
            </motion.div>
          ) : null}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
        >
          {tripData?.destination?.split(",").slice(0, 2).join(", ") ||
            "Your Dream Trip"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Explore a personalized travel itinerary crafted perfectly for your
          budget, trip duration, and travel style with an unforgettable premium
          experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
        >
          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
          >
            <div className="rounded-2xl bg-indigo-500/20 p-3">
              <Calendar className="h-5 w-5 text-indigo-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Duration
              </p>
              <span className="text-sm font-semibold md:text-base">
                {tripData?.days || tripData?.noOfDays || "0"} Days
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
          >
            <div className="rounded-2xl bg-emerald-500/20 p-3">
              <Wallet className="h-5 w-5 text-emerald-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Budget
              </p>
              <span className="text-sm font-semibold capitalize md:text-base">
                {tripData?.budget || "Budget"}
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
          >
            <div className="rounded-2xl bg-pink-500/20 p-3">
              <Users className="h-5 w-5 text-pink-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Travelers
              </p>
              <span className="text-sm font-semibold md:text-base">
                {tripData?.travelers ||
                  tripData?.traveler ||
                  "Traveler"}
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
          >
            <div className="rounded-2xl bg-cyan-500/20 p-3">
              <MapPin className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Destination
              </p>
              <span className="text-sm font-semibold md:text-base">
                {tripData?.destination || "Destination"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
