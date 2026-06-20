import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  Route,
  Globe2,
  ArrowUpRight,
  Compass,
} from "lucide-react";

const MapSection = ({ tripData }) => {
  const destination = tripData?.destination || "Goa";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    destination
  )}&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(99,102,241,0.18)]"
    >
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <Globe2 className="h-4 w-4" />
            Smart Navigation
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Trip Map
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            Explore your destination visually with hotels, restaurants,
            attractions, and optimized travel routes all in one place.
          </p>
        </div>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            destination
          )}`}
          target="_blank"
          rel="noreferrer"
          className="group/button inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-xl sm:w-auto"
        >
          Open Full Map
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
        </a>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-6 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="absolute left-10 top-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-[0_20px_50px_rgba(99,102,241,0.35)] backdrop-blur-2xl"
            >
              <MapPinned className="h-12 w-12 text-indigo-300" />
            </motion.div>

            <h3 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {destination}
            </h3>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
              Explore your selected destination with nearby attractions,
              restaurants, hotels, and travel routes directly on the live map.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
            <iframe
              title="Destination Map"
              src={mapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full rounded-[28px] sm:h-[450px]"
            />
          </div>

          <div className="mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="group/card rounded-[28px] border border-white/10 bg-white/10 p-5 text-left shadow-lg backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
                <Navigation className="h-7 w-7" />
              </div>

              <h4 className="text-lg font-bold text-white">Live Routes</h4>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Explore the fastest and best travel paths between attractions,
                hotels, and restaurants.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="group/card rounded-[28px] border border-white/10 bg-white/10 p-5 text-left shadow-lg backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">
                <MapPinned className="h-7 w-7" />
              </div>

              <h4 className="text-lg font-bold text-white">Nearby Places</h4>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Discover hotels, cafes, beaches, shopping spots, and famous
                places around your destination.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="group/card rounded-[28px] border border-white/10 bg-white/10 p-5 text-left shadow-lg backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300">
                <Route className="h-7 w-7" />
              </div>

              <h4 className="text-lg font-bold text-white">
                Trip Navigation
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Visualize your complete day-wise travel journey with a smart map
                and route planner.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl">
            <Compass className="h-4 w-4 text-cyan-300" />
            Real place map experience
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;
