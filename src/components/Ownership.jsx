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
          title="Transparent by design, yours to keep"
          lede="Oblikovati is fully open source. You can read it, build it, fork it and contribute to it — and nobody can take that away or lock it behind a paywall."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <article className="surface-card h-full p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal-soft ring-1 ring-inset ring-signal/20">
                <Scale className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                Clear, honest licensing
              </h3>
              <p className="mt-2 leading-relaxed text-slatey-400">
                The application is licensed under{' '}
                <span className="font-medium text-slatey-200">GPL-2.0</span>, and
                the public automation API under the permissive{' '}
                <span className="font-medium text-slatey-200">Apache-2.0</span>{' '}
                license — so you can build on the contract freely.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="surface-card h-full p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal-soft ring-1 ring-inset ring-signal/20">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slatey-100">
                No lock-in, ever
              </h3>
              <p className="mt-2 leading-relaxed text-slatey-400">
                No subscriptions, no per-seat licenses, no vendor that can strand
                your data. Your designs live in an open, diff-able format you
                control.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={REPO_APP} target="_blank" rel="noreferrer" className="btn-primary">
              <Github className="h-4 w-4" aria-hidden="true" />
              Contribute on GitHub
            </a>
            <a href={REPO_API} target="_blank" rel="noreferrer" className="btn-secondary">
              View the API repository
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-slatey-500">
            Oblikovati is in active, early development. Star the repository to
            follow along and help shape where it goes.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
