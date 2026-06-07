/**
 * Abstract parametric/wireframe motif for the hero. Pure SVG — a sketched
 * profile (with dimension annotations + constraint glyphs) feeding an extruded
 * isometric solid, evoking the sketch -> feature workflow without faking a
 * product screenshot. Decorative only, hidden from assistive tech.
 */
export default function ParametricVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-signal/10 blur-3xl" />
      <svg
        viewBox="0 0 460 420"
        className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        fill="none"
      >
        <defs>
          <linearGradient id="hvEdge" x1="0" y1="0" x2="460" y2="420">
            <stop offset="0" stopColor="#5eead4" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="hvFaceTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#173a4d" />
            <stop offset="1" stopColor="#0e2536" />
          </linearGradient>
          <linearGradient id="hvFaceSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#102230" />
            <stop offset="1" stopColor="#0a1622" />
          </linearGradient>
        </defs>

        {/* faint base sketch plane grid */}
        <g stroke="#1c2c44" strokeWidth="1">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`gx${i}`} x1={40 + i * 48} y1="40" x2={40 + i * 48} y2="380" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`gy${i}`} x1="40" y1={40 + i * 48} x2="376" y2={40 + i * 48} />
          ))}
        </g>

        {/* extruded isometric solid */}
        <g strokeLinejoin="round">
          {/* top face */}
          <path
            d="M150 150 L300 110 L390 165 L240 205 Z"
            fill="url(#hvFaceTop)"
            stroke="url(#hvEdge)"
            strokeWidth="2.5"
          />
          {/* left face */}
          <path
            d="M150 150 L240 205 L240 320 L150 265 Z"
            fill="url(#hvFaceSide)"
            stroke="url(#hvEdge)"
            strokeWidth="2.5"
          />
          {/* right face */}
          <path
            d="M240 205 L390 165 L390 280 L240 320 Z"
            fill="url(#hvFaceSide)"
            stroke="url(#hvEdge)"
            strokeWidth="2.5"
            opacity="0.92"
          />
          {/* a parametric bore through the top face */}
          <ellipse
            cx="270"
            cy="158"
            rx="34"
            ry="14"
            stroke="url(#hvEdge)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </g>

        {/* 2D sketch profile floating below, with constraints + dimension */}
        <g>
          <path
            d="M70 350 L150 350 L150 300 L120 300"
            stroke="#5eead4"
            strokeWidth="2"
            fill="none"
          />
          {/* dimension line */}
          <g stroke="#7e92ac" strokeWidth="1">
            <line x1="70" y1="368" x2="150" y2="368" />
            <line x1="70" y1="362" x2="70" y2="374" />
            <line x1="150" y1="362" x2="150" y2="374" />
          </g>
          <text x="98" y="385" fill="#a9bace" fontSize="13" fontFamily="monospace">
            80.0
          </text>
          {/* constraint glyphs (perpendicular + coincident) */}
          <rect x="142" y="342" width="8" height="8" stroke="#38bdf8" fill="none" />
          <circle cx="120" cy="300" r="4" fill="#5eead4" />
          <circle cx="70" cy="350" r="4" fill="#5eead4" />
        </g>

        {/* vertex highlights on the solid */}
        <g fill="#38bdf8">
          <circle cx="300" cy="110" r="4" />
          <circle cx="390" cy="165" r="4" />
          <circle cx="150" cy="150" r="4" />
          <circle cx="240" cy="320" r="4" />
        </g>
      </svg>
    </div>
  )
}
