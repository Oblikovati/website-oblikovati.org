import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { FEATURES } from '../data/features.js'

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="Parametric modeling from sketch to drawing"
          lede="History-driven mechanical design tools structured for precision, repeatability, and manufacturable output."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 4) * 60}>
              <article className="surface-card group h-full p-6 transition-colors duration-100 hover:border-signal/50">
                <span className="flex h-11 w-11 items-center justify-center rounded border border-ink-700 bg-ink-800 transition-colors group-hover:border-signal/40">
                  <img
                    src={feature.icon}
                    alt=""
                    width="24"
                    height="24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slatey-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
