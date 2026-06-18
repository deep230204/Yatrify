import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star,
  MapPin,
  UtensilsCrossed,
  ArrowUpRight,
  Heart,
  ChefHat,
  Clock,
  Phone,
  IndianRupee,
} from "lucide-react";

const RestaurantSection = ({ restaurants = [] }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const fallbackRestaurants = [
    {
      name: "Sunset Rooftop Cafe",
      cuisine: "Italian & Continental",
      rating: "4.8",
      location: "City Center",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury rooftop cafe with beautiful city skyline views and premium dining.",
      speciality: "Wood Fired Pizza",
      priceRange: "$20 - $40",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+91 98765 43210",
      address: "Main City Center Road",
      features: ["Outdoor Seating", "Live Music", "Family Friendly"],
    },
    {
      name: "Spice Garden",
      cuisine: "Indian & Asian",
      rating: "4.7",
      location: "Downtown",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant known for authentic Indian and Asian dishes.",
      speciality: "Paneer Tikka Platter",
      priceRange: "$15 - $30",
      openingHours: "10:00 AM - 10:00 PM",
      contact: "+91 99887 66554",
      address: "Downtown Main Street",
      features: ["Air Conditioned", "Parking", "Vegetarian Options"],
    },
    {
      name: "Ocean Breeze Dining",
      cuisine: "Seafood",
      rating: "4.9",
      location: "Beach Side",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium seafood restaurant with beachside dining experience.",
      speciality: "Grilled Lobster",
      priceRange: "$25 - $60",
      openingHours: "12:00 PM - 12:00 AM",
      contact: "+91 90909 12345",
      address: "Beach Side Road",
      features: ["Beach View", "Seafood Special", "Romantic Dining"],
    },
  ];

  const restaurantList =
    restaurants.length > 0 ? restaurants : fallbackRestaurants;

  return (
    <div className="mt-14">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
            <ChefHat className="h-4 w-4" />
            Food & Dining
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Best Restaurants
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
            Discover top-rated cafes, rooftop dining spots, and local food
            experiences that perfectly match your travel vibe.
          </p>
        </div>

        <button className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:text-orange-600 hover:shadow-xl">
          Explore All Restaurants
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
        {restaurantList.map((restaurant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[34px] border border-white/20 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(249,115,22,0.18)]"
          >
            <div className="relative overflow-hidden">
              <img
                crossOrigin="anonymous"
                src={
                  restaurant.image ||
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                }
                alt={restaurant.name}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-xl">
                {restaurant.cuisine || "Popular Cuisine"}
              </div>

              <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <Heart className="h-5 w-5" />
              </button>

              <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-yellow-400/95 px-3 py-1.5 text-sm font-bold text-slate-900 shadow-lg">
                <Star className="h-4 w-4 fill-slate-900 text-slate-900" />
                {restaurant.rating || "4.5"}
              </div>
            </div>

            <div className="relative p-6">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                      {restaurant.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-slate-500">
                      <UtensilsCrossed className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">
                        {restaurant.cuisine || "Popular Cuisine"}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-500">
                      <MapPin className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">
                        {restaurant.location || "Prime Location"}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-all duration-300 group-hover:border-orange-200 group-hover:bg-orange-50">
                    <ChefHat className="h-5 w-5 text-slate-600 group-hover:text-orange-600" />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30"
                >
                  View Restaurant
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
            <img
              crossOrigin="anonymous"
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="h-80 w-full rounded-2xl object-cover"
            />

            <div className="mt-6">
              <h2 className="text-4xl font-bold text-slate-900">
                {selectedRestaurant.name}
              </h2>

              <p className="mt-2 flex items-center gap-2 text-slate-500">
                <MapPin className="h-4 w-4" />
                {selectedRestaurant.location}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
                  Star {selectedRestaurant.rating}
                </span>

                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                  {selectedRestaurant.cuisine}
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {selectedRestaurant.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <UtensilsCrossed className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold">Speciality</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedRestaurant.speciality}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <IndianRupee className="h-5 w-5 text-emerald-500" />
                    <span className="font-semibold">Price Range</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedRestaurant.priceRange}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-5 w-5 text-pink-500" />
                    <span className="font-semibold">Opening Hours</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedRestaurant.openingHours}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-5 w-5 text-indigo-500" />
                    <span className="font-semibold">Contact</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {selectedRestaurant.contact}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="font-semibold">Address</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {selectedRestaurant.address}
                </p>
              </div>

              {selectedRestaurant.features && (
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    Features
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedRestaurant.features.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedRestaurant(null)}
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

export default RestaurantSection;
