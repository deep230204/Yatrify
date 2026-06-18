import { motion } from "framer-motion";
import {
  Save,
  Download,
  Share2,
  RefreshCcw,
  Sparkles,
  ArrowUpRight,
  Plane,
} from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import { useState } from "react";
import { clearAuthData, getAuthToken } from "../../lib/auth";

const ActionButtons = ({ tripData: propTripData }) => {
  const tripData = propTripData ||
    JSON.parse(localStorage.getItem("tripResult")) || {};
  const [isSaving, setIsSaving] = useState(false);
  const [showAiLoading, setShowAiLoading] = useState(false);

  const handleSaveTrip = async () => {
    const token = getAuthToken();

    if (!tripData?._id || !token) {
      toast.error("Login and generate a trip first");
      return;
    }

    try {
      setIsSaving(true);
      const response = await axios.patch(
        `http://localhost:5000/api/trip/${tripData._id}/save`,
        { isSaved: !tripData.isSaved },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("tripResult", JSON.stringify(response.data.trip));
      toast.success(response.data.message);
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      if (error.response?.status === 401) {
        clearAuthData();
      }

      toast.error(error.response?.data?.message || "Failed to update saved trip");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
  try {
    const element = document.getElementById("trip-result-page");

    if (!element) {
      toast.error("Trip page not found");
      return;
    }

    toast.success("Preparing PDF...");

    const clonedElement = element.cloneNode(true);

    clonedElement.style.background = "#ffffff";
    clonedElement.style.color = "#111827";
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";
    clonedElement.style.top = "0";
    clonedElement.style.width = `${element.offsetWidth}px`;

    document.body.appendChild(clonedElement);

   clonedElement.querySelectorAll("*").forEach((node) => {
  node.style.backgroundImage = "none";
  node.style.boxShadow = "none";
  node.style.filter = "none";
  node.style.backdropFilter = "none";
  node.style.color = "#111827";
  node.style.backgroundColor = "#ffffff";
  node.style.borderColor = "#e5e7eb";

  const computedStyle = window.getComputedStyle(node);

  if (
    computedStyle.background.includes("oklab") ||
    computedStyle.background.includes("oklch") ||
    computedStyle.color.includes("oklab") ||
    computedStyle.color.includes("oklch")
  ) {
    node.style.background = "#ffffff";
    node.style.color = "#111827";
  }
});

   const canvas = await html2canvas(clonedElement, {
  scale: 1,
  useCORS: true,
  allowTaint: true,
  logging: false,
  backgroundColor: "#ffffff",
  foreignObjectRendering: false,
  ignoreElements: (element) => {
    return (
      element.tagName === "IMG" ||
      element.tagName === "SVG" ||
      element.classList.contains("lucide")
    );
  },
});

    document.body.removeChild(clonedElement);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`${tripData.destination || "trip"}-plan.pdf`);

    toast.success("PDF downloaded successfully");
  } catch (error) {
    console.log(error);
    toast.error("Failed to generate PDF");
  }
};

  const handleSharePlan = async () => {
    try {
      const shareText = `Check out my ${
        tripData.destination || ""
      } travel plan for ${tripData.days || ""} days`;

      if (navigator.share) {
        await navigator.share({
          title: "My Travel Plan",
          text: shareText,
          url: window.location.href,
        });

        toast.success("Trip shared successfully");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Trip link copied");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to share trip");
    }
  };

  const handleRegeneratePlan = async () => {
    const token = getAuthToken();

    if (!token) {
      toast.error("Please login to continue");
      return;
    }

    if (!tripData?.destination) {
      toast.error("No trip data found to regenerate");
      return;
    }

    try {
      setShowAiLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/trip/generate",
        {
          destination: tripData.destination,
          days: Number(tripData.days),
          budget: tripData.budget,
          travelers: tripData.travelers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("tripResult", JSON.stringify(response.data));
      toast.success("Trip plan regenerated successfully!");
      
      window.dispatchEvent(new Event("storage"));
      
      setTimeout(() => {
        setShowAiLoading(false);
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error.response?.data);
      console.log(error);
      setShowAiLoading(false);

      if (error.response?.status === 401) {
        clearAuthData();
        toast.error(
          error.response?.data?.message || "Please login to continue"
        );
        window.location.href = "/login";
        return;
      }

      toast.error(error.response?.data?.message || "Failed to regenerate trip");
    }
  };

  const actions = [
    {
      label: tripData?.isSaved ? "Saved Trip" : "Save Trip",
      icon: Save,
      onClick: handleSaveTrip,
      className:
        tripData?.isSaved
          ? "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300"
          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600",
      iconBg: tripData?.isSaved
        ? "bg-emerald-100 text-emerald-600"
        : "bg-indigo-100 text-indigo-600",
    },
    {
      label: "Download PDF",
      icon: Download,
      onClick: handleDownloadPDF,
      className:
        "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-emerald-200 hover:text-emerald-600",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Share Plan",
      icon: Share2,
      onClick: handleSharePlan,
      className:
        "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-pink-200 hover:text-pink-600",
      iconBg: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-14"
      >
        <div className="overflow-hidden rounded-[34px] border border-white/20 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                <Sparkles className="h-4 w-4" />
                Trip Actions
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Manage Your Travel Plan
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-500">
                Save your itinerary, download it as a PDF, share it with friends,
                or regenerate the trip for more personalized suggestions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {actions.map((action, index) => {
                const Icon = action.icon;

                return (
                  <motion.button
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.onClick}
                    className={`group flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold shadow-lg transition-all duration-300 ${action.className}`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${action.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span>{action.label === "Save Trip" && isSaving ? "Saving..." : action.label}</span>
                  </motion.button>
                );
              })}

              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRegeneratePlan}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xl">
                    <RefreshCcw className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
                  </div>

                  <span>Regenerate Plan</span>

                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {showAiLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-lg px-4">
          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/10 p-8 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(99,102,241,0.35)] animate-in fade-in zoom-in duration-500">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
              <Plane className="h-10 w-10 text-white animate-spin" />
            </div>

            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-1">
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
    </>
  );
};

export default ActionButtons;
