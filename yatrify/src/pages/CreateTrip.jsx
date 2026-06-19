import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plane,
  MapPin,
  CalendarDays,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  Wallet,
  Gem,
  User,
  Heart,
  Users,
  UserRoundPlus,
  DollarSign,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { clearAuthData, getAuthToken } from "../lib/auth";
import { apiUrl, getApiErrorMessage } from "../lib/api";


const CreateTrip = () => {
  const [step, setStep] = useState(1);
  const [showAiLoading, setShowAiLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [useDropdown, setUseDropdown] = useState(true);
  const [formData, setFormData] = useState({
    destination: "",
    noOfDays: "",
    traveler: "",
    budget: "",
  });

  const navigate = useNavigate();

  const budgetOptions = [
    {
      id: "Budget Friendly",
      title: "Budget Friendly",
      icon: DollarSign,
    },
    {
      id: "Moderate",
      title: "Moderate",
      icon: Wallet,
    },
    {
      id: "Luxury",
      title: "Luxury",
      icon: Gem,
    },
  ];

  const travelerOptions = [
    {
      id: "solo",
      title: "Solo Traveler",
      subtitle: "Exploring at your own pace",
      icon: User,
    },
    {
      id: "couple",
      title: "Couple",
      subtitle: "Romantic getaways",
      icon: Heart,
    },
    {
      id: "family",
      title: "Family",
      subtitle: "Kid-friendly activities",
      icon: Users,
    },
    {
      id: "group",
      title: "Group/Friends",
      subtitle: "Thrill-seekers group",
      icon: UserRoundPlus,
    },
  ];
  const commonDestinations = [
    { name: "Goa", type: "Domestic" },
    { name: "Dubai", type: "International" },
    { name: "Manali", type: "Domestic" },
    { name: "Jaipur", type: "Domestic" },
    { name: "Kashmir", type: "Domestic" },
    { name: "Kerala", type: "Domestic" },
    { name: "Ladakh", type: "Domestic" },
    { name: "Udaipur", type: "Domestic" },
    { name: "Shimla", type: "Domestic" },
    { name: "Bali", type: "International" },
    { name: "Thailand", type: "International" },
    { name: "Singapore", type: "International" },
    { name: "Maldives", type: "International" },
    { name: "Paris", type: "International" },
    { name: "London", type: "International" },
    { name: "New York", type: "International" },
    { name: "Switzerland", type: "International" },
    { name: "Turkey", type: "International" },
    { name: "Andaman", type: "Domestic" }
  ];

  const isDestinationValid = commonDestinations.some(
    (d) => d.name.toLowerCase() === formData.destination.trim().toLowerCase()
  );

  const isInputInvalid = formData.destination.trim() !== "" && !isDestinationValid;

  const handleSearch = async (text) => {
    setSearch(text);

    if (!text) {
      setSuggestions([]);
      return;
    }

    try {
      const query = text.trim().toLowerCase();
      const filteredSuggestions = commonDestinations
        .filter((item) => item.name.toLowerCase().includes(query))
        .slice(0, 5)
        .map((item) => ({ display_name: item.name }));

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.log(error);
      setSuggestions([]);
    }
  };

  const handleGeneratePlan = async () => {
    const token = getAuthToken();

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setShowAiLoading(true);

      const response = await axios.post(
        apiUrl("/api/trip/generate"),
        {
          destination: formData.destination,
          days: Number(formData.noOfDays),
          budget: formData.budget,
          travelers: formData.traveler,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("tripResult", JSON.stringify(response.data));

      setTimeout(() => {
        setShowAiLoading(false);
        navigate("/trip-result");
      }, 2500);
    } catch (error) {
      console.log(error.response?.data);
      console.log(error);
      setShowAiLoading(false);

      if (error.response?.status === 401) {
        clearAuthData();
        toast.error(
          error.response?.data?.message || "Please login to continue",
        );
        navigate("/login");
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to generate trip"));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/40 overflow-hidden">
        <div className="h-2 bg-indigo-100 w-full">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="grid lg:grid-cols-2 min-h-[700px]">
          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>

              <h2 className="text-4xl font-bold leading-tight mb-4">
                Plan Your Dream Trip with Yatrify
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Discover destinations, create AI-powered itineraries, and build
                unforgettable travel experiences in minutes.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Smart Destination Search</h4>
                    <p className="text-white/70 text-sm">
                      Search any city, place, or destination instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexible Trip Duration</h4>
                    <p className="text-white/70 text-sm">
                      Plan short trips, vacations, and long getaways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex justify-center items-center gap-2 mb-10">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`transition-all duration-300 rounded-full ${
                    step === s
                      ? "w-10 h-2 bg-indigo-600"
                      : step > s
                        ? "w-3 h-3 bg-indigo-600"
                        : "w-3 h-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {step === 1 && (
              <div>
                <div className="text-center mb-10">
                  <div className="relative inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white/40 overflow-hidden mb-5">
                    <div className="absolute w-24 h-24 bg-purple-400/20 rounded-full blur-2xl -top-10 -left-6 animate-pulse" />
                    <div className="absolute w-16 h-16 bg-pink-400/20 rounded-full blur-2xl -bottom-8 right-0 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md animate-pulse" />

                    <span className="relative text-sm font-semibold text-slate-700">
                      AI-Powered Travel Agent v2.0
                    </span>
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                    Where&apos;s your next adventure?
                  </h3>

                  <p className="text-gray-500 mt-4 text-lg">
                    Select your destination and duration for a perfect trip.
                  </p>
                </div>

                <div className="space-y-7">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-base font-semibold text-gray-800">
                        Destination
                      </label>

                      {/* Input Mode Selector Option */}
                      <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
                        <button
                          type="button"
                          onClick={() => setUseDropdown(true)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                            useDropdown
                              ? "bg-white text-indigo-600 shadow-sm"
                              : "text-slate-500 hover:text-slate-950"
                          }`}
                        >
                          Select List
                        </button>
                        <button
                          type="button"
                          onClick={() => setUseDropdown(false)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                            !useDropdown
                              ? "bg-white text-indigo-600 shadow-sm"
                              : "text-slate-500 hover:text-slate-950"
                          }`}
                        >
                          Search Box
                        </button>
                      </div>
                    </div>

                    {useDropdown ? (
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <select
                          value={formData.destination}
                          onChange={(e) => {
                            setFormData({ ...formData, destination: e.target.value });
                            setSearch(e.target.value);
                          }}
                          className="w-full h-16 rounded-2xl border border-gray-200 bg-white pl-12 pr-10 text-lg outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 shadow-sm appearance-none cursor-pointer font-medium text-slate-800"
                        >
                          <option value="">-- Choose a Destination --</option>
                          {commonDestinations.map((dest) => (
                            <option key={dest.name} value={dest.name}>
                              {dest.name} ({dest.type})
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, destination: value });
                            handleSearch(value);
                          }}
                          placeholder="Search destination..."
                          className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-12 pr-4 text-lg outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 shadow-sm"
                        />
                      </div>
                    )}

                    {isInputInvalid && (
                      <p className="text-rose-500 text-sm mt-2.5 font-semibold flex items-center gap-1.5 animate-in fade-in duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                        We currently only support our curated travel destinations. Please choose a supported option.
                      </p>
                    )}

                    {/* Curated Destinations Filter & Selection Pills */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-2 flex-wrap bg-slate-50 p-2 rounded-2xl border border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">
                          Select Type:
                        </span>
                        {["All", "Domestic", "International"].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all duration-200 cursor-pointer ${
                              selectedCategory === cat
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1">
                        {commonDestinations
                          .filter(
                            (dest) =>
                              selectedCategory === "All" || dest.type === selectedCategory
                          )
                          .map((dest) => (
                            <button
                              key={dest.name}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, destination: dest.name });
                                setSearch(dest.name);
                                setSuggestions([]);
                              }}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                                formData.destination.toLowerCase() === dest.name.toLowerCase()
                                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-105"
                                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                              }`}
                            >
                              {dest.name}
                            </button>
                          ))}
                      </div>
                    </div>

                    {suggestions.length > 0 && !useDropdown && (
                      <div className="absolute left-0 right-0 top-[110px] mt-3 rounded-2xl border border-gray-200 bg-white shadow-2xl z-50 max-h-64 overflow-y-auto">
                        {suggestions.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSearch(item.display_name);
                              setFormData({
                                ...formData,
                                destination: item.display_name,
                              });
                              setSuggestions([]);
                            }}
                            className="cursor-pointer px-5 py-4 text-gray-700 hover:bg-indigo-50 transition border-b border-gray-100 last:border-b-0"
                          >
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-indigo-500 mt-1" />
                              <span className="text-sm sm:text-base font-medium">
                                {item.display_name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-gray-800 mb-3">
                      How many days?
                    </label>

                    <div className="relative">
                      <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                      <input
                        type="number"
                        min="1"
                        max="7"
                        value={formData.noOfDays}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            noOfDays: e.target.value,
                          })
                        }
                        placeholder="Enter number of days (1 - 7)"
                        className="w-full h-16 rounded-2xl border border-gray-200 bg-white px-12 pr-4 text-lg outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 shadow-sm"
                      />
                    </div>

                    {formData.noOfDays !== "" && (Number(formData.noOfDays) < 1 || Number(formData.noOfDays) > 7) && (
                      <p className="text-rose-500 text-sm mt-2.5 font-semibold flex items-center gap-1.5 animate-in fade-in duration-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Please enter a duration between 1 and 7 days.
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!isDestinationValid || !formData.noOfDays || Number(formData.noOfDays) < 1 || Number(formData.noOfDays) > 7}
                    className="w-full h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}


{step === 2 && (
  <div className="animate-in fade-in duration-500">
    <div className="text-center mb-10">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 flex items-center justify-center mb-5 shadow-md">
        <DollarSign className="w-8 h-8 text-indigo-600" />
      </div>

      <h3 className="text-4xl font-bold text-gray-900 leading-tight">
        What&apos;s your budget?
      </h3>

      <p className="text-gray-500 mt-4 text-lg">
        We&apos;ll find spots that match your wallet.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {budgetOptions.slice(0, 2).map((option) => {
        const Icon = option.icon;

        return (
          <div
            key={option.id}
            onClick={() =>
              setFormData({
                ...formData,
                budget: option.id,
              })
            }
            className={`cursor-pointer rounded-3xl border p-5 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              formData.budget === option.id
                ? "border-indigo-500 bg-indigo-50 shadow-lg ring-2 ring-indigo-100"
                : "border-gray-200 bg-white hover:border-indigo-300"
            }`}
          >
            <div
              className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                formData.budget === option.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-semibold text-gray-900 leading-tight">
              {option.title}
            </h4>
          </div>
        );
      })}
    </div>

    <div className="flex justify-center mt-4">
      {budgetOptions.slice(2).map((option) => {
        const Icon = option.icon;

        return (
          <div
            key={option.id}
            onClick={() =>
              setFormData({
                ...formData,
                budget: option.id,
              })
            }
            className={`w-full max-w-[220px] cursor-pointer rounded-3xl border p-5 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              formData.budget === option.id
                ? "border-indigo-500 bg-indigo-50 shadow-lg ring-2 ring-indigo-100"
                : "border-gray-200 bg-white hover:border-indigo-300"
            }`}
          >
            <div
              className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                formData.budget === option.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-semibold text-gray-900 leading-tight">
              {option.title}
            </h4>
          </div>
        );
      })}
    </div>

    <div className="flex gap-4 mt-10">
      <button
        onClick={() => setStep(1)}
        className="w-1/2 h-14 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 hover:shadow-md transition-all duration-300"
      >
        Back
      </button>

      <button
        onClick={() => setStep(3)}
        disabled={!formData.budget}
        className="w-1/2 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-[1.03] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  </div>
)}


            {step === 3 && (
              <div className="animate-in fade-in duration-500">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-100 flex items-center justify-center mb-5 shadow-md text-xl font-semibold text-indigo-700">
                    You
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                    Who are you traveling with?
                  </h3>

                  <p className="text-gray-500 mt-3 text-base max-w-md mx-auto">
                    Customize your experience based on your group.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {travelerOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <div
                        key={option.id}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            traveler: option.id,
                          })
                        }
                        className={`cursor-pointer rounded-3xl border p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                          formData.traveler === option.id
                            ? "border-indigo-600 bg-indigo-50 shadow-xl ring-4 ring-indigo-100"
                            : "border-gray-200 bg-white hover:border-indigo-300"
                        }`}
                      >
                        <div
                          className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                            formData.traveler === option.id
                              ? "bg-indigo-100 text-indigo-700 shadow-md"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>

                        <h4 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                          {option.title}
                        </h4>

                        <p className="text-gray-500 text-sm leading-snug">
                          {option.subtitle}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="w-1/2 h-14 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    Back
                  </button>

                  <button
                    onClick={handleGeneratePlan}
                    disabled={!formData.traveler}
                    className="w-1/2 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Generate Plan
                  </button>
                </div>
              </div>
            )}

            {showAiLoading && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-lg px-4">
                <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(99,102,241,0.35)] animate-in fade-in zoom-in duration-500">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                    <Plane className="h-10 w-10 text-white animate-spin" />
                  </div>

                  <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-1">
                    AI is Planning Your Trip
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:0.2s]">
                      .
                    </span>
                    <span className="animate-bounce [animation-delay:0.4s]">
                      .
                    </span>
                  </h2>

                  <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                    Generating destinations, hotels, restaurants, activities,
                    and your perfect itinerary.
                  </p>

                  <div className="mt-6 space-y-2 text-left">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                      Finding best hotels...
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                      Creating day-wise itinerary...
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                      Discovering top attractions...
                    </div>
                  </div>

                  <div className="mt-8 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
