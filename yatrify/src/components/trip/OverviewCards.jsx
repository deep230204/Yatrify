import {
  Wallet,
  Hotel,
  Utensils,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const CURRENCY_BY_DESTINATION = {
  dubai: "AED ",
  london: "GBP ",
  paris: "EUR ",
  "new york": "$",
  singapore: "S$",
  thailand: "THB ",
  switzerland: "CHF ",
  turkey: "TRY ",
  maldives: "$",
  bali: "Rp ",
};

const OverviewCards = ({ tripData }) => {
  const destinationName = tripData?.destination?.toLowerCase() || "";
  const currencySymbol =
    CURRENCY_BY_DESTINATION[destinationName] || "INR ";

  const budgetValue =
    tripData?.budget === "Budget Friendly"
      ? `${currencySymbol}500 - ${currencySymbol}1000`
      : tripData?.budget === "Moderate"
        ? `${currencySymbol}1000 - ${currencySymbol}2500`
        : tripData?.budget === "Luxury"
          ? `${currencySymbol}2500+`
          : "Not Selected";

  const cards = [
    {
      title: "Estimated Budget",
      value: budgetValue,
      icon: Wallet,
      gradient: "from-indigo-500 via-violet-500 to-purple-500",
      glow: "shadow-indigo-500/20",
      iconBg: "bg-indigo-500/15",
    },
    {
      title: "Hotels",
      value: `${tripData?.hotels?.length || 0}+ Options`,
      icon: Hotel,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glow: "shadow-pink-500/20",
      iconBg: "bg-pink-500/15",
    },
    {
      title: "Restaurants",
      value: `${tripData?.restaurants?.length || 0}+ Places`,
      icon: Utensils,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      glow: "shadow-orange-500/20",
      iconBg: "bg-orange-500/15",
    },
    {
      title: "Attractions",
      value: `${tripData?.attractions?.length || 0}+ Spots`,
      icon: MapPinned,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/70 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${card.glow}`}
          >
            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20`}
            />

            <div
              className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.gradient}`}
            />

            <div className="absolute bottom-4 right-4 opacity-5 transition-all duration-500 group-hover:scale-125 group-hover:opacity-10">
              <Icon className="h-20 w-20" />
            </div>

            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl ${card.iconBg} border border-white/20 shadow-lg backdrop-blur-xl`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${card.gradient} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="rounded-full border border-slate-200 bg-white/80 p-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                {card.title}
              </h3>

              <p className="mt-3 text-3xl font-black tracking-tight text-slate-900">
                {card.value}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${card.gradient}`}
                />
                <p className="text-sm text-slate-500">
                  Personalized recommendations available
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OverviewCards;
