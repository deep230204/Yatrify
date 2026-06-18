import { motion } from "framer-motion";
import { useState } from "react";
import {
  Clock,
  Star,
  MapPin,
  ArrowUpRight,
  Heart,
  Hotel,
  Phone,
  MapPinned,
  BedDouble,
} from "lucide-react";

const HotelsSection = ({ hotels = [] }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const fallbackHotels = [
    {
      name: "Grand Palace Resort",
      location: "Near Beach Area",
      rating: "4.8",
      price: "$120/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury beachside resort with premium rooms and sea view.",
      amenities: ["Pool", "Breakfast", "WiFi"],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 98765 43210",
      address: "Beach Road, Goa",
      roomType: "Deluxe Sea View Room",
      nearbyPlaces: ["Baga Beach", "Fort Aguada"],
    },
    {
      name: "Luxury Stay Hotel",
      location: "City Center",
      rating: "4.6",
      price: "$95/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Comfortable luxury stay with rooftop pool and city view rooms.",
      amenities: ["WiFi", "Gym", "Breakfast"],
      checkIn: "1:00 PM",
      checkOut: "10:00 AM",
      contact: "+91 99887 66554",
      address: "City Center Road",
      roomType: "Premium Family Room",
      nearbyPlaces: ["Mall", "Market"],
    },
    {
      name: "Ocean View Resort",
      location: "Sea Facing",
      rating: "4.9",
      price: "$180/night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury ocean-facing resort with spa, beach access, and infinity pool.",
      amenities: ["Pool", "Spa", "Beach View", "Breakfast"],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 90909 12345",
      address: "Sea Side Road",
      roomType: "Ocean View Suite",
      nearbyPlaces: ["Beach", "Boat Ride Point"],
    },
  ];

  const hotelList = hotels.length > 0 ? hotels : fallbackHotels;

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <Hotel className="h-4 w-4" />
            Premium Stays
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Recommended Hotels
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            Handpicked stays based on your travel style, budget, and comfort
            preferences for the perfect trip experience.
          </p>
        </div>

        <button className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-xl">
          Explore All Hotels
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
        {hotelList.map((hotel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(99,102,241,0.18)]"
          >
            <div className="relative overflow-hidden">
              <img
                crossOrigin="anonymous"
                src={
                  hotel.image ||
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                }
                alt={hotel.name}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-xl">
                {hotel.price || "Price not available"}
              </div>

              <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <Heart className="h-5 w-5" />
              </button>

              <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-yellow-400/95 px-3 py-1.5 text-sm font-bold text-slate-900 shadow-lg">
                <Star className="h-4 w-4 fill-slate-900 text-slate-900" />
                {hotel.rating || "4.5"}
              </div>
            </div>

            <div className="relative p-6">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
                      {hotel.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-slate-500">
                      <MapPin className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm font-medium">
                        {hotel.location || "Location not available"}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-500">
                      <Clock className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">
                        Instant booking available
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-indigo-50">
                    <Hotel className="h-5 w-5 text-slate-600 group-hover:text-indigo-600" />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedHotel(hotel)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/30"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {selectedHotel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
              <img
                crossOrigin="anonymous"
                src={selectedHotel.image}
                alt={selectedHotel.name}
                className="h-80 w-full rounded-2xl object-cover"
              />

              <div className="mt-6">
                <h2 className="text-4xl font-bold text-slate-900">
                  {selectedHotel.name}
                </h2>

                <p className="mt-2 flex items-center gap-2 text-slate-500">
                  <MapPin className="h-4 w-4" />
                  {selectedHotel.location}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                    Star {selectedHotel.rating}
                  </span>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                    {selectedHotel.price}
                  </span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  {selectedHotel.description}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <BedDouble className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold">Room Type</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {selectedHotel.roomType}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="h-5 w-5 text-pink-500" />
                      <span className="font-semibold">Check In / Out</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {selectedHotel.checkIn} / {selectedHotel.checkOut}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Phone className="h-5 w-5 text-emerald-500" />
                      <span className="font-semibold">Contact</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {selectedHotel.contact}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPinned className="h-5 w-5 text-orange-500" />
                      <span className="font-semibold">Address</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {selectedHotel.address}
                    </p>
                  </div>
                </div>

                {selectedHotel.amenities?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">
                      Amenities
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {selectedHotel.amenities.map((item, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedHotel.nearbyPlaces?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">
                      Nearby Places
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {selectedHotel.nearbyPlaces.map((place, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
                        >
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSelectedHotel(null)}
                  className="mt-10 w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsSection;
