import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const CALLOUTS = [
  'Sketch-driven solids: extrude constrained profiles into base geometry and join secondary features.',
  'Dress-up operations: apply parametric fillets and chamfers directly to solid edges.',
  'Placed holes: define drilled, counterbored, countersunk, and tapped holes from standard catalogs.',
  'Materials and shading: assign metallic appearances with physically based shading and ground shadows.',
]

export default function Showcase() {
  return (
    <section id="showcase" className="border-y border-ink-700/70 bg-ink-900/60 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Part modeling"
          title="Deterministic B-rep solid geometry"
          lede="Build machined parts from constrained sketches, parametric features, and placed holes with exact boundary representation."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <figure className="overflow-hidden rounded-md border border-ink-700 bg-ink-950 shadow-panel">
              <img
                src="/shots/part-bracket.png"
                width="1099"
                height="611"
                alt="Machined metallic bracket with a raised boss, filleted vertical edges, and a central through hole in the 3D viewport."
                className="w-full"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-4">
              {CALLOUTS.map((line) => (
                <li key={line} className="surface-card p-5 text-sm leading-relaxed text-slatey-200">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
