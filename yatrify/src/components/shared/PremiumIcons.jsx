import React from "react";
import { motion } from "framer-motion";

/**
 * Premium Logo component.
 * Brand mark backed by the shared logo artwork.
 */
export const PremiumLogo = () => {
  return (
    <motion.div
      className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[18px] bg-slate-50 shadow-[0_10px_30px_rgba(124,58,237,0.28)] ring-1 ring-white/15"
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      aria-hidden="true"
    >
      <motion.img
        src="/logo.png"
        alt=""
        className="h-full w-full object-cover"
        draggable="false"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 280, damping: 16 }}
      />
    </motion.div>
  );
};

/**
 * Premium Dashboard Icon.
 * Custom SVG of LayoutDashboard that responds to hover.
 * The 4 panels spring expand outward from the center.
 */
export const PremiumDashboardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2.5 shrink-0"
    >
      {/* Top Left panel */}
      <motion.rect
        x="3"
        y="3"
        width="7"
        height="9"
        rx="1.5"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: -1.8, y: -1.8, scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 14 }}
      />
      {/* Top Right panel */}
      <motion.rect
        x="14"
        y="3"
        width="7"
        height="5"
        rx="1.5"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: 1.8, y: -1.8, scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 14 }}
      />
      {/* Bottom Left panel */}
      <motion.rect
        x="3"
        y="16"
        width="7"
        height="5"
        rx="1.5"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: -1.8, y: 1.8, scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 14 }}
      />
      {/* Bottom Right panel */}
      <motion.rect
        x="14"
        y="12"
        width="7"
        height="9"
        rx="1.5"
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: 1.8, y: 1.8, scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 14 }}
      />
    </svg>
  );
};

/**
 * Premium Create Trip Icon.
 * Custom vector plus that rotates 90 degrees and expands on hover.
 */
export const PremiumCreateTripIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2.5 shrink-0"
    >
      <motion.line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 90, scale: 1.15 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        variants={{
          initial: { rotate: 0, scale: 1 },
          hover: { rotate: 90, scale: 1.15 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </svg>
  );
};

/**
 * Premium Avatar Component.
 * Glow border initials container with a dynamic breathing drop shadow
 * and a pulsing live active green online status dot.
 */
export const PremiumAvatar = ({ name }) => {
  const initial = name?.charAt(0).toUpperCase() || "Y";

  return (
    <div className="relative shrink-0">
      <motion.div
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-sm font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.25)] select-none"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 450, damping: 16 }}
      >
        {/* Soft breathing halo backdrop */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full bg-indigo-500 opacity-0 blur-md"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: { opacity: 0.5, scale: 1.3 }
          }}
          transition={{ duration: 0.3 }}
        />

        <span>{initial}</span>
      </motion.div>

      {/* Online indicator dot with a pulse effect */}
      <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
      </span>
    </div>
  );
};

/**
 * Premium Logout Icon.
 * Custom exit door and arrow where the arrow slides right on hover.
 */
export const PremiumLogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2.5 shrink-0"
    >
      {/* Exit Door Frame */}
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      {/* Arrow sliding right */}
      <motion.g
        variants={{
          initial: { x: 0 },
          hover: { x: 4.5 }
        }}
        transition={{ type: "spring", stiffness: 350, damping: 12 }}
      >
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </motion.g>
    </svg>
  );
};
