import { ArrowRight, Github } from 'lucide-react'
import { REPO_APP, REPO_API } from '../data/site.js'

const PLATFORMS = ['Linux', 'macOS', 'Windows']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint engineering grid + radial wash behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="container-content grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">Open-source parametric CAD</span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slatey-100 sm:text-5xl lg:text-6xl">
            Shape your ideas.
            <br />
            <span className="text-gradient">Own your tools.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slatey-300">
            Oblikovati is a professional, parametric, feature-based mechanical
            CAD application — the history-driven workflow you already know, made
            fully open source and native on every desktop you actually use.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={REPO_APP} target="_blank" rel="noreferrer" className="btn-primary">
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={REPO_API} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github className="h-4 w-4" aria-hidden="true" />
              Explore the API
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slatey-400">
            <span className="font-medium text-slatey-300">Runs natively on</span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {PLATFORMS.map((os) => (
                <li key={os} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-soft" aria-hidden="true" />
                  {os}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-float-soft">
          <figure className="overflow-hidden rounded-xl border border-ink-800/80 bg-ink-900/60 shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/5">
            <img
              src="/shots/app-modeling.png"
              width="1440"
              height="900"
              alt="The Oblikovati application: a ribbon of modeling tools, a parametric feature tree (Extrusion, Fillet, Hole) and a machined bracket shaded in the 3D viewport."
              className="w-full"
              loading="eager"
            />
          </figure>
          <p className="mt-3 text-center text-xs text-slatey-500">
            A live capture of Oblikovati — feature tree, modeling ribbon and shaded viewport.
          </p>
        </div>
      </div>
    </section>
  )
}
