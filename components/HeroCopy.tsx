"use client";

import { motion } from "framer-motion";

const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroCopy() {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center gap-8 px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOutExpo }}
        className="font-cal text-[clamp(2.5rem,7vw,3.75rem)] font-normal leading-[1] tracking-[-0.02em] text-ink"
      >
        Give Your ideas a glow up.{" "}
        <br className="hidden md:block" />
        Meet your new AI creative{" "}
        <br className="hidden md:block" />
      <span
  className="bg-highlight inline-flex items-center align-middle px-2"
  style={{ height: "0.867em", lineHeight: 1 }}
>
  collaborator.
</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.7, ease: easeOutExpo }}
        className="max-w-[490px] text-[clamp(1rem,2vw,1.375rem)] font-normal leading-[1.5] text-muted"
      >
        Capture, organize, and elevate your ideas across work, life and leisure
      </motion.p>
    </div>
  );
}