import { Workflow, Puzzle, Plug, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { REPO_API } from '../data/site.js'

const CAPABILITIES = [
  {
    icon: Workflow,
    title: 'Automate workflows',
    body: 'Script batch operations, procedural geometry, and table-driven part variants against a deterministic API.',
  },
  {
    icon: Puzzle,
    title: 'Build add-ins',
    body: 'Extend Oblikovati with custom tools and commands. Add-ins use the same documented contract as built-in modules.',
  },
  {
    icon: Plug,
    title: 'Integrate external systems',
    body: 'Connect Oblikovati to PDM, ERP, BIM, and simulation pipelines through a stable, versioned interface.',
  },
]

export default function Extensibility() {
  return (
    <section
      id="extensibility"
      className="border-y border-ink-700/70 bg-ink-900/60 py-20 sm:py-28"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Extensibility"
          title="Built for automation and integration"
          lede="Oblikovati provides a documented automation API under the Apache-2.0 license. Automate tasks, write add-ins, and connect external engineering systems."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon
            return (
              <Reveal key={cap.title} delay={index * 80}>
                <article className="surface-card h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded border border-ink-700 bg-ink-800 text-signal-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-400">{cap.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={160}>
          <div className="surface-card mt-8 flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-slatey-100">
                Apache-2.0 public contract
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                The public API is permissively licensed and versioned independently.
                Your add-ins and integrations remain under your control.
              </p>
            </div>
            <a
              href={REPO_API}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-none"
            >
              Read API Reference
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
