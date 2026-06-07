import { Workflow, Puzzle, Plug, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { REPO_API } from '../data/site.js'

const CAPABILITIES = [
  {
    icon: Workflow,
    title: 'Automate your workflows',
    body: 'Script the repetitive parts of your process — batch operations, generated geometry, design-table driven variants — and let the machine do the tedium.',
  },
  {
    icon: Puzzle,
    title: 'Build add-ins',
    body: 'Extend the application with your own tools and commands. The same documented contract powers everything, so add-ins are first-class, not bolted on.',
  },
  {
    icon: Plug,
    title: 'Integrate with anything',
    body: 'Connect Oblikovati to PDM, ERP, simulation or your own internal systems. An open, stable API means your integrations keep working.',
  },
]

export default function Extensibility() {
  return (
    <section
      id="extensibility"
      className="border-y border-ink-800/80 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="container-content">
        <SectionHeading
          eyebrow="Open & extensible"
          title="Mold the tool to your process"
          lede="Oblikovati ships with a documented automation API under the permissive Apache-2.0 license — the public contract that lets anyone automate, extend and integrate, with no gatekeeping."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CAPABILITIES.map((cap, index) => {
            const Icon = cap.icon
            return (
              <Reveal key={cap.title} delay={index * 100}>
                <article className="surface-card h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal-soft ring-1 ring-inset ring-signal/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                    {cap.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slatey-400">{cap.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200}>
          <div className="surface-card mt-8 flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h3 className="text-lg font-semibold text-slatey-100">
                The API is Apache-2.0. The contract is yours to build on.
              </h3>
              <p className="mt-2 leading-relaxed text-slatey-400">
                Because the public API is permissively licensed and openly
                documented, what you build on top of Oblikovati can never be
                paywalled out from under you.
              </p>
            </div>
            <a
              href={REPO_API}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-none"
            >
              Read the API
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
