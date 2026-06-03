/* Muted partner marks. Rendered at 50% opacity to match the spec. */

function GitHub() {
  return (
    <span className="flex items-center gap-2 text-[#1a1a1a]">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      <span className="text-[24px] font-bold tracking-[-0.02em]">GitHub</span>
    </span>
  );
}

function Vercel() {
  return (
    <span className="flex items-center gap-2 text-[#1a1a1a]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2 24 22H0z" />
      </svg>
      <span className="text-[24px] font-bold tracking-[-0.03em]">Vercel</span>
    </span>
  );
}

function LinkedIn() {
  return (
    <span className="flex items-center text-[#1a1a1a]">
      <span className="text-[24px] font-bold tracking-[-0.02em]">Linked</span>
      <span className="ml-0.5 flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#1a1a1a] text-[16px] font-bold lowercase text-canvas">
        in
      </span>
    </span>
  );
}

function CalDotCom() {
  return (
    <span className="flex items-center text-[#1a1a1a]">
      <span className="text-[24px] font-bold tracking-[-0.03em]">Cal.com</span>
    </span>
  );
}

export function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-50 sm:gap-x-14">
      <GitHub />
      <Vercel />
      <LinkedIn />
      <CalDotCom />
    </div>
  );
}
