import { Zap, Cpu, MousePointerClick } from 'lucide-react'
import Reveal from './Reveal.jsx'

const POINTS = [
  {
    icon: Zap,
    title: 'Fast where it counts',
    body: 'Built from the ground up on a modern foundation, so big models stay responsive and edits feel instant.',
  },
  {
    icon: Cpu,
    title: 'GPU-accelerated',
    body: 'Smooth, fluid 3D interaction — orbit, zoom and edit complex assemblies without fighting your viewport.',
  },
  {
    icon: MousePointerClick,
    title: 'Built for flow',
    body: 'A clean, focused interface that keeps you in the work instead of hunting through menus.',
  },
]

export default function Foundation() {
  return (
    <section className="relative overflow-hidden border-y border-ink-800/80 bg-ink-900/40 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="container-content grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">Modern foundation</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slatey-100 sm:text-4xl">
            New foundations, not legacy baggage
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slatey-300">
            Oblikovati was engineered from scratch for today&apos;s hardware. The
            result is a CAD application that stays fast and fluid — so your
            attention stays on the design, not on waiting.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {POINTS.map((point, index) => {
            const Icon = point.icon
            return (
              <Reveal key={point.title} delay={index * 90}>
                <article className="surface-card h-full p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10 text-signal-soft ring-1 ring-inset ring-signal/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slatey-100">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                    {point.body}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
