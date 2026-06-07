import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

const FAMILIAR_POINTS = [
  'A history-based feature tree you can edit, reorder and roll back at any point.',
  'Sketch-driven geometry: constrained 2D & 3D profiles that drive your solids.',
  'Parameters and relations, so a single dimension change ripples through the model.',
  'The same mental model — components, work geometry, materials — minimal relearning.',
]

export default function Positioning() {
  return (
    <section className="border-y border-ink-800/80 bg-ink-900/40 py-20 sm:py-24">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">For seasoned engineers</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slatey-100 sm:text-4xl">
            If you&apos;ve spent years in Inventor, SolidWorks or NX, you&apos;ll
            feel at home.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slatey-300">
            Oblikovati is built around the parametric, feature-based workflow
            professional designers already trust. There is no new paradigm to
            learn — just the modeling discipline you know, on an open foundation
            that runs where your team works.
          </p>
          <p className="mt-4 leading-relaxed text-slatey-400">
            No per-seat licensing treadmill. No subscription that holds your work
            hostage. The tool — and the files you make with it — stay yours.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="space-y-4">
            {FAMILIAR_POINTS.map((point) => (
              <li key={point} className="surface-card flex gap-4 p-5">
                <span
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-signal/15 text-signal-soft"
                  aria-hidden="true"
                >
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-slatey-200">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
