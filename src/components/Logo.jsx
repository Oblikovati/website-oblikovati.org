/**
 * Inline brand mark: an isometric cube wireframe (the parametric "O" of
 * Oblikovati) with accent vertices. Inlined as JSX so it inherits currentColor
 * paths via the shared gradient and needs no extra HTTP request.
 */
export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      role="img"
      aria-label="Oblikovati logo"
      fill="none"
    >
      <defs>
        <linearGradient
          id="obkLogoGrad"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <path
        d="M20 4 L34 12 L20 20 L6 12 Z"
        stroke="url(#obkLogoGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 12 L20 20 L20 36 L6 28 Z"
        stroke="url(#obkLogoGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M34 12 L20 20 L20 36 L34 28 Z"
        stroke="url(#obkLogoGrad)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <circle cx="20" cy="4" r="2" fill="#5eead4" />
      <circle cx="34" cy="12" r="2" fill="#38bdf8" />
      <circle cx="6" cy="12" r="2" fill="#38bdf8" />
      <circle cx="20" cy="36" r="2" fill="#38bdf8" />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo />
      <span className="text-lg font-bold tracking-tight text-slatey-100">
        Oblikovati
      </span>
    </span>
  )
}
