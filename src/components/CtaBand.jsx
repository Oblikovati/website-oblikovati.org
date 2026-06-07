import { ArrowRight, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { REPO_APP, REPO_API } from '../data/site.js'

export default function CtaBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-signal/25 bg-ink-850/80 p-10 text-center shadow-glow sm:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
            />
            <h2 className="text-3xl font-bold tracking-tight text-slatey-100 sm:text-4xl">
              Shape your ideas. Own your tools.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slatey-300">
              Open-source professional CAD that runs where you work and bends to
              your process. Dive into the code and help build it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={REPO_APP} target="_blank" rel="noreferrer" className="btn-primary">
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </a>
              <a href={REPO_API} target="_blank" rel="noreferrer" className="btn-secondary">
                Explore the API
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
