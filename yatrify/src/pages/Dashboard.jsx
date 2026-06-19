import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import {
  Archive,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  Compass,
  Hotel,
  Map,
  MapPin,
  NotebookPen,
  Search,
  Sparkles,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { clearAuthData, getAuthToken } from "../lib/auth";
import { apiUrl, getApiErrorMessage } from "../lib/api";

const statCards = [
  {
    key: "totalTrips",
    label: "Trips Planned",
    icon: Compass,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    key: "savedTrips",
    label: "Saved Trips",
    icon: Bookmark,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    key: "totalPlannedDays",
    label: "Planned Days",
    icon: CalendarDays,
    accent: "from-amber-500 to-orange-500",
  },
  {
    key: "totalAttractionsExplored",
    label: "Attractions",
    icon: Map,
    accent: "from-pink-500 to-rose-500",
  },
  {
    key: "completedTrips",
    label: "Completed",
    icon: CheckCircle2,
    accent: "from-cyan-500 to-sky-500",
  },
  {
    key: "archivedTrips",
    label: "Archived",
    icon: Archive,
    accent: "from-slate-500 to-slate-700",
  },
];

const tripTabs = [
  { id: "all", label: "All Trips" },
  { id: "recent", label: "Recent" },
  { id: "saved", label: "Saved" },
  { id: "upcoming", label: "Upcoming" },
  { id: "completed", label: "Completed" },
  { id: "archived", label: "Archived" },
];

const aiProviderConfig = {
  gemini: {
    label: "AI Planned",
    className: "bg-fuchsia-50 text-fuchsia-700",
  },
  groq: {
    label: "AI Planned",
    className: "bg-violet-50 text-violet-700",
  },
  none: {
    label: "",
    className: "bg-slate-100 text-slate-700",
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  const [dashboardData, setDashboardData] = useState({
    summary: {},
    trips: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [noteDrafts, setNoteDrafts] = useState({});
  const [savingTripId, setSavingTripId] = useState("");
  const [deletingTripId, setDeletingTripId] = useState("");
  const [editingNoteTripId, setEditingNoteTripId] = useState("");
  const [updatingStatusTripId, setUpdatingStatusTripId] = useState("");

  const authHeaders = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
    }),
    [token]
  );

  const handleUnauthorized = () => {
    clearAuthData();
    toast.error("Please login to continue");
    navigate("/login");
  };

  const fetchDashboard = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl("/api/trip/mine"), {
        headers: authHeaders,
      });

      setDashboardData(response.data);
      setNoteDrafts(
        response.data.trips.reduce((acc, trip) => {
          acc[trip._id] = trip.notes || "";
          return acc;
        }, {})
      );
    } catch (error) {
      if (error.response?.status === 401) {
        handleUnauthorized();
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to load dashboard"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, [token]);

  const budgets = useMemo(
    () => ["all", ...new Set(dashboardData.trips.map((trip) => trip.budget).filter(Boolean))],
    [dashboardData.trips]
  );

  const filteredTrips = useMemo(() => {
    let trips = [...dashboardData.trips];

    if (activeTab === "recent") {
      trips = trips.slice(0, 6);
    }

    if (activeTab === "saved") {
      trips = trips.filter((trip) => trip.isSaved);
    }

    if (["upcoming", "completed", "archived"].includes(activeTab)) {
      trips = trips.filter((trip) => trip.status === activeTab);
    }

    if (selectedBudget !== "all") {
      trips = trips.filter((trip) => trip.budget === selectedBudget);
    }

    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      trips = trips.filter(
        (trip) =>
          trip.destination?.toLowerCase().includes(query) ||
          trip.travelers?.toLowerCase().includes(query) ||
          trip.notes?.toLowerCase().includes(query)
      );
    }

    return trips;
  }, [activeTab, dashboardData.trips, searchTerm, selectedBudget]);

  const savedTrips = useMemo(
    () => dashboardData.trips.filter((trip) => trip.isSaved),
    [dashboardData.trips]
  );

  const applyTripUpdate = (updatedTrip) => {
    setDashboardData((current) => {
      const nextTrips = current.trips.map((trip) =>
        trip._id === updatedTrip._id ? updatedTrip : trip
      );

      const summary = {
        totalTrips: nextTrips.length,
        savedTrips: nextTrips.filter((trip) => trip.isSaved).length,
        upcomingTrips: nextTrips.filter((trip) => trip.status === "upcoming").length,
        completedTrips: nextTrips.filter((trip) => trip.status === "completed").length,
        archivedTrips: nextTrips.filter((trip) => trip.status === "archived").length,
        totalHotelsExplored: nextTrips.reduce((sum, trip) => sum + (trip.totalHotels || 0), 0),
        totalRestaurantsExplored: nextTrips.reduce(
          (sum, trip) => sum + (trip.totalRestaurants || 0),
          0
        ),
        totalAttractionsExplored: nextTrips.reduce(
          (sum, trip) => sum + (trip.totalAttractions || 0),
          0
        ),
        totalPlannedDays: nextTrips.reduce((sum, trip) => sum + (trip.days || 0), 0),
        favoriteBudget:
          Object.entries(
            nextTrips.reduce((acc, trip) => {
              acc[trip.budget] = (acc[trip.budget] || 0) + 1;
              return acc;
            }, {})
          ).sort((a, b) => b[1] - a[1])[0]?.[0] || "No trips yet",
        recentDestination: nextTrips[0]?.destination || "No trips yet",
      };

      return { summary, trips: nextTrips };
    });
  };

  const handleToggleSave = async (trip) => {
    try {
      setSavingTripId(trip._id);
      const response = await axios.patch(
        apiUrl(`/api/trip/${trip._id}/save`),
        { isSaved: !trip.isSaved },
        { headers: authHeaders }
      );

      applyTripUpdate(response.data.trip);
      toast.success(response.data.message);
    } catch (error) {
      if (error.response?.status === 401) {
        handleUnauthorized();
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to update trip"));
    } finally {
      setSavingTripId("");
    }
  };

  const handleSaveNotes = async (tripId) => {
    try {
      setSavingTripId(tripId);
      const response = await axios.patch(
        apiUrl(`/api/trip/${tripId}`),
        { notes: noteDrafts[tripId] || "" },
        { headers: authHeaders }
      );

      applyTripUpdate(response.data.trip);
      setEditingNoteTripId("");
      toast.success("Trip notes updated");
    } catch (error) {
      if (error.response?.status === 401) {
        handleUnauthorized();
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to save notes"));
    } finally {
      setSavingTripId("");
    }
  };

  const handleStatusChange = async (tripId, status) => {
    try {
      setUpdatingStatusTripId(tripId);
      const response = await axios.patch(
        apiUrl(`/api/trip/${tripId}`),
        { status },
        { headers: authHeaders }
      );

      applyTripUpdate(response.data.trip);
      toast.success("Trip status updated");
    } catch (error) {
      if (error.response?.status === 401) {
        handleUnauthorized();
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to update trip status"));
    } finally {
      setUpdatingStatusTripId("");
    }
  };

  const handleDeleteTrip = async (tripId) => {
    const confirmed = window.confirm("Delete this trip from your dashboard?");

    if (!confirmed) {
      return;
    }

    try {
      setDeletingTripId(tripId);
      await axios.delete(apiUrl(`/api/trip/${tripId}`), {
        headers: authHeaders,
      });

      setDashboardData((current) => {
        const nextTrips = current.trips.filter((trip) => trip._id !== tripId);
        const summary = {
          totalTrips: nextTrips.length,
          savedTrips: nextTrips.filter((trip) => trip.isSaved).length,
          totalHotelsExplored: nextTrips.reduce((sum, trip) => sum + (trip.totalHotels || 0), 0),
          totalRestaurantsExplored: nextTrips.reduce(
            (sum, trip) => sum + (trip.totalRestaurants || 0),
            0
          ),
          totalAttractionsExplored: nextTrips.reduce(
            (sum, trip) => sum + (trip.totalAttractions || 0),
            0
          ),
          totalPlannedDays: nextTrips.reduce((sum, trip) => sum + (trip.days || 0), 0),
          favoriteBudget:
            Object.entries(
              nextTrips.reduce((acc, trip) => {
                acc[trip.budget] = (acc[trip.budget] || 0) + 1;
                return acc;
              }, {})
            ).sort((a, b) => b[1] - a[1])[0]?.[0] || "No trips yet",
          upcomingTrips: nextTrips.filter((trip) => trip.status === "upcoming").length,
          completedTrips: nextTrips.filter((trip) => trip.status === "completed").length,
          archivedTrips: nextTrips.filter((trip) => trip.status === "archived").length,
          recentDestination: nextTrips[0]?.destination || "No trips yet",
        };

        return { summary, trips: nextTrips };
      });

      toast.success("Trip deleted successfully");
    } catch (error) {
      if (error.response?.status === 401) {
        handleUnauthorized();
        return;
      }

      toast.error(getApiErrorMessage(error, "Failed to delete trip"));
    } finally {
      setDeletingTripId("");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0e7ff,transparent_30%),radial-gradient(circle_at_top_right,#fde68a,transparent_22%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-4 pt-32 pb-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="overflow-hidden rounded-[36px] border border-white/30 bg-slate-950 text-white shadow-[0_25px_100px_rgba(15,23,42,0.18)]">
          <div className="relative px-8 py-10 md:px-12 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.35),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.22),transparent_22%)]" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-xl">
                  Your Yatrify Dashboard
                </div>
                <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                  Your travel command center
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  Review generated itineraries, save your favorites, keep quick notes, and organize every plan you create in Yatrify.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-xl">
                  <p className="text-white/50">Favorite Budget</p>
                  <p className="mt-1 font-semibold">{dashboardData.summary.favoriteBudget || "No trips yet"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-xl">
                  <p className="text-white/50">Recent Destination</p>
                  <p className="mt-1 font-semibold">{dashboardData.summary.recentDestination || "No trips yet"}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-xl">
                  <p className="text-white/50">Hotels Found</p>
                  <p className="mt-1 font-semibold">{dashboardData.summary.totalHotelsExplored || 0}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-xl">
                  <p className="text-white/50">Restaurants Found</p>
                  <p className="mt-1 font-semibold">{dashboardData.summary.totalRestaurantsExplored || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-r ${card.accent} p-3 text-white shadow-lg`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  {dashboardData.summary[card.key] || 0}
                </h2>
              </div>
            );
          })}
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Trip Library</h2>
                <p className="mt-1 text-slate-500">
                  Browse, filter, save, annotate, and reopen every trip.
                </p>
              </div>
              <button
                onClick={() => navigate("/create-trip")}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Plan New Trip
              </button>
            </div>

            <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {tripTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeTab === tab.id
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search destination or notes"
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:w-64"
                  />
                </label>

                <select
                  value={selectedBudget}
                  onChange={(event) => setSelectedBudget(event.target.value)}
                  className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                >
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget === "all" ? "All Budgets" : budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="grid gap-4 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-72 animate-pulse rounded-[28px] bg-slate-100" />
                ))}
              </div>
            ) : filteredTrips.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredTrips.map((trip) => {
                  const isEditingNotes = editingNoteTripId === trip._id;
                  const providerBadge =
                    aiProviderConfig[trip.aiProvider] || aiProviderConfig.none;
                  return (
                    <div
                      key={trip._id}
                      className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                    >
                      <button
                        onClick={() => {
                          localStorage.setItem("tripResult", JSON.stringify(trip));
                          navigate("/trip-result");
                        }}
                        className="w-full text-left"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={
                              trip.backgroundImage ||
                              trip.attractions?.[0]?.image ||
                              trip.hotels?.[0]?.image
                            }
                            alt={trip.destination}
                            className="h-full w-full object-cover transition duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                          {trip.isSaved && (
                            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700">
                              Saved
                            </div>
                          )}
                        </div>
                      </button>

                      <div className="space-y-4 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">{trip.destination}</h3>
                            <p className="text-sm text-slate-500">
                              {trip.days} days • {trip.travelers}
                            </p>
                            {trip.aiProvider && trip.aiProvider !== "none" ? (
                              <div className="mt-3">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${providerBadge.className}`}
                                >
                                  <Sparkles className="h-3.5 w-3.5" />
                                  {providerBadge.label}
                                </span>
                              </div>
                            ) : null}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                              {trip.budget}
                            </span>
                            <span
                              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                                trip.status === "completed"
                                  ? "bg-cyan-50 text-cyan-700"
                                  : trip.status === "archived"
                                    ? "bg-slate-100 text-slate-700"
                                    : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {trip.status || "upcoming"}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-xs text-slate-600">
                          <div className="rounded-2xl bg-slate-50 px-3 py-2">
                            <Hotel className="mb-1 h-4 w-4 text-slate-800" />
                            {trip.totalHotels || 0} Hotels
                          </div>
                          <div className="rounded-2xl bg-slate-50 px-3 py-2">
                            <UtensilsCrossed className="mb-1 h-4 w-4 text-slate-800" />
                            {trip.totalRestaurants || 0} Food
                          </div>
                          <div className="rounded-2xl bg-slate-50 px-3 py-2">
                            <MapPin className="mb-1 h-4 w-4 text-slate-800" />
                            {trip.totalAttractions || 0} Sights
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div className="text-sm font-semibold text-slate-800">
                              Trip Status
                            </div>
                            <select
                              value={trip.status || "upcoming"}
                              onChange={(event) =>
                                handleStatusChange(trip._id, event.target.value)
                              }
                              disabled={updatingStatusTripId === trip._id}
                              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 disabled:opacity-60"
                            >
                              <option value="upcoming">Upcoming</option>
                              <option value="completed">Completed</option>
                              <option value="archived">Archived</option>
                            </select>
                          </div>

                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                              <NotebookPen className="h-4 w-4" />
                              Trip Notes
                            </div>
                            <button
                              onClick={() =>
                                setEditingNoteTripId(isEditingNotes ? "" : trip._id)
                              }
                              className="text-xs font-semibold text-indigo-600"
                            >
                              {isEditingNotes ? "Close" : "Edit"}
                            </button>
                          </div>

                          {isEditingNotes ? (
                            <div className="space-y-3">
                              <textarea
                                value={noteDrafts[trip._id] || ""}
                                onChange={(event) =>
                                  setNoteDrafts((current) => ({
                                    ...current,
                                    [trip._id]: event.target.value,
                                  }))
                                }
                                rows={4}
                                placeholder="Add personal notes, packing reminders, or must-visit ideas"
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                              />
                              <button
                                onClick={() => handleSaveNotes(trip._id)}
                                disabled={savingTripId === trip._id}
                                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
                              >
                                {savingTripId === trip._id ? "Saving..." : "Save Notes"}
                              </button>
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed text-slate-500">
                              {trip.notes || "No notes yet. Add reminders, restaurant picks, or budget thoughts here."}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => handleToggleSave(trip)}
                            disabled={savingTripId === trip._id}
                            className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                              trip.isSaved
                                ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                            } disabled:opacity-60`}
                          >
                            {savingTripId === trip._id
                              ? "Updating..."
                              : trip.isSaved
                                ? "Remove from Saved"
                                : "Save Trip"}
                          </button>

                          <button
                            onClick={() => handleDeleteTrip(trip._id)}
                            disabled={deletingTripId === trip._id}
                            className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
                          >
                            {deletingTripId === trip._id ? "Deleting..." : "Delete Trip"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
                <h3 className="text-2xl font-bold text-slate-900">No trips match this view</h3>
                <p className="mt-3 text-slate-500">
                  Try a different tab, clear the filters, or generate a new trip.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <h2 className="text-2xl font-black text-slate-900">Saved Collection</h2>
              <p className="mt-1 text-slate-500">
                Trips you marked for quick access later.
              </p>

              <div className="mt-5 space-y-3">
                {savedTrips.length ? (
                  savedTrips.slice(0, 5).map((trip) => (
                    <button
                      key={trip._id}
                      onClick={() => {
                        localStorage.setItem("tripResult", JSON.stringify(trip));
                        navigate("/trip-result");
                      }}
                      className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-indigo-200 hover:bg-indigo-50"
                    >
                      <img
                        src={
                          trip.backgroundImage ||
                          trip.attractions?.[0]?.image ||
                          trip.hotels?.[0]?.image
                        }
                        alt={trip.destination}
                        className="h-14 w-14 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-slate-900">{trip.destination}</p>
                        <p className="text-sm text-slate-500">{trip.days} days • {trip.budget}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="rounded-2xl bg-slate-50 px-4 py-8 text-center text-slate-500">
                    Save a trip from the result page and it will appear here.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <h2 className="text-2xl font-black text-slate-900">Planning Snapshot</h2>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <CalendarDays className="h-4 w-4" />
                    Upcoming Trips
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.upcomingTrips || 0}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Completed Trips
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.completedTrips || 0}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <Archive className="h-4 w-4" />
                    Archived Trips
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.archivedTrips || 0}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <Wallet className="h-4 w-4" />
                    Favorite Budget
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.favoriteBudget || "No trips yet"}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <Compass className="h-4 w-4" />
                    Latest Destination
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.recentDestination || "No trips yet"}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <Hotel className="h-4 w-4" />
                    Hotels Explored
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.totalHotelsExplored || 0}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="flex items-center gap-2 text-slate-600">
                    <UtensilsCrossed className="h-4 w-4" />
                    Restaurants Explored
                  </span>
                  <span className="font-semibold text-slate-900">{dashboardData.summary.totalRestaurantsExplored || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
