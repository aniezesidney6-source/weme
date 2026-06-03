"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  onClick?: () => void;
  /** compact = mobile "MENU" size; default = full CTA size */
  size?: "default" | "compact";
  className?: string;
}

/**
 * Glossy pink pill. Reproduces the spec's double-layer build:
 * an outer ring (lighter pink) wrapping an inner gradient face
 * (#FF59D1 -> #FDB9EA) with inset top-highlight / bottom-shadow.
 */
export function PillButton({
  children,
  onClick,
  size = "default",
  className = "",
}: PillButtonProps) {
  const pad = size === "compact" ? "px-5 py-[11px]" : "px-8 py-5";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group rounded-pill p-1 ${className}`}
      style={{
        background: "#FDB9EA",
        boxShadow:
          "inset 0px -1px 2px rgba(255,255,255,0.6), inset 0px 2px 2px rgba(0,0,0,0.1)",
      }}
    >
      <span
        className={`flex items-center justify-center rounded-pill ${pad}`}
        style={{
          background:
            "linear-gradient(351.66deg, #FF59D1 7.28%, #FDB9EA 93.58%)",
          boxShadow:
            "inset 0px 1px 2px rgba(255,255,255,0.6), inset 0px -2px 2px rgba(0,0,0,0.1)",
        }}
      >
        <span className="font-tight text-[18px] font-medium leading-none tracking-[-0.03em] text-pink-text">
          {children}
        </span>
      </span>
    </motion.button>
  );
}
