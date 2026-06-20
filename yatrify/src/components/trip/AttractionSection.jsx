import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star,
  MapPin,
  Ticket,
  ArrowUpRight,
  Heart,
  Compass,
  Clock,
  Camera,
  MapPinned,
} from "lucide-react";

const AttractionSection = ({ attractions = [] }) => {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const fallbackAttractions = [
    {
      name: "Golden Beach",
      type: "Beach",
      rating: "4.9",
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful beach destination with sunset views and water activities.",
      openingHours: "Open 24 Hours",
      address: "Beach Side Road",
      bestTimeToVisit: "November to February",
      activities: ["Swimming", "Sunset View", "Photography"],
    },
    {
      name: "Historic Temple",
      type: "Cultural Spot",
      rating: "4.7",
      ticket: "$10 Ticket",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
      description:
        "Historic place known for architecture and cultural importance.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Temple Road",
      bestTimeToVisit: "Morning",
      activities: ["Sightseeing", "Photography", "Temple Visit"],
    },
    {
      name: "Adventure Park",
      type: "Theme Park",
      rating: "4.8",
      ticket: "$25 Ticket",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Exciting theme park with adventure rides and family activities.",
      openingHours: "10:00 AM - 9:00 PM",
      address: "Adventure Zone",
      bestTimeToVisit: "Afternoon",
      activities: ["Rides", "Games", "Family Activities"],
    },
  ];

  const attractionList =
    attractions.length > 0 ? attractions : fallbackAttractions;

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            <Compass className="h-4 w-4" />
            Explore More
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Nearby Attractions
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            Discover beautiful places, cultural landmarks, and exciting
            attractions that can make your trip unforgettable.
          </p>
        </div>

        <button className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:text-emerald-600 hover:shadow-xl">
          Explore All Attractions
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
        {attractionList.map((place, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(16,185,129,0.18)]"
          >
            <div className="relative overflow-hidden">
              <img
                crossOrigin="anonymous"
                src={
                  place.image ||
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                }
                alt={place.name}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-xl">
                {place.type || "Popular Spot"}
              </div>

              <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <Heart className="h-5 w-5" />
              </button>

              <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-yellow-400/95 px-3 py-1.5 text-sm font-bold text-slate-900 shadow-lg">
                <Star className="h-4 w-4 fill-slate-900 text-slate-900" />
                {place.rating || "4.7"}
              </div>
            </div>

            <div className="relative p-6">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
                      {place.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-slate-500">
                      <MapPin className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-medium">
                        {place.type || "Popular Spot"}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-500">
                      <Ticket className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">
                        {place.ticket || "Entry Details Unavailable"}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50">
                    <Compass className="h-5 w-5 text-slate-600 group-hover:text-emerald-600" />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedAttraction(place)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/30"
                >
                  Explore Place
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-4">
          <div className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-4 shadow-2xl sm:p-6">
            <img
              crossOrigin="anonymous"
              src={selectedAttraction.image}
              alt={selectedAttraction.name}
              className="h-56 w-full rounded-2xl object-cover sm:h-80"
            />

            <div className="mt-6">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {selectedAttraction.name}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                  Star {selectedAttraction.rating}
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                  {selectedAttraction.type}
                </span>

                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
                  {selectedAttraction.ticket}
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {selectedAttraction.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-5 w-5 text-emerald-500" />
                    <span className="font-semibold">Opening Hours</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedAttraction.openingHours}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Camera className="h-5 w-5 text-pink-500" />
                    <span className="font-semibold">Best Time To Visit</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedAttraction.bestTimeToVisit}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPinned className="h-5 w-5 text-cyan-500" />
                  <span className="font-semibold">Address</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {selectedAttraction.address}
                </p>
              </div>

              {selectedAttraction.activities && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    Activities
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedAttraction.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedAttraction(null)}
                className="mt-10 w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttractionSection;
