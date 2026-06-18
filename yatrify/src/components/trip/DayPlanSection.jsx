import { motion } from "framer-motion";
import {
  Sun,
  Coffee,
  Moon,
  Clock,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const DayPlanSection = ({ itinerary = [], aiProvider = "none" }) => {
  const fallbackItinerary = [
    {
      day: "Day 1",
      title: "Arrival & City Exploration",
      morning: "Visit famous landmarks and local cafes",
      afternoon: "Lunch at top-rated restaurant and shopping",
      evening: "Sunset point visit and local dinner",
    },
    {
      day: "Day 2",
      title: "Adventure & Attractions",
      morning: "Explore beaches and water activities",
      afternoon: "Museum and cultural spots",
      evening: "Night market and rooftop dining",
    },
    {
      day: "Day 3",
      title: "Relaxation & Departure",
      morning: "Breakfast with scenic views",
      afternoon: "Souvenir shopping and local sightseeing",
      evening: "Departure and airport transfer",
    },
  ];

  const itineraryList =
    itinerary.length > 0 ? itinerary : fallbackItinerary;

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <CalendarDays className="h-4 w-4" />
            Travel Timeline
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Day Wise Itinerary
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            A carefully planned itinerary for every day of your trip, balancing
            adventure, relaxation, sightseeing, and memorable experiences.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-600 shadow-md">
          <Clock className="h-5 w-5 text-indigo-500" />
          {aiProvider !== "none" ? "AI shaped itinerary" : "Smart trip schedule"}
        </div>
      </div>

      <div className="space-y-7">
        {itineraryList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_25px_70px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-lg font-black text-white shadow-lg shadow-indigo-500/30">
                    {index + 1}
                  </div>

                  <div>
                    <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                      {item.day || `Day ${index + 1}`}
                    </span>

                    <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
                  <Clock className="h-4 w-4 text-indigo-500" />
                  Full Day Experience
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50 to-yellow-50 p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-200/30 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">
                        <Sun className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">Morning</h4>
                        <p className="text-sm text-amber-600">
                          Start your day
                        </p>
                      </div>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {item.morning ||
                        item.description ||
                        "Morning activities planned"}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange-200/30 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-2xl bg-orange-100 p-3 text-orange-600">
                        <Coffee className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">Afternoon</h4>
                        <p className="text-sm text-orange-600">
                          Explore & enjoy
                        </p>
                      </div>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {item.afternoon ||
                        "Afternoon sightseeing and food exploration"}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[28px] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-200/30 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">
                        <Moon className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">Evening</h4>
                        <p className="text-sm text-indigo-600">
                          Relax & unwind
                        </p>
                      </div>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {item.evening ||
                        "Evening relaxation and local experiences"}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 flex items-center justify-end">
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-300 group-hover:translate-x-1">
                  Continue Journey
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DayPlanSection;
