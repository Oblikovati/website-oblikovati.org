/**
 * Abstract parametric/wireframe motif for the hero. Pure SVG — a sketched
 * profile (with dimension annotations + constraint glyphs) feeding an extruded
 * isometric solid, styled with the Oblikovati 3D Viewport & Geometry palette
 * (Indigo-Violet modified solid, Crisp Teal selection/constraints, Warm Amber
 * work/construction geometry). Decorative only, hidden from assistive tech.
 */
export default function ParametricVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-lg bg-signal/10 blur-3xl" />
      <svg
        viewBox="0 0 460 420"
        className="w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
        fill="none"
      >
        <defs>
          <linearGradient id="hvEdge" x1="0" y1="0" x2="460" y2="420">
            <stop offset="0" stopColor="#8172FA" />
            <stop offset="1" stopColor="#2DD4BF" />
          </linearGradient>
          <linearGradient id="hvFaceTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#272B35" />
            <stop offset="1" stopColor="#1F222A" />
          </linearGradient>
          <linearGradient id="hvFaceSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#181A20" />
            <stop offset="1" stopColor="#121317" />
          </linearGradient>
          <linearGradient id="hvFaceAccent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2E2859" />
            <stop offset="1" stopColor="#1E1A3B" />
          </linearGradient>
        </defs>

        {/* Faint base sketch plane grid */}
        <g stroke="#22252E" strokeWidth="1">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`gx${i}`} x1={40 + i * 48} y1="40" x2={40 + i * 48} y2="380" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`gy${i}`} x1="40" y1={40 + i * 48} x2="376" y2={40 + i * 48} />
          ))}
        </g>

        {/* Extruded isometric solid */}
        <g strokeLinejoin="round">
          {/* Top face */}
          <path
            d="M150 150 L300 110 L390 165 L240 205 Z"
            fill="url(#hvFaceTop)"
            stroke="url(#hvEdge)"
            strokeWidth="2"
          />
          {/* Left graphite face */}
          <path
            d="M150 150 L240 205 L240 320 L150 265 Z"
            fill="url(#hvFaceSide)"
            stroke="url(#hvEdge)"
            strokeWidth="2"
          />
          {/* Right Indigo-Violet signature face */}
          <path
            d="M240 205 L390 165 L390 280 L240 320 Z"
            fill="url(#hvFaceAccent)"
            stroke="url(#hvEdge)"
            strokeWidth="2"
            opacity="0.95"
          />
          {/* Parametric bore / work axis reference */}
          <ellipse
            cx="270"
            cy="158"
            rx="34"
            ry="14"
            stroke="#F59E0B"
            strokeWidth="1.75"
            strokeDasharray="4 4"
          />
        </g>

        {/* 2D sketch profile floating below, with constraints + dimension */}
        <g>
          <path
            d="M70 350 L150 350 L150 300 L120 300"
            stroke="#2DD4BF"
            strokeWidth="2"
            fill="none"
          />
          {/* Dimension line */}
          <g stroke="#7C8496" strokeWidth="1">
            <line x1="70" y1="368" x2="150" y2="368" />
            <line x1="70" y1="362" x2="70" y2="374" />
            <line x1="150" y1="362" x2="150" y2="374" />
          </g>
          <text
            x="92"
            y="386"
            fill="#ECEEF2"
            fontSize="12"
            fontFamily="'JetBrains Mono', monospace"
          >
            80.00 mm
          </text>
          {/* Constraint glyphs (perpendicular + coincident) */}
          <rect x="142" y="342" width="8" height="8" stroke="#8172FA" fill="none" />
          <circle cx="120" cy="300" r="3.5" fill="#2DD4BF" />
          <circle cx="70" cy="350" r="3.5" fill="#2DD4BF" />
        </g>

        {/* Picked vertex highlights on the solid (Crisp Teal selection) */}
        <g fill="#2DD4BF">
          <circle cx="300" cy="110" r="3.5" />
          <circle cx="390" cy="165" r="3.5" />
          <circle cx="150" cy="150" r="3.5" />
          <circle cx="240" cy="320" r="3.5" />
        </g>
      </svg>
    </div>
  )
}
