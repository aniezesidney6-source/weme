"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { CardColor } from "@/lib/cards";
import { CARD_ASPECT } from "@/lib/cards";

/* ---- colour fills (subtle gradient gives the cards depth) ---- */
const FILLS: Record<CardColor, string> = {
  green: "linear-gradient(160deg, #38C079 0%, #1F9E54 100%)",
  red: "linear-gradient(160deg, #F06A6A 0%, #DC4747 100%)",
  yellow: "linear-gradient(160deg, #F7CF5C 0%, #E9B636 100%)",
  blue: "linear-gradient(160deg, #4C8DF2 0%, #2168D8 100%)",
  black: "linear-gradient(160deg, #2C2C32 0%, #202024 100%)",
};

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface UnoCardProps {
  color: CardColor;
  /** entrance order (drives the stagger delay) */
  index: number;
  /** resting rotation in deg */
  rotate: number;
  /** base stacking order */
  z: number;
  /** absolute position + size, all as % of the parent stage */
  left?: number;
  top?: number;
  width?: number;
  /** disables absolute positioning (used for the standalone mobile card) */
  standalone?: boolean;
  className?: string;
}

export function UnoCard({
  color,
  index,
  rotate,
  z,
  left,
  top,
  width,
  standalone = false,
  className = "",
}: UnoCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`${standalone ? "" : "absolute"} cursor-pointer select-none ${className}`}
      style={{
        ...(standalone
          ? {}
          : {
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}%`,
            }),
        aspectRatio: `${CARD_ASPECT}`,
        zIndex: hovered ? 60 : z,
        containerType: "inline-size",
      }}
      initial={{ opacity: 0, y: 70, rotate }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        delay: 0.15 + index * 0.14,
        duration: 0.7,
        ease: easeOutExpo,
      }}
      whileHover={{
        y: -34,
        scale: 1.05,
        transition: { duration: 0.4, ease: easeOutExpo },
      }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[6.5%] border border-[#D2D2D2]"
        style={{ background: FILLS[color] }}
        animate={{
          boxShadow: hovered
            ? "0px 34px 55px -14px rgba(20,24,10,0.45), 0px 10px 20px -8px rgba(20,24,10,0.3)"
            : "0px 6px 14px -8px rgba(20,24,10,0.18)",
        }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
      >
        {color === "black" ? <DrawFourFace /> : <NumberFace />}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Faces — sized in container-query width units (cqw) so the artwork   */
/* scales perfectly with whatever size the card renders at.            */
/* ------------------------------------------------------------------ */

function NumberFace() {
  return (
    <div className="font-inter slashed-zero text-uno-face">
      {/* centre numeral */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none"
        style={{ fontSize: "57cqw" }}
      >
        0
      </span>
      {/* top-left */}
      <span
        className="absolute leading-none"
        style={{ top: "7cqw", left: "9cqw", fontSize: "17cqw" }}
      >
        0
      </span>
      {/* bottom-right */}
      <span
        className="absolute leading-none"
        style={{ bottom: "7cqw", right: "9cqw", fontSize: "17cqw" }}
      >
        0
      </span>
    </div>
  );
}

function DrawFourFace() {
  // Four overlapping mini-card outlines (the +4 wild symbol), centred in the
  // card: red top-left, blue top-right, green bottom-left, yellow bottom-right.
  // x / y are in cqw (% of card width); the card is ~141cqw tall, so a vertical
  // centre near ~71cqw places the cluster in the middle.
  const minis = [
    { color: "#EB5757", x: 37, y: 54, r: -8 }, // red — top-left
    { color: "#2F80ED", x: 52, y: 56, r: 9 }, // blue — top-right
    { color: "#27AE60", x: 31, y: 63, r: -6 }, // green — bottom-left
    { color: "#F2C94C", x: 46, y: 65, r: 7 }, // yellow — bottom-right
  ];

  return (
    <div className="font-inter text-uno-face">
      {/* +4 top-left */}
      <span
        className="absolute leading-none tracking-[-0.05em]"
        style={{ top: "7cqw", left: "9cqw", fontSize: "17cqw" }}
      >
        +4
      </span>
      {/* +4 bottom-right */}
      <span
        className="absolute leading-none tracking-[-0.05em]"
        style={{ bottom: "7cqw", right: "9cqw", fontSize: "17cqw" }}
      >
        +4
      </span>

      {/* centre cluster of mini cards */}
      {minis.map((m, i) => (
        <span
          key={i}
          className="absolute rounded-[2.5cqw]"
          style={{
            left: `${m.x}cqw`,
            top: `${m.y}cqw`,
            width: "16cqw",
            height: "23cqw",
            border: `1.4cqw solid ${m.color}`,
            transform: `rotate(${m.r}deg)`,
          }}
        />
      ))}
    </div>
  );
}