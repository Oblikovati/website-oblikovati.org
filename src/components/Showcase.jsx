import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

// Real, in-app capabilities visible in (or directly behind) the rendered part. Each line is a
// shipped feature, framed as a takeaway rather than a spec.
const CALLOUTS = [
  'Sketch-driven solids: a constrained profile extruded into a base, then a second boss unioned on top.',
  'Dress-up features: every vertical corner rounded with a parametric fillet, edges chamfered on demand.',
  'Placed holes: drilled, counterbored, countersunk and tapped — sized from a standards catalog.',
  'Materials & appearance: assign a metal style and present the model with ground shadows and PBR shading.',
]

export default function Showcase() {
  return (
    <section id="showcase" className="border-y border-ink-800/80 bg-ink-900/40 py-20 sm:py-24">
      <div className="container-content">
        <SectionHeading
          eyebrow="Modeled in Oblikovati"
          title="Real geometry, rendered by the real engine"
          lede="This part was modeled and shaded entirely in Oblikovati — base plate, boss, filleted corners and a through hole — then presented with a material and ground shadows. No mock-ups."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <figure className="overflow-hidden rounded-xl border border-ink-800/80 bg-ink-950 shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/5">
              <img
                src="/shots/part-bracket.png"
                width="1099"
                height="611"
                alt="A brass-shaded machined bracket with rounded corners and a through hole, rendered on a shadowed ground plane."
                className="w-full"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-4">
              {CALLOUTS.map((line) => (
                <li key={line} className="surface-card p-5 text-slatey-200">
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
