import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

// Compact, recognizable OS marks drawn inline so we add no logo dependencies.
function LinuxMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2 0-3 1.7-3 4 0 1.2.3 2 .3 3-.6.8-2 2.4-2.8 4.4-.7 1.7-1.6 3-2.2 3.6-.6.6-.4 1.4.3 1.6.5.2.4.8.8 1.2.5.5 1.4.3 2-.1.6.4 1.6.7 2.6.7s2-.3 2.6-.7c.6.4 1.5.6 2 .1.4-.4.3-1 .8-1.2.7-.2.9-1 .3-1.6-.6-.6-1.5-1.9-2.2-3.6-.8-2-2.2-3.6-2.8-4.4 0-1 .3-1.8.3-3 0-2.3-1-4-3-4zm-1.4 5.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm2.8 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zM12 10.2c.7 0 1.6.5 1.6 1 0 .3-.7.7-1.6.7s-1.6-.4-1.6-.7c0-.5.9-1 1.6-1z" />
    </svg>
  )
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8s-1.7-.8-2.9-.8c-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.2.8-1.2 1.2-2.4 1.2-2.5 0 0-2.3-.9-2.3-3.6zM14.2 6.1c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z" />
    </svg>
  )
}

function WindowsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M3 5.4l7.6-1v7.2H3V5.4zm0 13.2l7.6 1v-7.1H3v6.1zM11.5 4.3L21 3v8.6h-9.5V4.3zm0 8.4H21V21l-9.5-1.3v-7z" />
    </svg>
  )
}

const PLATFORMS = [
  {
    name: 'Linux',
    Mark: LinuxMark,
    body: 'A true native experience on the OS commercial CAD vendors keep ignoring — no virtual machines, no compromises.',
  },
  {
    name: 'macOS',
    Mark: AppleMark,
    body: 'Run the same parametric workflow on your Mac, with native performance and a consistent feature set.',
  },
  {
    name: 'Windows',
    Mark: WindowsMark,
    body: 'First-class on Windows too, so mixed teams share one tool, one file format and one workflow.',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Cross-platform"
          title="One CAD application. Every desktop."
          lede="Linux, macOS and Windows are all first-class targets — pick the OS that fits your team, not the one your software forces on you."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLATFORMS.map((platform, index) => {
            const { Mark } = platform
            return (
              <Reveal key={platform.name} delay={index * 100}>
                <article className="surface-card flex h-full flex-col items-center p-8 text-center">
                  <span className="text-signal-soft">
                    <Mark />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slatey-100">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-400">
                    {platform.body}
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
