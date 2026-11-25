/**
 * Oblikovati Brand Mark ("The Isometric Form") — precision-machined 30-deg
 * isometric hexagonal prism forming a geometric "O" with an internal recessed
 * parametric cutout (Design/assets/brand/oblikovati-mark.svg).
 */
export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Oblikovati Brand Mark"
      fill="none"
    >
      {/* Top chamfered isometric frame facet */}
      <polygon
        points="16,3 27.26,9.5 20.76,13.25 16,10.5 11.24,13.25 4.74,9.5"
        fill="#ECEEF2"
        stroke="#181B22"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Left structural graphite flank */}
      <polygon
        points="4.74,9.5 11.24,13.25 11.24,18.75 16,21.5 16,29 4.74,22.5"
        fill="#677084"
        stroke="#181B22"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Right extruded Indigo-Violet brand signature flank */}
      <polygon
        points="27.26,9.5 27.26,22.5 16,29 16,21.5 20.76,18.75 20.76,13.25"
        fill="#8172FA"
        stroke="#181B22"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Internal recessed parametric aperture facets (reversed void lighting) */}
      <polygon
        points="16,10.5 20.76,13.25 16,16 11.24,13.25"
        fill="#3A404F"
        opacity="0.9"
      />
      <polygon
        points="11.24,13.25 16,16 16,21.5 11.24,18.75"
        fill="#5948D4"
        opacity="0.88"
      />
      <polygon
        points="20.76,13.25 20.76,18.75 16,21.5 16,16"
        fill="#5B6375"
        opacity="0.72"
      />
      {/* Crisp inner hexagon contour */}
      <polygon
        points="16,10.5 20.76,13.25 20.76,18.75 16,21.5 11.24,18.75 11.24,13.25"
        fill="none"
        stroke="#181B22"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Logo />
      <span className="font-display text-lg font-semibold tracking-tightest text-slatey-100">
        Oblikovati
      </span>
      <span className="rounded border border-ink-700 bg-ink-800 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.06em] text-signal">
        MCAD
      </span>
    </span>
  )
}
