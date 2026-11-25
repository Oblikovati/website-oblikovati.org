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
          <span className="eyebrow">Open-source parametric MCAD</span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-slatey-100 sm:text-5xl lg:text-6xl">
            Shape with precision.
            <br />
            <span className="text-gradient">Own your tools.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slatey-300">
            Oblikovati is open-source, parametric, feature-based mechanical CAD
            software. It delivers a deterministic history-driven workflow with
            native performance on Linux, macOS, and Windows.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={REPO_APP} target="_blank" rel="noreferrer" className="btn-primary">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={REPO_API} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github className="h-4 w-4" aria-hidden="true" />
              Explore API
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slatey-400">
            <span className="font-medium text-slatey-300">Native platforms</span>
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

        <div>
          <figure className="overflow-hidden rounded-md border border-ink-700 bg-ink-900 shadow-panel">
            <img
              src="/shots/app-modeling.png"
              width="1440"
              height="900"
              alt="Oblikovati workspace showing the 3D Model ribbon, parametric model browser, Extrude properties panel, and a machined bracket in the 3D viewport."
              className="w-full"
              loading="eager"
            />
          </figure>
          <p className="mt-3 text-center font-mono text-xs text-slatey-400">
            Oblikovati workspace: parametric model browser, ribbon, and 3D viewport.
          </p>
        </div>
      </div>
    </section>
  )
}
