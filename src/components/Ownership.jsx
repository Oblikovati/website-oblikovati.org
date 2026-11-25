import { ShieldCheck, Github, Scale } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { REPO_APP, REPO_API } from '../data/site.js'

export default function Ownership() {
  return (
    <section id="open-source" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Open source"
          title="Transparent source, permanent access"
          lede="Read, build, audit, and modify the complete codebase. Oblikovati uses standard open-source licenses with no feature paywalls."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <article className="surface-card h-full p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded border border-ink-700 bg-ink-800 text-signal-soft">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                Clear dual-boundary licensing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                The application is licensed under{' '}
                <span className="font-medium text-slatey-200">GPL-2.0</span>.
                The public automation API is licensed under{' '}
                <span className="font-medium text-slatey-200">Apache-2.0</span>{' '}
                for permissive add-in development.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="surface-card h-full p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded border border-ink-700 bg-ink-800 text-signal-soft">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                No vendor lock-in
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                No subscriptions and no per-seat license fees. Designs are stored
                in an open, inspectable format under your control.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={REPO_APP} target="_blank" rel="noreferrer" className="btn-primary">
              <Github className="h-4 w-4" aria-hidden="true" />
              View Source on GitHub
            </a>
            <a href={REPO_API} target="_blank" rel="noreferrer" className="btn-secondary">
              View API Repository
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-slatey-400">
            Oblikovati is alpha software under active development. Follow progress
            and report issues on GitHub.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
