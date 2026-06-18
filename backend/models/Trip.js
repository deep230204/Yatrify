const mongoose = require("mongoose");

const parseJsonLikeValue = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  if (
    !trimmedValue ||
    (!trimmedValue.startsWith("[") &&
      !trimmedValue.startsWith("{") &&
      !trimmedValue.startsWith("\"[") &&
      !trimmedValue.startsWith("\"{"))
  ) {
    return value;
  }

  try {
    const parsedValue = JSON.parse(trimmedValue);
    return typeof parsedValue === "string"
      ? parseJsonLikeValue(parsedValue)
      : parsedValue;
  } catch (error) {
    return value;
  }
};

const sanitizeStringArray = (value) => {
  const parsedValue = parseJsonLikeValue(value);

  if (!Array.isArray(parsedValue)) {
    return [];
  }

  return parsedValue
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
};

const sanitizeObjectArray = (value, nestedStringArrayFields = []) => {
  const parsedValue = parseJsonLikeValue(value);

  if (!Array.isArray(parsedValue)) {
    return [];
  }

  return parsedValue
    .map((item) => parseJsonLikeValue(item))
    .filter((item) => item && typeof item === "object" && !Array.isArray(item))
    .map((item) => {
      const normalizedItem = { ...item };

      nestedStringArrayFields.forEach((field) => {
        if (field in normalizedItem) {
          normalizedItem[field] = sanitizeStringArray(normalizedItem[field]);
        }
      });

      return normalizedItem;
    });
};

const hotelSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    rating: Number,
    price: String,
    image: String,
    description: String,
    roomType: String,
    checkIn: String,
    checkOut: String,
    contact: String,
    address: String,
    amenities: [String],
    nearbyPlaces: [String],
  },
  { _id: false }
);

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    cuisine: String,
    location: String,
    rating: Number,
    image: String,
    description: String,
    speciality: String,
    priceRange: String,
    openingHours: String,
    contact: String,
    address: String,
    features: [String],
  },
  { _id: false }
);

const attractionSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    rating: Number,
    ticket: String,
    image: String,
    description: String,
    openingHours: String,
    address: String,
    bestTimeToVisit: String,
    activities: [String],
  },
  { _id: false }
);

const itinerarySchema = new mongoose.Schema(
  {
    day: String,
    title: String,
    morning: String,
    afternoon: String,
    evening: String,
    recommendedHotel: String,
    recommendedRestaurant: String,
    recommendedAttraction: String,
  },
  { _id: false }
);

const tripSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    travelers: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    backgroundImage: {
      type: String,
      default: "",
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["upcoming", "completed", "archived"],
      default: "upcoming",
    },

    hotels: {
      type: [hotelSchema],
      default: [],
      set: (value) => sanitizeObjectArray(value, ["amenities", "nearbyPlaces"]),
    },

    restaurants: {
      type: [restaurantSchema],
      default: [],
      set: (value) => sanitizeObjectArray(value, ["features"]),
    },

    attractions: {
      type: [attractionSchema],
      default: [],
      set: (value) => sanitizeObjectArray(value, ["activities"]),
    },

    itinerary: {
      type: [itinerarySchema],
      default: [],
      set: (value) => sanitizeObjectArray(value),
    },

    totalHotels: {
      type: Number,
      default: 0,
    },

    totalRestaurants: {
      type: Number,
      default: 0,
    },

    totalAttractions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Trip || mongoose.model("Trip", tripSchema);
