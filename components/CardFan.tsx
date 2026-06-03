"use client";

import { motion } from "framer-motion";
import { FAN_CARDS } from "@/lib/cards";
import { UnoCard } from "./UnoCard";
import { CloudSticker } from "./CloudSticker";

export function CardFan() {
  return (
    <div className="w-full">
      {/* ---------------- Desktop / tablet: full fan ---------------- */}
      <div className="relative mx-auto hidden w-full max-w-[1180px] md:block">
        <div
          className="relative w-full"
          style={{ aspectRatio: "1264 / 480" }}
        >
          {FAN_CARDS.map((card, i) => (
            <UnoCard
              key={card.id}
              color={card.color}
              index={i}
              rotate={card.rotate}
              z={card.z}
              left={card.left}
              top={card.top}
              width={18.9}
            />
          ))}

          {/* cloud sticker perched on the top-right edge of the +4 card */}
          <motion.div
            className="pointer-events-none absolute z-[70] animate-floaty"
            style={{ left: "86.5%", top: "-7%", width: "13%" }}
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.05, type: "spring", stiffness: 220, damping: 14 }}
          >
            <CloudSticker className="h-auto w-full" />
          </motion.div>
        </div>
      </div>

      {/* ---------------- Mobile: single +4 card ---------------- */}
      <div className="relative mx-auto flex h-[440px] w-full max-w-[360px] items-center justify-center md:hidden">
        <div className="relative w-[78%]">
          <UnoCard
            color="black"
            index={0}
            rotate={4.51}
            z={5}
            standalone
          />
          <motion.div
            className="pointer-events-none absolute -top-[20%] right-[-6%] z-[70] w-[34%] animate-floaty"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 220, damping: 14 }}
          >
            <CloudSticker className="h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}