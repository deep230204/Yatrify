const destinations = {
  goa: {
  hotels: [
    {
      id: 1,
      name: "Taj Goa Resort",
      location: "Candolim Beach",
      rating: 4.8,
      price: "₹8000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury beach resort with sea-facing rooms, spa, infinity pool, and private beach access.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Beach View",
        "Free WiFi",
        "Airport Pickup",
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 98765 43210",
      address: "Candolim Beach Road, North Goa",
      roomType: "Deluxe Sea View Room",
      nearbyPlaces: ["Baga Beach", "Fort Aguada", "Calangute Beach"],
    },
    {
      id: 2,
      name: "Sea Breeze Hotel",
      location: "Calangute",
      rating: 4.5,
      price: "₹5000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Comfortable hotel near beach with pool, breakfast, and family-friendly stay.",
      amenities: [
        "WiFi",
        "Pool",
        "Breakfast",
        "Parking",
        "Restaurant",
      ],
      checkIn: "1:00 PM",
      checkOut: "10:00 AM",
      contact: "+91 99887 66554",
      address: "Calangute Main Road, Goa",
      roomType: "Premium Family Room",
      nearbyPlaces: ["Calangute Beach", "Anjuna Beach", "Night Market"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Sea View Restaurant",
      cuisine: "Seafood",
      location: "Baga Beach",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular seafood restaurant near beach with sunset dining experience.",
      speciality: "Grilled Lobster and Prawns",
      priceRange: "₹1200 - ₹2500",
      openingHours: "11:00 AM - 11:30 PM",
      contact: "+91 98712 34567",
      address: "Baga Beach Road, Goa",
      features: [
        "Outdoor Seating",
        "Beach View",
        "Family Friendly",
        "Live Music",
      ],
    },
    {
      id: 2,
      name: "Goa Spice Hub",
      cuisine: "Indian & Chinese",
      location: "Panjim",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Family-friendly restaurant known for local Goa flavors and Indian dishes.",
      speciality: "Goan Thali",
      priceRange: "₹800 - ₹1800",
      openingHours: "10:00 AM - 10:00 PM",
      contact: "+91 90909 12345",
      address: "MG Road, Panjim, Goa",
      features: [
        "Family Dining",
        "Parking",
        "Air Conditioned",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Baga Beach",
      type: "Beach",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous Goa beach with nightlife, water sports, cafes, and sunset views.",
      openingHours: "Open 24 Hours",
      address: "Baga, North Goa",
      bestTimeToVisit: "November to February",
      activities: [
        "Parasailing",
        "Jet Ski",
        "Nightlife",
        "Beach Walk",
      ],
    },
    {
      id: 2,
      name: "Fort Aguada",
      type: "Historical Place",
      rating: 4.6,
      ticket: "₹100 Entry",
      image:
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
      description:
        "Historic Portuguese fort with sea views and old lighthouse.",
      openingHours: "9:00 AM - 6:00 PM",
      address: "Sinquerim, Goa",
      bestTimeToVisit: "Morning and Sunset",
      activities: [
        "Photography",
        "Sightseeing",
        "Historical Tour",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Beach Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Relax at Baga Beach",
      evening: "Dinner at Sea View Restaurant",
    },
    {
      title: "Fort Aguada and Shopping",
      morning: "Visit Fort Aguada",
      afternoon: "Lunch and local shopping",
      evening: "Explore local cafes",
    },
    {
      title: "Water Sports Day",
      morning: "Jet Ski and Parasailing",
      afternoon: "Lunch at Goa Spice Hub",
      evening: "Sunset at Anjuna Beach",
    },
    {
      title: "Island and Cruise Trip",
      morning: "Boat Ride and Dolphin Tour",
      afternoon: "Lunch near beach",
      evening: "Casino or Cruise Dinner",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local market visit",
      afternoon: "Lunch and packing",
      evening: "Departure",
    },
  ],
},

 dubai: {
  backgroundImage:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Atlantis The Palm",
      location: "Palm Jumeirah",
      rating: 4.9,
      price: "₹18000/night",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury beachfront resort with waterpark access, aquarium, fine dining, and stunning sea views.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Private Beach",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+971 4 426 2000",
      address: "Palm Jumeirah, Dubai, UAE",
      roomType: "Ocean Deluxe Room",
      nearbyPlaces: [
        "Aquaventure Waterpark",
        "Palm Jumeirah",
        "Dubai Marina",
      ],
    },
    {
      id: 2,
      name: "Burj Al Arab Jumeirah",
      location: "Jumeirah Beach",
      rating: 4.9,
      price: "₹65000/night",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
      description:
        "Iconic ultra-luxury hotel with private butlers, world-class restaurants, and panoramic Arabian Gulf views.",
      amenities: [
        "Private Beach",
        "Luxury Spa",
        "Helipad",
        "Pool",
        "Fine Dining",
        "Free WiFi",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+971 4 301 7777",
      address: "Jumeirah St, Dubai, UAE",
      roomType: "Luxury Suite",
      nearbyPlaces: [
        "Jumeirah Beach",
        "Wild Wadi Waterpark",
        "Souk Madinat Jumeirah",
      ],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Tresind Dubai",
      cuisine: "Modern Indian",
      location: "Sheikh Zayed Road",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Award-winning fine dining restaurant known for modern Indian dishes and tasting menus.",
      speciality: "16-Course Indian Tasting Menu",
      priceRange: "₹3000 - ₹8000",
      openingHours: "6:00 PM - 11:30 PM",
      contact: "+971 4 308 0440",
      address: "Sheikh Zayed Road, Dubai",
      features: [
        "Fine Dining",
        "Luxury Ambience",
        "Family Friendly",
        "Vegetarian Options",
      ],
    },
    {
      id: 2,
      name: "Pierchic",
      cuisine: "Seafood",
      location: "Al Qasr",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury overwater seafood restaurant with romantic sea views and premium dining experience.",
      speciality: "Lobster and Seafood Platter",
      priceRange: "₹4000 - ₹10000",
      openingHours: "1:00 PM - 11:00 PM",
      contact: "+971 4 432 3232",
      address: "Al Qasr Hotel, Dubai",
      features: [
        "Sea View",
        "Romantic Dining",
        "Luxury Experience",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Burj Khalifa",
      type: "Skyscraper",
      rating: 4.9,
      ticket: "₹4000 Entry",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      description:
        "World's tallest building with observation decks, skyline views, and Dubai Fountain nearby.",
      openingHours: "8:00 AM - 11:00 PM",
      address: "Downtown Dubai, UAE",
      bestTimeToVisit: "Sunset",
      activities: [
        "Skyline View",
        "Photography",
        "Observation Deck",
        "Shopping Nearby",
      ],
    },
    {
      id: 2,
      name: "Dubai Desert Safari",
      type: "Adventure",
      rating: 4.8,
      ticket: "₹2500 Entry",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description:
        "Thrilling desert adventure with dune bashing, camel rides, BBQ dinner, and cultural shows.",
      openingHours: "3:00 PM - 9:00 PM",
      address: "Dubai Desert Area",
      bestTimeToVisit: "Evening",
      activities: [
        "Dune Bashing",
        "Camel Ride",
        "Sandboarding",
        "BBQ Dinner",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Marina Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Dubai Marina and JBR Walk",
      evening: "Dinner at Pierchic",
    },
    {
      title: "Burj Khalifa and Dubai Mall",
      morning: "Visit Burj Khalifa",
      afternoon: "Explore Dubai Mall and Aquarium",
      evening: "Watch Dubai Fountain Show",
    },
    {
      title: "Desert Safari Adventure",
      morning: "Relax at hotel pool",
      afternoon: "Shopping at Mall of the Emirates",
      evening: "Dubai Desert Safari with BBQ Dinner",
    },
    {
      title: "Palm Jumeirah and Atlantis",
      morning: "Visit Palm Jumeirah",
      afternoon: "Explore Atlantis and Aquaventure Waterpark",
      evening: "Dinner at Tresind Dubai",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and airport transfer",
      evening: "Departure",
    },
  ],
},

 manali: {
  backgroundImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Snow Valley Resort",
      location: "Log Huts Area",
      rating: 4.7,
      price: "₹6500/night",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful mountain resort with valley views, bonfire nights, and luxury rooms.",
      amenities: [
        "Free WiFi",
        "Mountain View",
        "Breakfast",
        "Parking",
        "Bonfire",
        "Room Service",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 98765 11223",
      address: "Log Huts Area, Old Manali, Himachal Pradesh",
      roomType: "Deluxe Mountain View Room",
      nearbyPlaces: ["Mall Road", "Hadimba Temple", "Old Manali"],
    },
    {
      id: 2,
      name: "The Himalayan Resort",
      location: "Hadimba Road",
      rating: 4.8,
      price: "₹9000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury castle-style resort surrounded by pine forests and snow-capped mountains.",
      amenities: [
        "Pool",
        "Spa",
        "Restaurant",
        "Free WiFi",
        "Parking",
        "Breakfast",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 99887 44556",
      address: "Hadimba Road, Manali, Himachal Pradesh",
      roomType: "Luxury Suite",
      nearbyPlaces: ["Hadimba Temple", "Mall Road", "Club House"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Cafe 1947",
      cuisine: "Italian & Cafe",
      location: "Old Manali",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Riverside cafe known for live music, Italian food, and relaxed atmosphere.",
      speciality: "Pizza and Pasta",
      priceRange: "₹800 - ₹1800",
      openingHours: "9:00 AM - 11:00 PM",
      contact: "+91 98123 45678",
      address: "Old Manali, Himachal Pradesh",
      features: [
        "Live Music",
        "Outdoor Seating",
        "River View",
        "Family Friendly",
      ],
    },
    {
      id: 2,
      name: "Johnson's Cafe",
      cuisine: "Multi-Cuisine",
      location: "Circuit House Road",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular cafe and restaurant serving Indian, Chinese, and continental dishes.",
      speciality: "Trout Fish and Sizzlers",
      priceRange: "₹1000 - ₹2200",
      openingHours: "10:00 AM - 10:30 PM",
      contact: "+91 90909 77889",
      address: "Circuit House Road, Manali",
      features: [
        "Family Dining",
        "Parking",
        "Outdoor Seating",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Solang Valley",
      type: "Adventure Spot",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous valley for snow activities, paragliding, skiing, and mountain views.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Solang Valley, Manali",
      bestTimeToVisit: "December to February",
      activities: [
        "Paragliding",
        "Skiing",
        "Snowboarding",
        "Cable Car Ride",
      ],
    },
    {
      id: 2,
      name: "Hadimba Temple",
      type: "Religious Place",
      rating: 4.7,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
      description:
        "Ancient wooden temple surrounded by cedar forest and peaceful atmosphere.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Hadimba Temple Road, Manali",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Temple Visit",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Mall Road Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Mall Road and local shopping",
      evening: "Dinner at Cafe 1947",
    },
    {
      title: "Solang Valley Adventure",
      morning: "Travel to Solang Valley",
      afternoon: "Paragliding and snow activities",
      evening: "Return to hotel and bonfire",
    },
    {
      title: "Temple and Old Manali",
      morning: "Visit Hadimba Temple",
      afternoon: "Explore Old Manali cafes",
      evening: "Dinner at Johnson's Cafe",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local market visit",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  jaipur: {
  backgroundImage:
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Rambagh Palace",
      location: "Bhawani Singh Road",
      rating: 4.9,
      price: "₹28000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury heritage palace hotel with royal suites, spa, fine dining, and beautiful gardens.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Parking",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 141 238 5700",
      address: "Bhawani Singh Road, Jaipur, Rajasthan",
      roomType: "Royal Palace Suite",
      nearbyPlaces: ["City Palace", "Hawa Mahal", "Albert Hall Museum"],
    },
    {
      id: 2,
      name: "Umaid Bhawan Heritage House",
      location: "Bani Park",
      rating: 4.6,
      price: "₹5500/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Traditional heritage hotel with Rajasthani architecture, rooftop dining, and family-friendly stay.",
      amenities: [
        "Free WiFi",
        "Breakfast",
        "Parking",
        "Restaurant",
        "Pool",
        "Room Service",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 141 220 6426",
      address: "Bani Park, Jaipur, Rajasthan",
      roomType: "Deluxe Heritage Room",
      nearbyPlaces: ["Nahargarh Fort", "MI Road", "Jaipur Railway Station"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Chokhi Dhani",
      cuisine: "Traditional Rajasthani",
      location: "Tonk Road",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous cultural village restaurant known for authentic Rajasthani food and folk performances.",
      speciality: "Dal Baati Churma",
      priceRange: "₹1200 - ₹2500",
      openingHours: "5:00 PM - 11:00 PM",
      contact: "+91 141 516 6000",
      address: "Tonk Road, Jaipur",
      features: [
        "Live Folk Music",
        "Traditional Seating",
        "Family Friendly",
        "Cultural Experience",
      ],
    },
    {
      id: 2,
      name: "Handi Restaurant",
      cuisine: "North Indian",
      location: "MI Road",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant famous for Laal Maas, kebabs, and traditional North Indian dishes.",
      speciality: "Laal Maas",
      priceRange: "₹800 - ₹1800",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+91 141 237 7544",
      address: "MI Road, Jaipur",
      features: [
        "Family Dining",
        "Air Conditioned",
        "Vegetarian Options",
        "Parking",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Hawa Mahal",
      type: "Historical Monument",
      rating: 4.8,
      ticket: "₹200 Entry",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
      description:
        "Iconic pink sandstone palace known for its beautiful windows and royal architecture.",
      openingHours: "9:00 AM - 5:00 PM",
      address: "Badi Choupad, Jaipur",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Sightseeing",
        "Historical Tour",
      ],
    },
    {
      id: 2,
      name: "Amber Fort",
      type: "Fort",
      rating: 4.9,
      ticket: "₹500 Entry",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      description:
        "Magnificent hilltop fort with royal palaces, elephant rides, and light show.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Amer, Jaipur",
      bestTimeToVisit: "Morning and Evening",
      activities: [
        "Elephant Ride",
        "Photography",
        "Light Show",
        "Fort Tour",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Local Market Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Johari Bazaar and Bapu Bazaar",
      evening: "Dinner at Handi Restaurant",
    },
    {
      title: "Amber Fort and Jal Mahal",
      morning: "Visit Amber Fort",
      afternoon: "Stop at Jal Mahal and local cafes",
      evening: "Light and Sound Show at Amber Fort",
    },
    {
      title: "City Palace and Hawa Mahal",
      morning: "Explore City Palace",
      afternoon: "Visit Hawa Mahal and nearby markets",
      evening: "Dinner at Chokhi Dhani",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  kashmir: {
  backgroundImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Khyber Himalayan Resort & Spa",
      location: "Gulmarg",
      rating: 4.9,
      price: "₹18000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury mountain resort with snow-covered views, spa, heated pool, and premium rooms.",
      amenities: [
        "Heated Pool",
        "Spa",
        "Breakfast",
        "Mountain View",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 1954 350 300",
      address: "Gulmarg, Jammu and Kashmir",
      roomType: "Premium Mountain View Room",
      nearbyPlaces: ["Gulmarg Gondola", "Ski Point", "Golf Course"],
    },
    {
      id: 2,
      name: "Vivanta Dal View",
      location: "Srinagar",
      rating: 4.8,
      price: "₹12000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant hotel overlooking Dal Lake with luxurious rooms and beautiful valley views.",
      amenities: [
        "Free WiFi",
        "Breakfast",
        "Lake View",
        "Restaurant",
        "Spa",
        "Parking",
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 194 246 1111",
      address: "Kralsangri, Srinagar, Jammu and Kashmir",
      roomType: "Deluxe Lake View Room",
      nearbyPlaces: ["Dal Lake", "Mughal Gardens", "Shankaracharya Temple"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Ahdoos Restaurant",
      cuisine: "Kashmiri & Mughlai",
      location: "Residency Road, Srinagar",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous traditional restaurant known for authentic Kashmiri Wazwan dishes.",
      speciality: "Rogan Josh and Gushtaba",
      priceRange: "₹1000 - ₹2500",
      openingHours: "12:00 PM - 10:30 PM",
      contact: "+91 194 245 8888",
      address: "Residency Road, Srinagar",
      features: [
        "Family Dining",
        "Traditional Food",
        "Air Conditioned",
        "Vegetarian Options",
      ],
    },
    {
      id: 2,
      name: "Stream Restaurant",
      cuisine: "Multi-Cuisine",
      location: "Boulevard Road, Srinagar",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular lakeside restaurant serving Kashmiri, Indian, and Chinese dishes.",
      speciality: "Kashmiri Thali",
      priceRange: "₹800 - ₹1800",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+91 194 248 4848",
      address: "Boulevard Road, Srinagar",
      features: [
        "Lake View",
        "Family Friendly",
        "Outdoor Seating",
        "Parking",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Dal Lake",
      type: "Lake",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous lake known for houseboats, shikara rides, floating markets, and scenic beauty.",
      openingHours: "Open 24 Hours",
      address: "Srinagar, Jammu and Kashmir",
      bestTimeToVisit: "April to October",
      activities: [
        "Shikara Ride",
        "Photography",
        "Houseboat Stay",
        "Floating Market Visit",
      ],
    },
    {
      id: 2,
      name: "Gulmarg Gondola",
      type: "Adventure Ride",
      rating: 4.8,
      ticket: "₹800 Entry",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      description:
        "One of the world's highest cable cars offering breathtaking snow mountain views.",
      openingHours: "10:00 AM - 5:00 PM",
      address: "Gulmarg, Jammu and Kashmir",
      bestTimeToVisit: "December to March",
      activities: [
        "Cable Car Ride",
        "Snow Activities",
        "Photography",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Dal Lake Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Shikara ride at Dal Lake",
      evening: "Dinner at Ahdoos Restaurant",
    },
    {
      title: "Gulmarg Adventure",
      morning: "Travel to Gulmarg",
      afternoon: "Ride Gulmarg Gondola and snow activities",
      evening: "Return to hotel and relax",
    },
    {
      title: "Pahalgam Excursion",
      morning: "Travel to Pahalgam",
      afternoon: "Horse riding and sightseeing",
      evening: "Dinner at Stream Restaurant",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  kerala: {
  backgroundImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Kumarakom Lake Resort",
      location: "Kumarakom",
      rating: 4.8,
      price: "₹14000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury backwater resort with traditional Kerala villas, spa, and lake-facing rooms.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Lake View",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 481 252 4900",
      address: "Kumarakom, Kerala",
      roomType: "Heritage Lake View Villa",
      nearbyPlaces: ["Vembanad Lake", "Bird Sanctuary", "Backwater Cruise"],
    },
    {
      id: 2,
      name: "SpiceTree Munnar",
      location: "Munnar",
      rating: 4.7,
      price: "₹9000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Hill resort surrounded by tea plantations and mountains with luxury cottages and spa.",
      amenities: [
        "Mountain View",
        "Breakfast",
        "Spa",
        "Free WiFi",
        "Parking",
        "Restaurant",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 4865 230 555",
      address: "Munnar, Kerala",
      roomType: "Premium Valley View Cottage",
      nearbyPlaces: ["Tea Gardens", "Echo Point", "Mattupetty Dam"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "The Rice Boat",
      cuisine: "Seafood & Kerala Cuisine",
      location: "Kochi",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury seafood restaurant with waterfront dining and authentic Kerala flavors.",
      speciality: "Karimeen Pollichathu",
      priceRange: "₹1500 - ₹3500",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+91 484 266 8000",
      address: "Taj Malabar Resort, Kochi",
      features: [
        "Sea View",
        "Luxury Dining",
        "Family Friendly",
        "Outdoor Seating",
      ],
    },
    {
      id: 2,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      location: "Thiruvananthapuram",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular vegetarian restaurant known for dosa, idli, and traditional South Indian meals.",
      speciality: "Masala Dosa and Filter Coffee",
      priceRange: "₹300 - ₹900",
      openingHours: "7:00 AM - 10:00 PM",
      contact: "+91 471 233 4455",
      address: "MG Road, Thiruvananthapuram",
      features: [
        "Vegetarian",
        "Family Friendly",
        "Air Conditioned",
        "Quick Service",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Alleppey Backwaters",
      type: "Backwater Destination",
      rating: 4.9,
      ticket: "₹1500 Houseboat Ride",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous backwater destination known for houseboats, canals, and peaceful scenery.",
      openingHours: "Open 24 Hours",
      address: "Alleppey, Kerala",
      bestTimeToVisit: "October to February",
      activities: [
        "Houseboat Ride",
        "Photography",
        "Village Tour",
        "Sunset View",
      ],
    },
    {
      id: 2,
      name: "Munnar Tea Gardens",
      type: "Hill Station",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful green tea plantations with mountain views and cool weather.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Munnar, Kerala",
      bestTimeToVisit: "September to March",
      activities: [
        "Tea Garden Tour",
        "Photography",
        "Nature Walk",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Backwater Cruise",
      morning: "Hotel check-in and breakfast",
      afternoon: "Houseboat ride in Alleppey",
      evening: "Dinner at The Rice Boat",
    },
    {
      title: "Munnar Sightseeing",
      morning: "Travel to Munnar",
      afternoon: "Visit Tea Gardens and Echo Point",
      evening: "Relax at resort with mountain view",
    },
    {
      title: "Kochi Heritage Tour",
      morning: "Visit Fort Kochi and Chinese Fishing Nets",
      afternoon: "Shopping and local cafes",
      evening: "Sunset by the beach",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  ladakh: {
  backgroundImage:
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Grand Dragon Ladakh",
      location: "Leh",
      rating: 4.8,
      price: "₹12000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury hotel with mountain views, modern amenities, and traditional Ladakhi hospitality.",
      amenities: [
        "Free WiFi",
        "Breakfast",
        "Mountain View",
        "Restaurant",
        "Parking",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 1982 250 000",
      address: "Old Road Sheynam, Leh, Ladakh",
      roomType: "Deluxe Mountain View Room",
      nearbyPlaces: ["Leh Palace", "Shanti Stupa", "Main Market"],
    },
    {
      id: 2,
      name: "Stone Hedge Hotel",
      location: "Leh",
      rating: 4.6,
      price: "₹7000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Comfortable hotel near Leh market with cozy rooms, mountain views, and local cuisine.",
      amenities: [
        "Breakfast",
        "Free WiFi",
        "Parking",
        "Restaurant",
        "Garden",
        "Room Service",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 1982 252 111",
      address: "Changspa Road, Leh, Ladakh",
      roomType: "Premium Double Room",
      nearbyPlaces: ["Leh Market", "Shanti Stupa", "Namgyal Tsemo Monastery"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "The Tibetan Kitchen",
      cuisine: "Tibetan & Ladakhi",
      location: "Fort Road, Leh",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant known for authentic momos, thukpa, and Ladakhi dishes.",
      speciality: "Momos and Thukpa",
      priceRange: "₹500 - ₹1500",
      openingHours: "10:00 AM - 10:00 PM",
      contact: "+91 1982 253 786",
      address: "Fort Road, Leh",
      features: [
        "Family Friendly",
        "Vegetarian Options",
        "Outdoor Seating",
        "Traditional Food",
      ],
    },
    {
      id: 2,
      name: "Bon Appetit",
      cuisine: "Multi-Cuisine",
      location: "Changspa Road, Leh",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Well-known rooftop restaurant with mountain views and Indian, Tibetan, and continental food.",
      speciality: "Yak Cheese Pizza",
      priceRange: "₹800 - ₹1800",
      openingHours: "9:00 AM - 11:00 PM",
      contact: "+91 1982 252 345",
      address: "Changspa Road, Leh",
      features: [
        "Mountain View",
        "Outdoor Seating",
        "Family Dining",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Pangong Lake",
      type: "Lake",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous high-altitude lake known for its crystal-clear blue water and stunning mountain backdrop.",
      openingHours: "Open 24 Hours",
      address: "Pangong Tso, Ladakh",
      bestTimeToVisit: "May to September",
      activities: [
        "Photography",
        "Camping",
        "Sightseeing",
        "Sunrise View",
      ],
    },
    {
      id: 2,
      name: "Nubra Valley",
      type: "Valley",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful valley famous for sand dunes, double-humped camels, and scenic landscapes.",
      openingHours: "Open 24 Hours",
      address: "Nubra Valley, Ladakh",
      bestTimeToVisit: "June to September",
      activities: [
        "Camel Ride",
        "Camping",
        "Photography",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Leh Local Sightseeing",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Leh Palace and Shanti Stupa",
      evening: "Dinner at The Tibetan Kitchen",
    },
    {
      title: "Pangong Lake Excursion",
      morning: "Early departure to Pangong Lake",
      afternoon: "Photography and sightseeing",
      evening: "Camping near Pangong Lake",
    },
    {
      title: "Nubra Valley Adventure",
      morning: "Travel to Nubra Valley via Khardung La",
      afternoon: "Camel ride and local sightseeing",
      evening: "Stay at Nubra camp",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  udaipur: {
  backgroundImage:
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Oberoi Udaivilas",
      location: "Lake Pichola",
      rating: 4.9,
      price: "₹32000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury lakeside palace resort with private pools, spa, and royal architecture.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Lake View",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 294 243 3300",
      address: "Haridasji Ki Magri, Udaipur, Rajasthan",
      roomType: "Premier Lake View Room",
      nearbyPlaces: ["Lake Pichola", "City Palace", "Jag Mandir"],
    },
    {
      id: 2,
      name: "Trident Udaipur",
      location: "Pichola Lake",
      rating: 4.7,
      price: "₹8500/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful lakeside hotel with modern rooms, gardens, and scenic mountain views.",
      amenities: [
        "Pool",
        "Breakfast",
        "Free WiFi",
        "Parking",
        "Restaurant",
        "Garden",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 294 243 2200",
      address: "Near Lake Pichola, Udaipur, Rajasthan",
      roomType: "Deluxe Garden View Room",
      nearbyPlaces: ["Lake Pichola", "Fateh Sagar Lake", "Jagdish Temple"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Ambrai Restaurant",
      cuisine: "Rajasthani & North Indian",
      location: "Lake Pichola",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular lakeside restaurant offering beautiful sunset views and traditional Rajasthani food.",
      speciality: "Dal Baati Churma",
      priceRange: "₹1200 - ₹2500",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+91 294 243 1085",
      address: "Hanuman Ghat, Udaipur",
      features: [
        "Lake View",
        "Outdoor Seating",
        "Family Friendly",
        "Romantic Dining",
      ],
    },
    {
      id: 2,
      name: "Upre by 1559 AD",
      cuisine: "Multi-Cuisine",
      location: "Hanuman Ghat",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Rooftop restaurant with city and lake views serving Indian and continental dishes.",
      speciality: "Paneer Tikka and Pasta",
      priceRange: "₹1000 - ₹2200",
      openingHours: "12:00 PM - 11:30 PM",
      contact: "+91 294 243 1559",
      address: "Hanuman Ghat, Udaipur",
      features: [
        "Rooftop Dining",
        "Lake View",
        "Live Music",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "City Palace",
      type: "Historical Palace",
      rating: 4.9,
      ticket: "₹400 Entry",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      description:
        "Magnificent royal palace complex overlooking Lake Pichola with museums and courtyards.",
      openingHours: "9:00 AM - 5:30 PM",
      address: "Old City, Udaipur",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Museum Visit",
        "Sightseeing",
        "Royal Tour",
      ],
    },
    {
      id: 2,
      name: "Lake Pichola",
      type: "Lake",
      rating: 4.8,
      ticket: "₹500 Boat Ride",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful artificial lake famous for boat rides, sunset views, and nearby palaces.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Udaipur, Rajasthan",
      bestTimeToVisit: "Evening",
      activities: [
        "Boat Ride",
        "Photography",
        "Sunset View",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Lake Pichola Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Boat ride at Lake Pichola",
      evening: "Dinner at Ambrai Restaurant",
    },
    {
      title: "City Palace and Jagdish Temple",
      morning: "Visit City Palace",
      afternoon: "Explore Jagdish Temple and nearby market",
      evening: "Dinner at Upre by 1559 AD",
    },
    {
      title: "Sajjangarh and Fateh Sagar Lake",
      morning: "Visit Sajjangarh Palace",
      afternoon: "Relax at Fateh Sagar Lake",
      evening: "Sunset photography session",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  shimla: {
  backgroundImage:
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Wildflower Hall",
      location: "Mashobra",
      rating: 4.9,
      price: "₹22000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury mountain resort surrounded by cedar forests with spa, pool, and scenic valley views.",
      amenities: [
        "Spa",
        "Pool",
        "Mountain View",
        "Breakfast",
        "Free WiFi",
        "Parking",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 177 264 8585",
      address: "Mashobra, Shimla, Himachal Pradesh",
      roomType: "Premier Valley View Room",
      nearbyPlaces: ["Kufri", "Mall Road", "Jakhoo Temple"],
    },
    {
      id: 2,
      name: "Clarkes Hotel",
      location: "Mall Road",
      rating: 4.6,
      price: "₹7500/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Heritage hotel near Mall Road with classic interiors and beautiful mountain views.",
      amenities: [
        "Breakfast",
        "Free WiFi",
        "Parking",
        "Restaurant",
        "Room Service",
        "Mountain View",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 177 281 1280",
      address: "The Mall, Shimla, Himachal Pradesh",
      roomType: "Deluxe Heritage Room",
      nearbyPlaces: ["Mall Road", "The Ridge", "Christ Church"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Cafe Simla Times",
      cuisine: "Cafe & Italian",
      location: "Mall Road",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular cafe with rooftop seating, live music, and continental food.",
      speciality: "Pizza and Coffee",
      priceRange: "₹700 - ₹1800",
      openingHours: "10:00 AM - 11:00 PM",
      contact: "+91 98160 12345",
      address: "Mall Road, Shimla",
      features: [
        "Live Music",
        "Rooftop Seating",
        "Mountain View",
        "Family Friendly",
      ],
    },
    {
      id: 2,
      name: "Wake and Bake Cafe",
      cuisine: "Cafe & Continental",
      location: "The Mall",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Cozy cafe famous for pancakes, coffee, and mountain-facing seating.",
      speciality: "Pancakes and Sandwiches",
      priceRange: "₹500 - ₹1500",
      openingHours: "9:00 AM - 10:00 PM",
      contact: "+91 98170 54321",
      address: "The Mall, Shimla",
      features: [
        "Outdoor Seating",
        "Mountain View",
        "Quick Service",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Mall Road",
      type: "Shopping Area",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description:
        "Main shopping street in Shimla with cafes, local markets, and scenic views.",
      openingHours: "Open 24 Hours",
      address: "Mall Road, Shimla",
      bestTimeToVisit: "Evening",
      activities: [
        "Shopping",
        "Street Food",
        "Photography",
        "Cafe Visit",
      ],
    },
    {
      id: 2,
      name: "Kufri",
      type: "Hill Station",
      rating: 4.7,
      ticket: "₹100 Entry",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular tourist spot near Shimla known for snow activities, horse riding, and scenic beauty.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Kufri, Shimla",
      bestTimeToVisit: "December to February",
      activities: [
        "Horse Riding",
        "Snow Activities",
        "Photography",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Mall Road Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Explore Mall Road and local shopping",
      evening: "Dinner at Cafe Simla Times",
    },
    {
      title: "Kufri Excursion",
      morning: "Travel to Kufri",
      afternoon: "Snow activities and horse riding",
      evening: "Return to hotel and relax",
    },
    {
      title: "Jakhoo Temple and The Ridge",
      morning: "Visit Jakhoo Temple",
      afternoon: "Explore The Ridge and Christ Church",
      evening: "Dinner at Wake and Bake Cafe",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},


  bali: {
  backgroundImage:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Kayon Jungle Resort",
      location: "Ubud",
      rating: 4.9,
      price: "₹18000/night",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury jungle resort with infinity pools, spa, and scenic valley views.",
      amenities: [
        "Infinity Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Airport Transfer",
        "Valley View",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+62 361 479 2553",
      address: "Banjar Kepitu, Ubud, Bali, Indonesia",
      roomType: "Jungle View Suite",
      nearbyPlaces: ["Tegallalang Rice Terrace", "Ubud Market", "Monkey Forest"],
    },
    {
      id: 2,
      name: "Ayodya Resort Bali",
      location: "Nusa Dua",
      rating: 4.7,
      price: "₹12000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beachfront resort with Balinese architecture, lagoon pools, and private beach access.",
      amenities: [
        "Private Beach",
        "Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+62 361 771 102",
      address: "Nusa Dua, Bali, Indonesia",
      roomType: "Deluxe Ocean View Room",
      nearbyPlaces: ["Nusa Dua Beach", "Water Blow", "Bali Collection"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Koral Restaurant",
      cuisine: "Seafood & International",
      location: "Nusa Dua",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury underwater dining restaurant with seafood specialties and aquarium views.",
      speciality: "Seafood Tasting Menu",
      priceRange: "₹3000 - ₹8000",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+62 361 201 0333",
      address: "The Apurva Kempinski, Nusa Dua, Bali",
      features: [
        "Luxury Dining",
        "Sea View",
        "Romantic Dining",
        "Family Friendly",
      ],
    },
    {
      id: 2,
      name: "Locavore",
      cuisine: "Modern Indonesian",
      location: "Ubud",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Award-winning fine dining restaurant offering modern Indonesian cuisine.",
      speciality: "Chef's Tasting Menu",
      priceRange: "₹4000 - ₹9000",
      openingHours: "6:00 PM - 11:00 PM",
      contact: "+62 361 977 733",
      address: "Ubud, Bali, Indonesia",
      features: [
        "Fine Dining",
        "Luxury Ambience",
        "Reservation Required",
        "Vegetarian Options",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Tegallalang Rice Terrace",
      type: "Nature Spot",
      rating: 4.8,
      ticket: "₹300 Entry",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful rice terraces with scenic views, swings, and photography spots.",
      openingHours: "8:00 AM - 6:00 PM",
      address: "Tegallalang, Ubud, Bali",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Nature Walk",
        "Swing Ride",
        "Sightseeing",
      ],
    },
    {
      id: 2,
      name: "Tanah Lot Temple",
      type: "Temple",
      rating: 4.9,
      ticket: "₹500 Entry",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous sea temple located on a rock formation with beautiful sunset views.",
      openingHours: "7:00 AM - 7:00 PM",
      address: "Beraban, Bali, Indonesia",
      bestTimeToVisit: "Sunset",
      activities: [
        "Temple Visit",
        "Photography",
        "Sunset View",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Beach Relaxation",
      morning: "Hotel check-in and breakfast",
      afternoon: "Relax at Nusa Dua Beach",
      evening: "Dinner at Koral Restaurant",
    },
    {
      title: "Ubud Sightseeing",
      morning: "Visit Tegallalang Rice Terrace",
      afternoon: "Explore Ubud Market and Monkey Forest",
      evening: "Dinner at Locavore",
    },
    {
      title: "Temple and Sunset Tour",
      morning: "Visit local Balinese temples",
      afternoon: "Shopping and local cafes",
      evening: "Sunset at Tanah Lot Temple",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},
  thailand: {
  backgroundImage:
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Mandarin Oriental Bangkok",
      location: "Bangkok",
      rating: 4.9,
      price: "₹22000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury riverside hotel with elegant rooms, spa, and world-class dining.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "River View",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+66 2 659 9000",
      address: "Bang Rak, Bangkok, Thailand",
      roomType: "Deluxe River View Room",
      nearbyPlaces: ["ICONSIAM", "Grand Palace", "Chao Phraya River"],
    },
    {
      id: 2,
      name: "Amari Phuket",
      location: "Phuket",
      rating: 4.7,
      price: "₹14000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beachfront resort with sea-facing rooms, infinity pools, and private beach access.",
      amenities: [
        "Private Beach",
        "Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+66 76 340 106",
      address: "Patong Beach, Phuket, Thailand",
      roomType: "Ocean View Suite",
      nearbyPlaces: ["Patong Beach", "Bangla Road", "Freedom Beach"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Sorn",
      cuisine: "Thai",
      location: "Bangkok",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous Michelin-star restaurant serving authentic Southern Thai cuisine.",
      speciality: "Southern Thai Tasting Menu",
      priceRange: "₹4000 - ₹10000",
      openingHours: "6:00 PM - 11:00 PM",
      contact: "+66 99 081 1119",
      address: "Sukhumvit, Bangkok, Thailand",
      features: [
        "Fine Dining",
        "Luxury Ambience",
        "Reservation Required",
        "Authentic Cuisine",
      ],
    },
    {
      id: 2,
      name: "Baan Rim Pa",
      cuisine: "Seafood & Thai",
      location: "Phuket",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant cliffside restaurant with ocean views and traditional Thai dishes.",
      speciality: "Tom Yum Goong",
      priceRange: "₹2000 - ₹5000",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+66 76 340 789",
      address: "Patong Beach, Phuket, Thailand",
      features: [
        "Sea View",
        "Luxury Dining",
        "Romantic Dining",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Phi Phi Islands",
      type: "Island",
      rating: 4.9,
      ticket: "₹2500 Boat Tour",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous tropical islands with crystal-clear water, snorkeling, and white sand beaches.",
      openingHours: "Open 24 Hours",
      address: "Krabi Province, Thailand",
      bestTimeToVisit: "November to April",
      activities: [
        "Boat Tour",
        "Snorkeling",
        "Photography",
        "Beach Relaxation",
      ],
    },
    {
      id: 2,
      name: "Grand Palace",
      type: "Historical Monument",
      rating: 4.8,
      ticket: "₹1200 Entry",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
      description:
        "Historic palace complex in Bangkok known for its royal architecture and temples.",
      openingHours: "8:30 AM - 3:30 PM",
      address: "Bangkok, Thailand",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Temple Visit",
        "Sightseeing",
        "Historical Tour",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Bangkok City Tour",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Grand Palace and Wat Arun",
      evening: "Dinner at Sorn",
    },
    {
      title: "Phuket Beach Day",
      morning: "Travel to Phuket",
      afternoon: "Relax at Patong Beach",
      evening: "Dinner at Baan Rim Pa",
    },
    {
      title: "Phi Phi Island Adventure",
      morning: "Boat trip to Phi Phi Islands",
      afternoon: "Snorkeling and island sightseeing",
      evening: "Return to hotel and relax",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  singapore: {
  backgroundImage:
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Marina Bay Sands",
      location: "Marina Bay",
      rating: 4.9,
      price: "₹28000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Iconic luxury hotel with rooftop infinity pool, skyline views, and world-class shopping.",
      amenities: [
        "Infinity Pool",
        "Spa",
        "Breakfast",
        "Skyline View",
        "Free WiFi",
        "Casino",
      ],
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      contact: "+65 6688 8868",
      address: "10 Bayfront Ave, Singapore",
      roomType: "Deluxe Skyline Room",
      nearbyPlaces: ["Gardens by the Bay", "Marina Bay", "ArtScience Museum"],
    },
    {
      id: 2,
      name: "Shangri-La Singapore",
      location: "Orchard Road",
      rating: 4.8,
      price: "₹18000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury city hotel with lush gardens, fine dining, and family-friendly amenities.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
        "Garden",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+65 6737 3644",
      address: "22 Orange Grove Rd, Singapore",
      roomType: "Premier Garden View Room",
      nearbyPlaces: ["Orchard Road", "Botanic Gardens", "ION Orchard"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Lau Pa Sat",
      cuisine: "Singaporean Street Food",
      location: "Downtown",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular hawker center known for satay, laksa, and authentic Singapore street food.",
      speciality: "Satay and Laksa",
      priceRange: "₹500 - ₹1500",
      openingHours: "10:00 AM - 2:00 AM",
      contact: "+65 6220 2138",
      address: "18 Raffles Quay, Singapore",
      features: [
        "Street Food",
        "Family Friendly",
        "Outdoor Seating",
        "Quick Service",
      ],
    },
    {
      id: 2,
      name: "CE LA VI",
      cuisine: "Asian & International",
      location: "Marina Bay Sands",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury rooftop restaurant with panoramic city views and premium dining experience.",
      speciality: "Seafood Platter",
      priceRange: "₹3000 - ₹9000",
      openingHours: "12:00 PM - 1:00 AM",
      contact: "+65 6508 2188",
      address: "Marina Bay Sands SkyPark, Singapore",
      features: [
        "Rooftop Dining",
        "City View",
        "Luxury Experience",
        "Live Music",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Gardens by the Bay",
      type: "Nature Park",
      rating: 4.9,
      ticket: "₹1500 Entry",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous futuristic garden with Supertree Grove, Flower Dome, and light shows.",
      openingHours: "5:00 AM - 2:00 AM",
      address: "18 Marina Gardens Dr, Singapore",
      bestTimeToVisit: "Evening",
      activities: [
        "Photography",
        "Light Show",
        "Nature Walk",
        "Sightseeing",
      ],
    },
    {
      id: 2,
      name: "Sentosa Island",
      type: "Island Resort",
      rating: 4.8,
      ticket: "₹1000 Entry",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular island destination with beaches, adventure parks, and Universal Studios.",
      openingHours: "Open 24 Hours",
      address: "Sentosa, Singapore",
      bestTimeToVisit: "Morning and Evening",
      activities: [
        "Beach Visit",
        "Cable Car Ride",
        "Universal Studios",
        "Shopping",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Marina Bay Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Explore Marina Bay and Merlion Park",
      evening: "Dinner at CE LA VI",
    },
    {
      title: "Gardens by the Bay and Shopping",
      morning: "Visit Gardens by the Bay",
      afternoon: "Shopping at Orchard Road",
      evening: "Light show at Marina Bay",
    },
    {
      title: "Sentosa Island Adventure",
      morning: "Travel to Sentosa Island",
      afternoon: "Visit Universal Studios and beaches",
      evening: "Return to hotel and relax",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  maldives: {
  backgroundImage:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Soneva Jani",
      location: "Noonu Atoll",
      rating: 4.9,
      price: "₹85000/night",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury overwater villa resort with private pools, slides, and ocean views.",
      amenities: [
        "Private Pool",
        "Spa",
        "Breakfast",
        "Ocean View",
        "Free WiFi",
        "Private Beach",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+960 656 6666",
      address: "Noonu Atoll, Maldives",
      roomType: "Overwater Villa",
      nearbyPlaces: ["Private Lagoon", "Coral Reef", "Snorkeling Point"],
    },
    {
      id: 2,
      name: "Sun Siyam Iru Fushi",
      location: "Noonu Atoll",
      rating: 4.8,
      price: "₹45000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beachfront luxury resort with spa, water sports, and premium dining options.",
      amenities: [
        "Beach Access",
        "Pool",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Water Sports",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+960 656 0591",
      address: "Noonu Atoll, Maldives",
      roomType: "Beach Villa",
      nearbyPlaces: ["Diving Spot", "Private Beach", "Water Sports Center"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "5.8 Undersea Restaurant",
      cuisine: "Seafood & International",
      location: "Hurawalhi Island",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Unique underwater restaurant with panoramic sea life views and luxury dining.",
      speciality: "Seafood Tasting Menu",
      priceRange: "₹5000 - ₹12000",
      openingHours: "12:00 PM - 10:00 PM",
      contact: "+960 662 2000",
      address: "Hurawalhi Island Resort, Maldives",
      features: [
        "Underwater Dining",
        "Luxury Experience",
        "Romantic Dining",
        "Sea View",
      ],
    },
    {
      id: 2,
      name: "Sea.Fire.Salt.",
      cuisine: "Seafood & Grill",
      location: "Anantara Kihavah",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant beachfront restaurant known for premium seafood and sunset views.",
      speciality: "Grilled Lobster",
      priceRange: "₹4000 - ₹10000",
      openingHours: "6:00 PM - 11:00 PM",
      contact: "+960 660 1020",
      address: "Anantara Kihavah Resort, Maldives",
      features: [
        "Beach View",
        "Luxury Dining",
        "Romantic Dining",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Vaadhoo Island",
      type: "Island",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous island known for the glowing bioluminescent beach called the Sea of Stars.",
      openingHours: "Open 24 Hours",
      address: "Vaadhoo Island, Maldives",
      bestTimeToVisit: "Night",
      activities: [
        "Beach Walk",
        "Photography",
        "Bioluminescence Viewing",
        "Relaxation",
      ],
    },
    {
      id: 2,
      name: "Male City",
      type: "City Tour",
      rating: 4.6,
      ticket: "₹500 Entry",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Capital city of Maldives known for markets, mosques, and local culture.",
      openingHours: "9:00 AM - 8:00 PM",
      address: "Male, Maldives",
      bestTimeToVisit: "Morning",
      activities: [
        "Shopping",
        "Sightseeing",
        "Photography",
        "Local Food Tour",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Beach Relaxation",
      morning: "Hotel check-in and breakfast",
      afternoon: "Relax on private beach",
      evening: "Dinner at Sea.Fire.Salt.",
    },
    {
      title: "Snorkeling and Water Sports",
      morning: "Snorkeling and scuba diving",
      afternoon: "Jet ski and parasailing",
      evening: "Sunset cruise",
    },
    {
      title: "Island Exploration",
      morning: "Visit Vaadhoo Island",
      afternoon: "Photography and beach activities",
      evening: "Dinner at 5.8 Undersea Restaurant",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and spa session",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},
  paris: {
  backgroundImage:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Ritz Paris",
      location: "Place Vendôme",
      rating: 4.9,
      price: "₹65000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury palace hotel known for elegant suites, spa, and classic Parisian style.",
      amenities: [
        "Spa",
        "Pool",
        "Breakfast",
        "Free WiFi",
        "Fine Dining",
        "Airport Transfer",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+33 1 43 16 30 30",
      address: "15 Place Vendôme, Paris, France",
      roomType: "Deluxe Palace Suite",
      nearbyPlaces: ["Louvre Museum", "Tuileries Garden", "Champs-Élysées"],
    },
    {
      id: 2,
      name: "Hotel Le Meurice",
      location: "Rue de Rivoli",
      rating: 4.8,
      price: "₹48000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant luxury hotel with Paris skyline views and Michelin-star dining.",
      amenities: [
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
        "City View",
        "Parking",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+33 1 44 58 10 10",
      address: "228 Rue de Rivoli, Paris, France",
      roomType: "City View Deluxe Room",
      nearbyPlaces: ["Louvre Museum", "Eiffel Tower", "Seine River"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Le Jules Verne",
      cuisine: "French Fine Dining",
      location: "Eiffel Tower",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury restaurant inside the Eiffel Tower offering panoramic city views and gourmet French cuisine.",
      speciality: "French Tasting Menu",
      priceRange: "₹5000 - ₹15000",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+33 1 83 77 34 34",
      address: "Eiffel Tower, Paris, France",
      features: [
        "City View",
        "Luxury Dining",
        "Romantic Dining",
        "Fine Dining",
      ],
    },
    {
      id: 2,
      name: "Café de Flore",
      cuisine: "French Café",
      location: "Saint-Germain-des-Prés",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Historic Parisian café famous for coffee, pastries, and outdoor seating.",
      speciality: "Croissant and Coffee",
      priceRange: "₹1000 - ₹3000",
      openingHours: "7:30 AM - 1:30 AM",
      contact: "+33 1 45 48 55 26",
      address: "172 Boulevard Saint-Germain, Paris, France",
      features: [
        "Outdoor Seating",
        "Historic Café",
        "Family Friendly",
        "Quick Service",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Eiffel Tower",
      type: "Monument",
      rating: 4.9,
      ticket: "₹2500 Entry",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      description:
        "World-famous landmark offering panoramic views of Paris from multiple observation decks.",
      openingHours: "9:00 AM - 11:45 PM",
      address: "Champ de Mars, Paris, France",
      bestTimeToVisit: "Evening",
      activities: [
        "Photography",
        "Sightseeing",
        "Observation Deck",
        "Night View",
      ],
    },
    {
      id: 2,
      name: "Louvre Museum",
      type: "Museum",
      rating: 4.8,
      ticket: "₹1500 Entry",
      image:
        "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous museum home to the Mona Lisa and thousands of artworks.",
      openingHours: "9:00 AM - 6:00 PM",
      address: "Rue de Rivoli, Paris, France",
      bestTimeToVisit: "Morning",
      activities: [
        "Museum Visit",
        "Photography",
        "Art Tour",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Eiffel Tower Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Eiffel Tower and Seine River",
      evening: "Dinner at Le Jules Verne",
    },
    {
      title: "Museum and Shopping Day",
      morning: "Visit Louvre Museum",
      afternoon: "Shopping at Champs-Élysées",
      evening: "Coffee at Café de Flore",
    },
    {
      title: "Paris City Tour",
      morning: "Visit Notre-Dame Cathedral",
      afternoon: "Explore Montmartre and Sacré-Cœur",
      evening: "Seine River Cruise",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  london: {
  backgroundImage:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Savoy",
      location: "Strand",
      rating: 4.9,
      price: "₹55000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury historic hotel with elegant rooms, spa, and views of the River Thames.",
      amenities: [
        "Spa",
        "Pool",
        "Breakfast",
        "River View",
        "Free WiFi",
        "Fine Dining",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+44 20 7836 4343",
      address: "Strand, London, United Kingdom",
      roomType: "Deluxe River View Room",
      nearbyPlaces: ["London Eye", "Covent Garden", "Big Ben"],
    },
    {
      id: 2,
      name: "Shangri-La The Shard",
      location: "Southwark",
      rating: 4.8,
      price: "₹48000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury hotel located inside The Shard with panoramic skyline views and infinity pool.",
      amenities: [
        "Infinity Pool",
        "Skyline View",
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+44 20 7234 8000",
      address: "31 St Thomas St, London, United Kingdom",
      roomType: "Premier City View Room",
      nearbyPlaces: ["Tower Bridge", "The Shard", "Borough Market"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Dishoom",
      cuisine: "Indian",
      location: "Covent Garden",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant inspired by Bombay cafés serving Indian street food and curries.",
      speciality: "Chicken Ruby and Naan",
      priceRange: "₹1500 - ₹4000",
      openingHours: "8:00 AM - 11:00 PM",
      contact: "+44 20 7420 9320",
      address: "12 Upper St Martin's Ln, London",
      features: [
        "Family Friendly",
        "Indian Cuisine",
        "Historic Ambience",
        "Quick Service",
      ],
    },
    {
      id: 2,
      name: "Sky Garden Restaurant",
      cuisine: "British & European",
      location: "Fenchurch Street",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant rooftop restaurant with panoramic views of London's skyline.",
      speciality: "Steak and Seafood",
      priceRange: "₹3000 - ₹7000",
      openingHours: "10:00 AM - 12:00 AM",
      contact: "+44 333 772 0020",
      address: "20 Fenchurch St, London",
      features: [
        "Rooftop Dining",
        "City View",
        "Luxury Experience",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Big Ben",
      type: "Historical Monument",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous clock tower and iconic symbol of London located near the Houses of Parliament.",
      openingHours: "Open 24 Hours",
      address: "Westminster, London, United Kingdom",
      bestTimeToVisit: "Evening",
      activities: [
        "Photography",
        "Sightseeing",
        "Walking Tour",
        "Night View",
      ],
    },
    {
      id: 2,
      name: "London Eye",
      type: "Observation Wheel",
      rating: 4.8,
      ticket: "₹3500 Entry",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous giant observation wheel offering panoramic views of the city skyline.",
      openingHours: "11:00 AM - 6:00 PM",
      address: "South Bank, London, United Kingdom",
      bestTimeToVisit: "Sunset",
      activities: [
        "Observation Ride",
        "Photography",
        "Sightseeing",
        "City View",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Westminster Tour",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Big Ben and Buckingham Palace",
      evening: "Dinner at Dishoom",
    },
    {
      title: "London Eye and River Cruise",
      morning: "Ride the London Eye",
      afternoon: "River Thames Cruise",
      evening: "Dinner at Sky Garden Restaurant",
    },
    {
      title: "Museum and Shopping Day",
      morning: "Visit British Museum",
      afternoon: "Shopping at Oxford Street",
      evening: "Explore Covent Garden",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and local shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  newyork: {
  backgroundImage:
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "The Plaza Hotel",
      location: "Manhattan",
      rating: 4.9,
      price: "₹52000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury historic hotel overlooking Central Park with elegant suites and fine dining.",
      amenities: [
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Fine Dining",
        "City View",
        "Parking",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+1 212-759-3000",
      address: "768 5th Ave, New York, USA",
      roomType: "Deluxe Park View Room",
      nearbyPlaces: ["Central Park", "Times Square", "Fifth Avenue"],
    },
    {
      id: 2,
      name: "The Langham New York",
      location: "Midtown Manhattan",
      rating: 4.8,
      price: "₹45000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury hotel with spacious rooms, skyline views, and premium amenities.",
      amenities: [
        "Spa",
        "Gym",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
        "City View",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+1 212-695-4005",
      address: "400 5th Ave, New York, USA",
      roomType: "Executive Skyline Room",
      nearbyPlaces: ["Empire State Building", "Bryant Park", "Times Square"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Katz's Delicatessen",
      cuisine: "American",
      location: "Lower East Side",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Legendary deli famous for pastrami sandwiches and classic New York flavors.",
      speciality: "Pastrami Sandwich",
      priceRange: "₹1000 - ₹3000",
      openingHours: "8:00 AM - 10:45 PM",
      contact: "+1 212-254-2246",
      address: "205 E Houston St, New York, USA",
      features: [
        "Historic Place",
        "Quick Service",
        "Family Friendly",
        "American Cuisine",
      ],
    },
    {
      id: 2,
      name: "The River Café",
      cuisine: "Fine Dining",
      location: "Brooklyn",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury waterfront restaurant with views of the Manhattan skyline and Brooklyn Bridge.",
      speciality: "Seafood and Steak",
      priceRange: "₹4000 - ₹10000",
      openingHours: "5:00 PM - 11:00 PM",
      contact: "+1 718-522-5200",
      address: "1 Water St, Brooklyn, New York",
      features: [
        "City View",
        "Romantic Dining",
        "Luxury Experience",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Times Square",
      type: "Tourist Attraction",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous entertainment hub with bright lights, Broadway shows, and shopping.",
      openingHours: "Open 24 Hours",
      address: "Manhattan, New York, USA",
      bestTimeToVisit: "Night",
      activities: [
        "Photography",
        "Shopping",
        "Broadway Show",
        "Sightseeing",
      ],
    },
    {
      id: 2,
      name: "Statue of Liberty",
      type: "Monument",
      rating: 4.9,
      ticket: "₹2500 Ferry Ticket",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
      description:
        "Iconic symbol of freedom located on Liberty Island with ferry access.",
      openingHours: "9:00 AM - 5:00 PM",
      address: "Liberty Island, New York, USA",
      bestTimeToVisit: "Morning",
      activities: [
        "Ferry Ride",
        "Photography",
        "Sightseeing",
        "Museum Visit",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Times Square Visit",
      morning: "Hotel check-in and breakfast",
      afternoon: "Explore Times Square and Fifth Avenue",
      evening: "Dinner at Katz's Delicatessen",
    },
    {
      title: "Statue of Liberty and Wall Street",
      morning: "Visit Statue of Liberty",
      afternoon: "Explore Wall Street and Brooklyn Bridge",
      evening: "Dinner at The River Café",
    },
    {
      title: "Central Park and Museums",
      morning: "Walk through Central Park",
      afternoon: "Visit the Metropolitan Museum of Art",
      evening: "Broadway show experience",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  switzerland: {
  backgroundImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Badrutt's Palace Hotel",
      location: "St. Moritz",
      rating: 4.9,
      price: "₹65000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury alpine hotel with mountain views, spa, and premium winter activities.",
      amenities: [
        "Spa",
        "Pool",
        "Breakfast",
        "Mountain View",
        "Free WiFi",
        "Ski Access",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+41 81 837 1000",
      address: "Via Serlas 27, St. Moritz, Switzerland",
      roomType: "Deluxe Alpine Suite",
      nearbyPlaces: ["St. Moritz Lake", "Ski Resort", "Mountain Railway"],
    },
    {
      id: 2,
      name: "Victoria Jungfrau Grand Hotel",
      location: "Interlaken",
      rating: 4.8,
      price: "₹42000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Elegant hotel with spa, mountain scenery, and easy access to Jungfrau region.",
      amenities: [
        "Spa",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
        "Mountain View",
        "Pool",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+41 33 828 2600",
      address: "Höheweg 41, Interlaken, Switzerland",
      roomType: "Superior Mountain View Room",
      nearbyPlaces: ["Jungfraujoch", "Lake Thun", "Harder Kulm"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Restaurant de l'Hôtel de Ville",
      cuisine: "Swiss Fine Dining",
      location: "Crissier",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Michelin-star restaurant known for luxury Swiss cuisine and elegant ambience.",
      speciality: "Swiss Tasting Menu",
      priceRange: "₹5000 - ₹15000",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+41 21 634 0505",
      address: "Rue d'Yverdon 1, Crissier, Switzerland",
      features: [
        "Fine Dining",
        "Luxury Experience",
        "Reservation Required",
        "Swiss Cuisine",
      ],
    },
    {
      id: 2,
      name: "Swiss Chuchi",
      cuisine: "Traditional Swiss",
      location: "Zurich",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant serving fondue, raclette, and traditional Swiss dishes.",
      speciality: "Cheese Fondue",
      priceRange: "₹1500 - ₹5000",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+41 44 266 9696",
      address: "Rosengasse 10, Zurich, Switzerland",
      features: [
        "Traditional Cuisine",
        "Family Friendly",
        "Historic Ambience",
        "Outdoor Seating",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Jungfraujoch",
      type: "Mountain Destination",
      rating: 4.9,
      ticket: "₹12000 Train Ticket",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous mountain destination known as the Top of Europe with snow views and scenic train rides.",
      openingHours: "8:00 AM - 5:00 PM",
      address: "Jungfrau Region, Switzerland",
      bestTimeToVisit: "May to September",
      activities: [
        "Train Ride",
        "Snow Activities",
        "Photography",
        "Sightseeing",
      ],
    },
    {
      id: 2,
      name: "Lake Geneva",
      type: "Lake",
      rating: 4.8,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beautiful lake surrounded by mountains, vineyards, and charming towns.",
      openingHours: "Open 24 Hours",
      address: "Geneva, Switzerland",
      bestTimeToVisit: "Summer",
      activities: [
        "Boat Ride",
        "Photography",
        "Sightseeing",
        "Relaxation",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Zurich Tour",
      morning: "Hotel check-in and breakfast",
      afternoon: "Explore Zurich Old Town",
      evening: "Dinner at Swiss Chuchi",
    },
    {
      title: "Jungfraujoch Excursion",
      morning: "Train ride to Jungfraujoch",
      afternoon: "Snow activities and sightseeing",
      evening: "Return to hotel and relax",
    },
    {
      title: "Lake Geneva and Scenic Drive",
      morning: "Visit Lake Geneva",
      afternoon: "Boat ride and lakeside exploration",
      evening: "Dinner at Restaurant de l'Hôtel de Ville",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  turkey: {
  backgroundImage:
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Ciragan Palace Kempinski",
      location: "Istanbul",
      rating: 4.9,
      price: "₹38000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury palace hotel on the Bosphorus with elegant rooms, spa, and fine dining.",
      amenities: [
        "Pool",
        "Spa",
        "Breakfast",
        "Sea View",
        "Free WiFi",
        "Luxury Dining",
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      contact: "+90 212 326 4646",
      address: "Besiktas, Istanbul, Turkey",
      roomType: "Bosphorus View Suite",
      nearbyPlaces: ["Dolmabahce Palace", "Galata Tower", "Bosphorus Cruise"],
    },
    {
      id: 2,
      name: "Museum Hotel Cappadocia",
      location: "Cappadocia",
      rating: 4.8,
      price: "₹28000/night",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury cave hotel with panoramic valley views and unique traditional rooms.",
      amenities: [
        "Infinity Pool",
        "Breakfast",
        "Free WiFi",
        "Mountain View",
        "Spa",
        "Restaurant",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+90 384 219 2220",
      address: "Uchisar, Cappadocia, Turkey",
      roomType: "Deluxe Cave Suite",
      nearbyPlaces: ["Hot Air Balloon Point", "Love Valley", "Goreme"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Mikla",
      cuisine: "Turkish Fine Dining",
      location: "Istanbul",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous rooftop restaurant offering modern Turkish cuisine and Bosphorus views.",
      speciality: "Lamb and Turkish Meze",
      priceRange: "₹3000 - ₹8000",
      openingHours: "6:00 PM - 12:00 AM",
      contact: "+90 212 293 5656",
      address: "Beyoglu, Istanbul, Turkey",
      features: [
        "Rooftop Dining",
        "City View",
        "Luxury Experience",
        "Fine Dining",
      ],
    },
    {
      id: 2,
      name: "Seten Restaurant",
      cuisine: "Traditional Turkish",
      location: "Cappadocia",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular restaurant known for authentic Turkish dishes and cave-style ambience.",
      speciality: "Testi Kebab",
      priceRange: "₹1500 - ₹4000",
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+90 384 271 3025",
      address: "Goreme, Cappadocia, Turkey",
      features: [
        "Traditional Cuisine",
        "Outdoor Seating",
        "Family Friendly",
        "Scenic View",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Hagia Sophia",
      type: "Historical Monument",
      rating: 4.9,
      ticket: "₹1500 Entry",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
      description:
        "Iconic architectural masterpiece known for its massive dome and rich history.",
      openingHours: "9:00 AM - 7:00 PM",
      address: "Sultanahmet, Istanbul, Turkey",
      bestTimeToVisit: "Morning",
      activities: [
        "Photography",
        "Historical Tour",
        "Sightseeing",
        "Architecture Viewing",
      ],
    },
    {
      id: 2,
      name: "Hot Air Balloon Ride",
      type: "Adventure",
      rating: 4.9,
      ticket: "₹12000 Ride",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
      description:
        "Famous Cappadocia balloon ride offering sunrise views of valleys and rock formations.",
      openingHours: "5:00 AM - 8:00 AM",
      address: "Cappadocia, Turkey",
      bestTimeToVisit: "Sunrise",
      activities: [
        "Balloon Ride",
        "Photography",
        "Sunrise View",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Istanbul Tour",
      morning: "Hotel check-in and breakfast",
      afternoon: "Visit Hagia Sophia and Blue Mosque",
      evening: "Dinner at Mikla",
    },
    {
      title: "Bosphorus Cruise Day",
      morning: "Explore Grand Bazaar",
      afternoon: "Bosphorus Cruise",
      evening: "Dinner with Bosphorus view",
    },
    {
      title: "Cappadocia Adventure",
      morning: "Hot Air Balloon Ride",
      afternoon: "Visit Goreme Open Air Museum",
      evening: "Dinner at Seten Restaurant",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},

  andaman: {
  backgroundImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",

  hotels: [
    {
      id: 1,
      name: "Taj Exotica Resort & Spa",
      location: "Havelock Island",
      rating: 4.9,
      price: "₹28000/night",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      description:
        "Luxury beachfront resort with private villas, spa, and stunning sea views.",
      amenities: [
        "Private Beach",
        "Spa",
        "Pool",
        "Breakfast",
        "Free WiFi",
        "Airport Transfer",
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      contact: "+91 3192 282 222",
      address: "Radhanagar Beach, Havelock Island, Andaman",
      roomType: "Luxury Sea View Villa",
      nearbyPlaces: ["Radhanagar Beach", "Elephant Beach", "Kalapathar Beach"],
    },
    {
      id: 2,
      name: "SeaShell Resort",
      location: "Port Blair",
      rating: 4.7,
      price: "₹9000/night",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular seaside resort with modern rooms, infinity pool, and rooftop restaurant.",
      amenities: [
        "Pool",
        "Breakfast",
        "Free WiFi",
        "Restaurant",
        "Sea View",
        "Parking",
      ],
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      contact: "+91 3192 233 888",
      address: "Marine Hill, Port Blair, Andaman",
      roomType: "Premium Ocean View Room",
      nearbyPlaces: ["Cellular Jail", "Corbyn's Cove", "Ross Island"],
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Anju Coco Resto",
      cuisine: "Seafood & Indian",
      location: "Havelock Island",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      description:
        "Beachside restaurant known for fresh seafood, grilled fish, and local dishes.",
      speciality: "Grilled Lobster",
      priceRange: "₹1200 - ₹3000",
      openingHours: "11:00 AM - 10:30 PM",
      contact: "+91 95318 12345",
      address: "Govind Nagar, Havelock Island",
      features: [
        "Beach View",
        "Outdoor Seating",
        "Family Friendly",
        "Seafood Speciality",
      ],
    },
    {
      id: 2,
      name: "New Lighthouse Restaurant",
      cuisine: "Seafood",
      location: "Port Blair",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
      description:
        "Popular seafood restaurant serving crab, prawns, and fish dishes.",
      speciality: "Crab Masala",
      priceRange: "₹1000 - ₹2500",
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+91 3192 232 345",
      address: "Aberdeen Bazaar, Port Blair",
      features: [
        "Seafood",
        "Family Dining",
        "Quick Service",
        "Local Cuisine",
      ],
    },
  ],

  attractions: [
    {
      id: 1,
      name: "Radhanagar Beach",
      type: "Beach",
      rating: 4.9,
      ticket: "Free Entry",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      description:
        "One of Asia's most beautiful beaches known for white sand and crystal-clear water.",
      openingHours: "Open 24 Hours",
      address: "Havelock Island, Andaman",
      bestTimeToVisit: "November to April",
      activities: [
        "Swimming",
        "Photography",
        "Sunset View",
        "Beach Walk",
      ],
    },
    {
      id: 2,
      name: "Cellular Jail",
      type: "Historical Monument",
      rating: 4.8,
      ticket: "₹200 Entry",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop",
      description:
        "Historic colonial prison known for its role in India's freedom struggle.",
      openingHours: "9:00 AM - 5:00 PM",
      address: "Port Blair, Andaman",
      bestTimeToVisit: "Evening",
      activities: [
        "Historical Tour",
        "Photography",
        "Light and Sound Show",
        "Sightseeing",
      ],
    },
  ],

  itineraryTemplates: [
    {
      title: "Arrival and Beach Relaxation",
      morning: "Hotel check-in and breakfast",
      afternoon: "Relax at Radhanagar Beach",
      evening: "Dinner at Anju Coco Resto",
    },
    {
      title: "Island Adventure Day",
      morning: "Visit Elephant Beach",
      afternoon: "Snorkeling and water sports",
      evening: "Sunset at Kalapathar Beach",
    },
    {
      title: "Port Blair Exploration",
      morning: "Visit Cellular Jail",
      afternoon: "Explore Ross Island",
      evening: "Dinner at New Lighthouse Restaurant",
    },
    {
      title: "Departure Day",
      morning: "Breakfast and shopping",
      afternoon: "Packing and checkout",
      evening: "Departure",
    },
  ],
},
};

module.exports = destinations;

