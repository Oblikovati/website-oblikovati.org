import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { FEATURES } from '../data/features.js'

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything you need to model real parts"
          lede="A complete, history-driven modeling toolset — designed so the work you do translates directly into manufacturable, maintainable designs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={(index % 4) * 80}>
                <article className="surface-card group h-full p-6 transition-colors duration-300 hover:border-signal/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal-soft ring-1 ring-inset ring-signal/20 transition-colors group-hover:bg-signal/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-slatey-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                    {feature.body}
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
