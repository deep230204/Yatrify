const axios = require("axios");
const Trip = require("../models/Trip");
const destinations = require("../Data/destinations");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop";

const HERO_IMAGE_MAP = {
  goa:
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
  mumbai:
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1600&auto=format&fit=crop",
  delhi:
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
  bali:
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1600&auto=format&fit=crop",
  paris:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
  tokyo:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
  london:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
  "new york":
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop",
  maldives:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",
  kerala:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
  jaipur:
    "https://images.unsplash.com/photo-1599661046827-dacde6976548?q=80&w=1600&auto=format&fit=crop",
  manali:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
};

const CATEGORY_FALLBACK_IMAGES = {
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  ],
  restaurant: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  ],
  attraction: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  ],
};

const GOOGLE_PLACES_TEXT_SEARCH_URL =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";
const GOOGLE_PLACES_DETAILS_URL =
  "https://maps.googleapis.com/maps/api/place/details/json";
const GOOGLE_PLACES_PHOTO_URL =
  "https://maps.googleapis.com/maps/api/place/photo";
const GROQ_CHAT_COMPLETIONS_URL =
  "https://api.groq.com/openai/v1/chat/completions";

const hasLocalDestinationData = (data) => {
  if (!data) return false;

  return (
    (data.hotels && data.hotels.length > 0) ||
    (data.restaurants && data.restaurants.length > 0) ||
    (data.attractions && data.attractions.length > 0) ||
    (data.itineraryTemplates && data.itineraryTemplates.length > 0)
  );
};

const getPlacesApiKey = () =>
  process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY || "";

const getBudgetLevelLabel = (priceLevel = 0) => {
  if (!priceLevel) return "Price not available";

  const repeatCount = Math.max(1, Math.min(priceLevel, 4));
  const symbols = Array.from({ length: repeatCount }, () => "INR").join(" ");
  return `${symbols} budget level`;
};

const getPriceRange = (priceLevel = 0) => {
  if (!priceLevel) return "Price not available";

  const symbols = "₹".repeat(Math.max(1, Math.min(priceLevel, 4)));
  return `${symbols} budget level`;
};

const hashStringToIndex = (value, length) => {
  if (!value || !length) {
    return 0;
  }

  const hash = [...String(value)].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );

  return hash % length;
};

const getDestinationHeroImage = (destination = "") => {
  const normalizedDestination = String(destination).trim().toLowerCase();
  const matchedEntry = Object.entries(HERO_IMAGE_MAP).find(([key]) =>
    normalizedDestination.includes(key)
  );

  return matchedEntry?.[1] || FALLBACK_IMAGE;
};

const getFallbackPlaceImage = (category, destination, seed = "") => {
  const options = CATEGORY_FALLBACK_IMAGES[category] || [FALLBACK_IMAGE];
  const index = hashStringToIndex(`${destination}-${seed}`, options.length);
  return options[index] || FALLBACK_IMAGE;
};

const getPhotoUrl = (photoReference, apiKey, fallbackImage = FALLBACK_IMAGE) => {
  if (!photoReference || !apiKey) {
    return fallbackImage;
  }

  return `${GOOGLE_PLACES_PHOTO_URL}?maxwidth=1200&photoreference=${encodeURIComponent(photoReference)}&key=${encodeURIComponent(apiKey)}`;
};

const parseFeatures = (types = []) =>
  types
    .map((type) => type.replace(/_/g, " "))
    .filter(Boolean)
    .slice(0, 4);

const getPlaceDetails = async (placeId, apiKey) => {
  try {
    const response = await axios.get(GOOGLE_PLACES_DETAILS_URL, {
      params: {
        place_id: placeId,
        key: apiKey,
        fields: [
          "name",
          "formatted_address",
          "formatted_phone_number",
          "opening_hours",
          "website",
          "rating",
          "price_level",
          "types",
          "editorial_summary",
          "geometry",
        ].join(","),
      },
      timeout: 10000,
    });

    return response.data?.result || {};
  } catch (error) {
    console.log("Google Place Details Error:", error.message);
    return {};
  }
};

const searchPlaces = async (query, apiKey, limit = 6) => {
  const response = await axios.get(GOOGLE_PLACES_TEXT_SEARCH_URL, {
    params: {
      query,
      key: apiKey,
    },
    timeout: 15000,
  });

  return (response.data?.results || []).slice(0, limit);
};

const mapHotelPlace = async (place, destination, apiKey) => {
  const details = await getPlaceDetails(place.place_id, apiKey);
  const fallbackImage = getFallbackPlaceImage(
    "hotel",
    destination,
    place.place_id || place.name
  );

  return {
    name: place.name,
    location: place.formatted_address || destination,
    rating: place.rating || details.rating || 0,
    price: getBudgetLevelLabel(place.price_level || details.price_level),
    image: getPhotoUrl(place.photos?.[0]?.photo_reference, apiKey, fallbackImage),
    description:
      details.editorial_summary?.overview ||
      `${place.name} is a popular hotel option in ${destination}.`,
    amenities: parseFeatures(place.types || details.types),
    roomType: "Room details available on booking",
    checkIn: "Check with hotel",
    checkOut: "Check with hotel",
    contact: details.formatted_phone_number || "Contact via Google Maps",
    address: details.formatted_address || place.formatted_address || destination,
    nearbyPlaces: [],
    placeId: place.place_id,
    mapsUrl: place.place_id
      ? `https://www.google.com/maps/place/?q=place_id:${place.place_id}`
      : "",
  };
};

const mapRestaurantPlace = async (place, destination, apiKey) => {
  const details = await getPlaceDetails(place.place_id, apiKey);
  const fallbackImage = getFallbackPlaceImage(
    "restaurant",
    destination,
    place.place_id || place.name
  );

  return {
    name: place.name,
    cuisine: parseFeatures(place.types || details.types).join(", ") || "Restaurant",
    location: place.formatted_address || destination,
    rating: place.rating || details.rating || 0,
    image: getPhotoUrl(place.photos?.[0]?.photo_reference, apiKey, fallbackImage),
    description:
      details.editorial_summary?.overview ||
      `${place.name} is a well-known restaurant in ${destination}.`,
    speciality: parseFeatures(place.types || details.types)[0] || "Popular dishes",
    priceRange: getBudgetLevelLabel(place.price_level || details.price_level),
    openingHours:
      details.opening_hours?.weekday_text?.[0] || "Check Google Maps for hours",
    contact: details.formatted_phone_number || "Contact via Google Maps",
    address: details.formatted_address || place.formatted_address || destination,
    features: parseFeatures(place.types || details.types),
    placeId: place.place_id,
    mapsUrl: place.place_id
      ? `https://www.google.com/maps/place/?q=place_id:${place.place_id}`
      : "",
  };
};

const mapAttractionPlace = async (place, destination, apiKey) => {
  const details = await getPlaceDetails(place.place_id, apiKey);
  const fallbackImage = getFallbackPlaceImage(
    "attraction",
    destination,
    place.place_id || place.name
  );

  return {
    name: place.name,
    type: parseFeatures(place.types || details.types)[0] || "Attraction",
    rating: place.rating || details.rating || 0,
    ticket: "Check latest entry fee",
    image: getPhotoUrl(place.photos?.[0]?.photo_reference, apiKey, fallbackImage),
    description:
      details.editorial_summary?.overview ||
      `${place.name} is a notable attraction in ${destination}.`,
    openingHours:
      details.opening_hours?.weekday_text?.[0] || "Check Google Maps for hours",
    address: details.formatted_address || place.formatted_address || destination,
    bestTimeToVisit: "Morning or evening",
    activities: parseFeatures(place.types || details.types),
    placeId: place.place_id,
    mapsUrl: place.place_id
      ? `https://www.google.com/maps/place/?q=place_id:${place.place_id}`
      : "",
  };
};

const fetchRealDestinationData = async (destination, apiKey) => {
  if (!apiKey) {
    return null;
  }

  try {
    const [hotelPlaces, restaurantPlaces, attractionPlaces] = await Promise.all([
      searchPlaces(`best hotels in ${destination}`, apiKey),
      searchPlaces(`best restaurants in ${destination}`, apiKey),
      searchPlaces(`top tourist attractions in ${destination}`, apiKey),
    ]);

    const hotels = await Promise.all(
      hotelPlaces.slice(0, 4).map((place) => mapHotelPlace(place, destination, apiKey))
    );
    const restaurants = await Promise.all(
      restaurantPlaces
        .slice(0, 6)
        .map((place) => mapRestaurantPlace(place, destination, apiKey))
    );
    const attractions = await Promise.all(
      attractionPlaces
        .slice(0, 6)
        .map((place) => mapAttractionPlace(place, destination, apiKey))
    );

    if (!hotels.length && !restaurants.length && !attractions.length) {
      return null;
    }

    return { hotels, restaurants, attractions };
  } catch (error) {
    console.log("Google Places Search Error:", error.response?.data || error.message);
    return null;
  }
};

const buildPrompt = ({
  destination,
  days,
  budget,
  travelers,
  hotels,
  restaurants,
  attractions,
}) => `
Create a travel plan for ${destination} for ${days} days.

Budget: ${budget}
Travelers: ${travelers}

Use the real places below. Do not invent new hotel, restaurant, or attraction names unless a category is empty.

Hotels:
${JSON.stringify(hotels, null, 2)}

Restaurants:
${JSON.stringify(restaurants, null, 2)}

Attractions:
${JSON.stringify(attractions, null, 2)}

IMPORTANT:
- Return only pure JSON
- Do not include markdown
- Do not include explanation text
- Response must start with {
- Response must end with }
- Keep the same hotels, restaurants, and attractions if they are already provided
- Focus mainly on producing a useful itinerary

Return JSON in this format:
{
  "hotels": [],
  "restaurants": [],
  "attractions": [],
  "itinerary": [
    {
      "day": "",
      "title": "",
      "morning": "",
      "afternoon": "",
      "evening": ""
    }
  ]
}
`;

const parseAiTripData = (text) => {
  const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
  const jsonStart = cleanedText.indexOf("{");
  const jsonEnd = cleanedText.lastIndexOf("}") + 1;

  if (jsonStart === -1 || jsonEnd <= 0) {
    throw new Error("Gemini response did not contain valid JSON.");
  }

  return JSON.parse(cleanedText.slice(jsonStart, jsonEnd));
};

const getErrorDetails = (error) => ({
  message: error.message,
  status: error?.status || error?.response?.status || null,
  code: error?.code || error?.response?.data?.error?.code || null,
  details: error?.response?.data?.error?.message || error?.response?.data || null,
});

const buildGroqPayload = (prompt, model) => ({
  model,
  temperature: 0.4,
  messages: [
    {
      role: "system",
      content:
        "You are a travel planner. Return only valid JSON matching the user schema with no markdown or extra text.",
    },
    {
      role: "user",
      content: prompt,
    },
  ],
});

const generateItineraryWithGemini = async (prompt, apiKey) => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};

const generateItineraryWithGroq = async (prompt, apiKey) => {
  const response = await axios.post(
    GROQ_CHAT_COMPLETIONS_URL,
    buildGroqPayload(prompt, process.env.GROQ_MODEL || "llama-3.3-70b-versatile"),
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      timeout: 30000,
    }
  );

  return response.data?.choices?.[0]?.message?.content || "";
};

const parseJsonArrayString = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  if (
    !trimmedValue ||
    (!trimmedValue.startsWith("[") && !trimmedValue.startsWith("{"))
  ) {
    return value;
  }

  try {
    return JSON.parse(trimmedValue);
  } catch (error) {
    return value;
  }
};

const sanitizeDisplayString = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/â‚¹/g, "INR ")
    .replace(/\s+/g, " ")
    .trim();
};

const normalizeStringArray = (value) => {
  const parsedValue = parseJsonArrayString(value);

  if (!Array.isArray(parsedValue)) {
    return [];
  }

  return parsedValue
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
};

const normalizeEntityArray = (value, allowedFields, arrayFields = []) => {
  const parsedValue = parseJsonArrayString(value);

  if (!Array.isArray(parsedValue)) {
    return [];
  }

  return parsedValue
    .map((item) => parseJsonArrayString(item))
    .filter((item) => item && typeof item === "object" && !Array.isArray(item))
    .map((item) => {
      const normalizedItem = {};

      allowedFields.forEach((field) => {
        if (arrayFields.includes(field)) {
          normalizedItem[field] = normalizeStringArray(item[field]);
          return;
        }

        if (item[field] !== undefined && item[field] !== null) {
          normalizedItem[field] =
            typeof item[field] === "string"
              ? sanitizeDisplayString(item[field])
              : item[field];
        }
      });

      return normalizedItem;
    })
    .filter((item) => Object.keys(item).length > 0);
};

const normalizeItineraryTemplates = (value) =>
  normalizeEntityArray(value, ["day", "title", "morning", "afternoon", "evening"]);

const normalizeAiTripData = (value) => ({
  hotels: normalizeEntityArray(value?.hotels, [
    "name",
    "location",
    "rating",
    "price",
    "image",
    "description",
    "roomType",
    "checkIn",
    "checkOut",
    "contact",
    "address",
    "amenities",
    "nearbyPlaces",
  ], ["amenities", "nearbyPlaces"]),
  restaurants: normalizeEntityArray(value?.restaurants, [
    "name",
    "cuisine",
    "location",
    "rating",
    "image",
    "description",
    "speciality",
    "priceRange",
    "openingHours",
    "contact",
    "address",
    "features",
  ], ["features"]),
  attractions: normalizeEntityArray(value?.attractions, [
    "name",
    "type",
    "rating",
    "ticket",
    "image",
    "description",
    "openingHours",
    "address",
    "bestTimeToVisit",
    "activities",
  ], ["activities"]),
  itinerary: normalizeItineraryTemplates(value?.itinerary),
});

const sanitizeTripCollections = ({ hotels, restaurants, attractions, itinerary }) => ({
  hotels: normalizeEntityArray(hotels, [
    "name",
    "location",
    "rating",
    "price",
    "image",
    "description",
    "roomType",
    "checkIn",
    "checkOut",
    "contact",
    "address",
    "amenities",
    "nearbyPlaces",
  ], ["amenities", "nearbyPlaces"]),
  restaurants: normalizeEntityArray(restaurants, [
    "name",
    "cuisine",
    "location",
    "rating",
    "image",
    "description",
    "speciality",
    "priceRange",
    "openingHours",
    "contact",
    "address",
    "features",
  ], ["features"]),
  attractions: normalizeEntityArray(attractions, [
    "name",
    "type",
    "rating",
    "ticket",
    "image",
    "description",
    "openingHours",
    "address",
    "bestTimeToVisit",
    "activities",
  ], ["activities"]),
  itinerary: normalizeItineraryTemplates(itinerary),
});

const buildFallbackDestinationData = (destination) => ({
  backgroundImage: getDestinationHeroImage(destination),
  hotels: [
    {
      name: `${destination} Grand Stay Hotel`,
      location: `${destination} City Center`,
      rating: 4.5,
      price: "₹₹ budget level",
      image: getFallbackPlaceImage("hotel", destination, "fallback-hotel-1"),
      description: `Comfortable hotel option in ${destination}.`,
      amenities: ["WiFi", "Breakfast", "Parking"],
      roomType: "Standard Room",
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      contact: "Contact at hotel reception",
      address: `${destination} Main City Center Road`,
      nearbyPlaces: [`${destination} Shopping Area`, `${destination} Bus Station`],
    },
  ],
  restaurants: [
    {
      name: `${destination} Local Food Hub`,
      cuisine: "Local, Casual Dining",
      location: `${destination} Main Market`,
      rating: 4.3,
      image: getFallbackPlaceImage("restaurant", destination, "fallback-restaurant-1"),
      description: `Popular restaurant option in ${destination}.`,
      speciality: `${destination} Local Food`,
      priceRange: "₹₹ budget level",
      openingHours: "10:00 AM - 10:00 PM",
      contact: "Check local listing",
      address: `${destination} Main Market Road`,
      features: ["Family Dining", "Parking"],
    },
  ],
  attractions: [
    {
      name: `${destination} City Landmark`,
      type: "Popular Place",
      rating: 4.5,
      ticket: "Check local entry fee",
      image: getFallbackPlaceImage("attraction", destination, "fallback-attraction-1"),
      description: `A popular attraction in ${destination}.`,
      openingHours: "9:00 AM - 6:00 PM",
      address: `${destination} City Center`,
      bestTimeToVisit: "Morning",
      activities: ["Sightseeing", "Photography"],
    },
  ],
  itineraryTemplates: [
    {
      title: `Arrival in ${destination}`,
      morning: "Hotel check-in",
      afternoon: `Explore local places in ${destination}`,
      evening: `Dinner in ${destination}`,
    },
    {
      title: `${destination} City Tour`,
      morning: `Visit attractions in ${destination}`,
      afternoon: "Lunch and shopping",
      evening: "Relax and explore nightlife",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and checkout",
      afternoon: `Last-minute visit around ${destination}`,
      evening: "Departure",
    },
  ],
});

const buildDynamicItinerary = ({
  days,
  itineraryTemplates,
  hotels,
  restaurants,
  attractions,
}) => {
  const safeTemplates =
    itineraryTemplates.length > 0
      ? itineraryTemplates
      : [
          {
            title: "Arrival and Local Visit",
            morning: "Hotel check-in",
            afternoon: "Explore local places",
            evening: "Dinner at restaurant",
          },
        ];

  const dynamicItinerary = [];

  for (let index = 0; index < Number(days || 1); index += 1) {
    const template = safeTemplates[index % safeTemplates.length];
    dynamicItinerary.push({
      day: `Day ${index + 1}`,
      title: template.title,
      morning: template.morning,
      afternoon: template.afternoon,
      evening: template.evening,
      recommendedHotel:
        hotels[index % Math.max(hotels.length, 1)]?.name ||
        "Hotel Recommendation Not Available",
      recommendedRestaurant:
        restaurants[index % Math.max(restaurants.length, 1)]?.name ||
        "Restaurant Recommendation Not Available",
      recommendedAttraction:
        attractions[index % Math.max(attractions.length, 1)]?.name ||
        "Attraction Recommendation Not Available",
    });
  }

  return dynamicItinerary;
};

const generateTrip = async (req, res) => {
  try {
    const { destination, days, budget, travelers } = req.body;
    const destinationName = destination?.toLowerCase()?.trim().replace(/\s+/g, "");
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const groqApiKey = process.env.GROQ_API_KEY;
    const placesApiKey = getPlacesApiKey();
    const destinationData = destinations[destinationName];
    const hasLocalData = hasLocalDestinationData(destinationData);

    let hotels = [];
    let restaurants = [];
    let attractions = [];
    let itineraryTemplates = [];
    let backgroundImage = "";

    const realData = await fetchRealDestinationData(destination, placesApiKey);

    if (realData) {
      hotels = realData.hotels || [];
      restaurants = realData.restaurants || [];
      attractions = realData.attractions || [];
      backgroundImage =
        destinationData?.backgroundImage ||
        realData.attractions?.[0]?.image ||
        realData.hotels?.[0]?.image ||
        getDestinationHeroImage(destination);
      console.log(`Loaded real Google Places data for ${destination}.`);
    } else if (hasLocalData) {
      hotels = destinationData.hotels || [];
      restaurants = destinationData.restaurants || [];
      attractions = destinationData.attractions || [];
      itineraryTemplates = destinationData.itineraryTemplates || [];
      backgroundImage =
        destinationData.backgroundImage ||
        destinationData.attractions?.[0]?.image ||
        destinationData.hotels?.[0]?.image ||
        getDestinationHeroImage(destination);
      console.log(`Using local destination data for ${destination}.`);
    } else {
      return res.status(400).json({
        message: `Destination "${destination}" is not supported. Please select a supported destination from our curated list (e.g. Goa, Dubai, Paris, Mumbai, Delhi).`,
      });
    }

    const prompt = buildPrompt({
      destination,
      days,
      budget,
      travelers,
      hotels,
      restaurants,
      attractions,
    });

    let aiText = "";
    let aiProvider = "";

    if (groqApiKey) {
      try {
        aiText = await generateItineraryWithGroq(prompt, groqApiKey);
        aiProvider = "groq";
        console.log(`Groq itinerary generated for ${destination}.`);
      } catch (groqError) {
        const errorDetails = getErrorDetails(groqError);
        console.log("Groq itinerary generation failed:", errorDetails);
      }
    } else {
      console.log("GROQ_API_KEY missing, skipping Groq itinerary generation.");
    }

    if (!aiText && geminiApiKey) {
      try {
        aiText = await generateItineraryWithGemini(prompt, geminiApiKey);
        aiProvider = "gemini";
        console.log(`Gemini itinerary generated for ${destination}.`);
      } catch (aiError) {
        const errorDetails = getErrorDetails(aiError);
        console.log("Gemini itinerary generation failed:", errorDetails);
      }
    } else if (!geminiApiKey) {
      console.log("GEMINI_API_KEY missing, skipping Gemini itinerary generation.");
    }

    if (aiText) {
      try {
        const aiTripData = parseAiTripData(aiText);
        const normalizedAiTripData = normalizeAiTripData(aiTripData);

        hotels = normalizedAiTripData.hotels.length
          ? normalizedAiTripData.hotels
          : hotels;
        restaurants = normalizedAiTripData.restaurants.length
          ? normalizedAiTripData.restaurants
          : restaurants;
        attractions = normalizedAiTripData.attractions.length
          ? normalizedAiTripData.attractions
          : attractions;
        itineraryTemplates = normalizedAiTripData.itinerary.length
          ? normalizedAiTripData.itinerary
          : itineraryTemplates;

        console.log(
          `${aiProvider === "groq" ? "Groq" : "Gemini"} itinerary JSON parsed successfully for ${destination}.`
        );
      } catch (parseError) {
        console.log(
          `${aiProvider === "groq" ? "Groq" : "Gemini"} response parse failed:`,
          getErrorDetails(parseError)
        );
      }
    }

    if (!itineraryTemplates.length) {
      itineraryTemplates = hasLocalData
        ? destinationData.itineraryTemplates || []
        : buildFallbackDestinationData(destination).itineraryTemplates;
    }

    const sanitizedCollections = sanitizeTripCollections({
      hotels,
      restaurants,
      attractions,
      itinerary: buildDynamicItinerary({
        days,
        itineraryTemplates,
        hotels,
        restaurants,
        attractions,
      }),
    });

    const tripData = {
      destination,
      days,
      budget,
      travelers,
      createdBy: req.user._id,
      backgroundImage,
      isSaved: false,
      notes: "",
      status: "upcoming",
      hotels: sanitizedCollections.hotels,
      restaurants: sanitizedCollections.restaurants,
      attractions: sanitizedCollections.attractions,
      itinerary: sanitizedCollections.itinerary,
      totalHotels: sanitizedCollections.hotels.length,
      totalRestaurants: sanitizedCollections.restaurants.length,
      totalAttractions: sanitizedCollections.attractions.length,
      dataSource: realData
        ? "google-places"
        : hasLocalData
          ? "local-dataset"
          : "fallback",
      aiProvider: aiProvider || "none",
    };

    try {
      console.log(`Saving trip to MongoDB for destination: ${tripData.destination}`);
      const savedTrip = await Trip.create(tripData);
      return res.status(200).json({
        ...savedTrip.toObject(),
        savedToDb: true,
      });
    } catch (dbError) {
      console.log("Mongo Save Error Message:", dbError.message);
      console.log("Mongo Save Error Details:", {
        hotelType: typeof tripData.hotels?.[0],
        restaurantType: typeof tripData.restaurants?.[0],
        attractionType: typeof tripData.attractions?.[0],
        itineraryType: typeof tripData.itinerary?.[0],
      });
      console.log("Mongo Save Error Stack:", dbError.stack);
      return res.status(200).json({
        ...tripData,
        savedToDb: false,
        saveError: dbError.message,
      });
    }
  } catch (error) {
    console.log("Trip Generate Error:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getMyTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ createdBy: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    const summary = {
      totalTrips: trips.length,
      savedTrips: trips.filter((trip) => trip.isSaved).length,
      upcomingTrips: trips.filter((trip) => trip.status === "upcoming").length,
      completedTrips: trips.filter((trip) => trip.status === "completed").length,
      archivedTrips: trips.filter((trip) => trip.status === "archived").length,
      totalHotelsExplored: trips.reduce(
        (sum, trip) => sum + (trip.totalHotels || 0),
        0
      ),
      totalRestaurantsExplored: trips.reduce(
        (sum, trip) => sum + (trip.totalRestaurants || 0),
        0
      ),
      totalAttractionsExplored: trips.reduce(
        (sum, trip) => sum + (trip.totalAttractions || 0),
        0
      ),
      totalPlannedDays: trips.reduce((sum, trip) => sum + (trip.days || 0), 0),
      favoriteBudget:
        Object.entries(
          trips.reduce((acc, trip) => {
            acc[trip.budget] = (acc[trip.budget] || 0) + 1;
            return acc;
          }, {})
        ).sort((a, b) => b[1] - a[1])[0]?.[0] || "No trips yet",
      recentDestination: trips[0]?.destination || "No trips yet",
    };

    return res.status(200).json({ summary, trips });
  } catch (error) {
    console.log("Get My Trips Error:", error.message);
    return res.status(500).json({ message: "Unable to load dashboard trips." });
  }
};

const toggleSaveTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const { isSaved } = req.body;

    const trip = await Trip.findOne({
      _id: id,
      createdBy: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }

    trip.isSaved = Boolean(isSaved);
    await trip.save();

    return res.status(200).json({
      message: trip.isSaved ? "Trip saved successfully." : "Trip removed from saved trips.",
      trip,
    });
  } catch (error) {
    console.log("Toggle Save Trip Error:", error.message);
    return res.status(500).json({ message: "Unable to update saved trip." });
  }
};

const updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes, status } = req.body;

    const trip = await Trip.findOne({
      _id: id,
      createdBy: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }

    if (typeof notes === "string") {
      trip.notes = notes.trim();
    }

    if (["upcoming", "completed", "archived"].includes(status)) {
      trip.status = status;
    }

    await trip.save();

    return res.status(200).json({
      message: "Trip updated successfully.",
      trip,
    });
  } catch (error) {
    console.log("Update Trip Error:", error.message);
    return res.status(500).json({ message: "Unable to update trip." });
  }
};

const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;

    const trip = await Trip.findOneAndDelete({
      _id: id,
      createdBy: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found." });
    }

    return res.status(200).json({ message: "Trip deleted successfully." });
  } catch (error) {
    console.log("Delete Trip Error:", error.message);
    return res.status(500).json({ message: "Unable to delete trip." });
  }
};

module.exports = { generateTrip, getMyTrips, toggleSaveTrip, updateTrip, deleteTrip };
