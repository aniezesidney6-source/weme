"use client";

import { LogoMark } from "./LogoMark";
import { PillButton } from "./PillButton";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1340px] items-center justify-between px-5 py-6 sm:px-8 sm:py-7 lg:px-12">
        {/* logo */}
        <a href="#" className="flex items-center gap-1.5" aria-label="WEME home">
          <LogoMark />
          <span className="text-metal font-francois text-[32px] leading-none tracking-[-0.05em] sm:text-[39px]">
            WEME
          </span>
        </a>

        {/* CTA — full label on desktop, MENU on mobile */}
        <div className="hidden sm:block">
          <PillButton>Book Your Free Intro Call</PillButton>
        </div>
        <div className="sm:hidden">
          <PillButton size="compact">MENU</PillButton>
        </div>
      </nav>
    </header>
  );
}
