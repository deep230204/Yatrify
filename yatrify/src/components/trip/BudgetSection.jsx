import { motion } from "framer-motion";
import {
  Hotel,
  Utensils,
  Car,
  Wallet,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const BudgetSection = ({ tripData }) => {
  const destinationName = tripData?.destination?.toLowerCase();

  let currencySymbol = "₹";

  if (destinationName === "dubai") currencySymbol = "AED ";
  if (destinationName === "london") currencySymbol = "£";
  if (destinationName === "paris") currencySymbol = "€";
  if (destinationName === "new york") currencySymbol = "$";
  if (destinationName === "singapore") currencySymbol = "S$";
  if (destinationName === "thailand") currencySymbol = "฿";
  if (destinationName === "switzerland") currencySymbol = "CHF ";
  if (destinationName === "turkey") currencySymbol = "₺";
  if (destinationName === "maldives") currencySymbol = "$";
  if (destinationName === "bali") currencySymbol = "Rp ";

  const budget =
    tripData?.budget === "Budget Friendly"
      ? {
          stay: `${currencySymbol}300`,
          food: `${currencySymbol}150`,
          transport: `${currencySymbol}100`,
          misc: `${currencySymbol}80`,
          total: `${currencySymbol}630`,
        }
      : tripData?.budget === "Moderate"
      ? {
          stay: `${currencySymbol}700`,
          food: `${currencySymbol}300`,
          transport: `${currencySymbol}200`,
          misc: `${currencySymbol}150`,
          total: `${currencySymbol}1350`,
        }
      : {
          stay: `${currencySymbol}1500`,
          food: `${currencySymbol}600`,
          transport: `${currencySymbol}400`,
          misc: `${currencySymbol}300`,
          total: `${currencySymbol}2800+`,
        };

  const budgetItems = [
    {
      title: "Hotel Stay",
      amount: budget.stay,
      icon: Hotel,
      gradient: "from-indigo-500 via-violet-500 to-purple-500",
      glow: "shadow-indigo-500/20",
      iconBg: "bg-indigo-500/15",
    },
    {
      title: "Food & Restaurants",
      amount: budget.food,
      icon: Utensils,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      glow: "shadow-orange-500/20",
      iconBg: "bg-orange-500/15",
    },
    {
      title: "Transport",
      amount: budget.transport,
      icon: Car,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
    {
      title: "Miscellaneous",
      amount: budget.misc,
      icon: Wallet,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glow: "shadow-pink-500/20",
      iconBg: "bg-pink-500/15",
    },
  ];

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <DollarSign className="h-4 w-4" />
            Trip Cost Overview
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Budget Breakdown
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            A complete estimate of how your travel budget is distributed across
            hotels, food, transport, and other expenses.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 py-4 text-white shadow-lg">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Total Estimated Budget
          </p>
          <h3 className="mt-1 text-3xl font-black">{budget.total}</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {budgetItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl ${item.glow}`}
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20`}
              />

              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.gradient}`}
              />

              <div className="absolute bottom-4 right-4 opacity-5 transition-all duration-500 group-hover:scale-125 group-hover:opacity-10">
                <Icon className="h-20 w-20" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl ${item.iconBg} border border-white/20 shadow-lg backdrop-blur-xl`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="rounded-full border border-slate-200 bg-white/80 p-2 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  {item.title}
                </h3>

                <p className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                  {item.amount}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient}`}
                  />
                  <p className="text-sm text-slate-500">
                    Estimated spending category
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetSection;