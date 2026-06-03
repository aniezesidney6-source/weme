export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 23 36"
      fill="none"
      aria-hidden
      className={className}
      style={{ width: 23, height: 36 }}
    >
      <defs>
        <linearGradient id="bolt-a" x1="0" y1="0" x2="0" y2="36">
          <stop offset="0" stopColor="#111111" />
          <stop offset="1" stopColor="#444444" />
        </linearGradient>
        <linearGradient id="bolt-b" x1="0" y1="36" x2="23" y2="0">
          <stop offset="0.07" stopColor="#000000" />
          <stop offset="0.94" stopColor="#D4D4D8" />
        </linearGradient>
      </defs>
      {/* back plate of the bolt */}
      <path
        d="M13.2 0 0 20.4h8.1L6.4 36 23 13.9h-9.1L18.6 0z"
        fill="url(#bolt-a)"
      />
      {/* front highlight */}
      <path
        d="M14 0.6 3.6 19.7h7.4L9.4 33.9 21.1 14.6h-8.2L17.8 0.6z"
        fill="url(#bolt-b)"
      />
    </svg>
  );
}
