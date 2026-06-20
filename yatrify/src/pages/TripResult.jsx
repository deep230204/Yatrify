import { useEffect, useState } from "react";
import { Bot, MapPinned, Sparkles } from "lucide-react";
import HeroBanner from "../components/trip/HeroBanner";
import OverviewCards from "../components/trip/OverviewCards";
import HotelSection from "../components/trip/HotelSection";
import DayPlanSection from "../components/trip/DayPlanSection";
import RestaurantSection from "../components/trip/RestaurantSection";
import AttractionSection from "../components/trip/AttractionSection";
import MapSection from "../components/trip/MapSection";
import BudgetSection from "../components/trip/BudgetSection";
import ActionButtons from "../components/trip/ActionButtons";

const TripResult = () => {
  const [tripResult, setTripResult] = useState(
    JSON.parse(localStorage.getItem("tripResult")) || {}
  );
  const sourceLabelMap = {
    "google-places": "Verified places from maps data",
    "local-dataset": "Curated destination place data",
    fallback: "Essential destination backup data",
  };
  const hasAiPlanning = tripResult?.aiProvider && tripResult.aiProvider !== "none";

  useEffect(() => {
    const syncTripResult = () => {
      setTripResult(JSON.parse(localStorage.getItem("tripResult")) || {});
    };

    window.addEventListener("storage", syncTripResult);
    window.addEventListener("focus", syncTripResult);

    console.log("Trip Data:", tripResult);
    console.log("Hotels:", tripResult?.hotels);
    console.log("Restaurants:", tripResult?.restaurants);
    console.log("Attractions:", tripResult?.attractions);
    console.log("Itinerary:", tripResult?.itinerary);

    return () => {
      window.removeEventListener("storage", syncTripResult);
      window.removeEventListener("focus", syncTripResult);
    };
  }, [tripResult]);

  return (
    <div id="trip-result-page">
      <div className="min-h-[100svh] bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 px-4 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
          <HeroBanner tripData={tripResult} />

          <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  How this plan was built
                </div>

                <h2 className="text-2xl font-black text-slate-900">
                  Your trip combines real place data and smart planning
                </h2>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-500">
                  We use destination and place data to build the location list, then AI helps shape the day-by-day itinerary and overall trip flow when available.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Place data</h3>
                    <p className="text-sm text-slate-600">
                      {sourceLabelMap[tripResult?.dataSource] || sourceLabelMap.fallback}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Hotels, restaurants, attractions, map links, and many images are sourced from place data and curated destination content.
                </p>
              </div>

              <div className="rounded-[28px] border border-violet-100 bg-violet-50/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">AI planning</h3>
                    <p className="text-sm text-slate-600">
                      {hasAiPlanning ? "AI was used to shape the itinerary and trip flow" : "This trip used standard planning logic without AI assistance"}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  The day-wise itinerary is the most AI-shaped part of the result. Recommended trip structure and presentation can also be refined by AI when available.
                </p>
              </div>
            </div>
          </div>

          <OverviewCards tripData={tripResult} />

          <HotelSection hotels={tripResult?.hotels || []} />

          <DayPlanSection
            itinerary={tripResult?.itinerary || []}
            aiProvider={tripResult?.aiProvider || "none"}
          />

          <RestaurantSection
            restaurants={tripResult?.restaurants || []}
          />

          <AttractionSection
            attractions={tripResult?.attractions || []}
          />

          <MapSection tripData={tripResult} />

          <BudgetSection tripData={tripResult} />

          <ActionButtons tripData={tripResult} />
        </div>
      </div>
    </div>
  );
};

export default TripResult;
