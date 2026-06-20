import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

// A worked example tells the story the feature grid can't: one design taken from separate
// parts, to an assembly, to a documented drawing. Every image is a live capture from the app.
const SHOTS = [
  {
    src: '/shots/motor-assembly.png',
    w: 1106,
    h: 607,
    alt: 'An electric-motor assembly: a steel stator with teeth, a gold rotor and a ring of orange magnets, each component shaded in its own material.',
    title: 'Assemblies that read as assemblies',
    body: 'Stator, rotor and magnets are separate parts, placed coaxially and each given its own material and appearance — so at a glance it is obvious what is what.',
  },
  {
    src: '/shots/motor-assembly-app.png',
    w: 1440,
    h: 900,
    alt: 'The assembly open in Oblikovati: a component browser listing Stator, Rotor and Magnets beside the shaded motor in the viewport.',
    title: 'A real product structure',
    body: 'Components live in a browser you can select, ground, suppress and pattern, with a live bill of materials that reflects structure and quantities.',
  },
  {
    src: '/shots/motor-drawing.png',
    w: 1440,
    h: 900,
    alt: 'An A3 drawing sheet documenting the stator with front, top, right and isometric views, a border and a title block.',
    title: 'Documented, not redrawn',
    body: 'Generate associative views onto a titled sheet, dimension them, and export to DXF — the drawing tracks the model it came from.',
  },
]

export default function Gallery() {
  return (
    <section id="examples" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Worked example"
          title="From separate parts to a documented assembly"
          lede="One design — a small electric motor — taken the whole way through Oblikovati: three parts modeled, assembled with distinct materials, and put on a drawing. Every image below is a live capture from the application."
        />

        <div className="mt-14 space-y-6">
          {SHOTS.map((shot, index) => (
            <Reveal key={shot.src} delay={(index % 2) * 100}>
              <article className="grid items-center gap-8 lg:grid-cols-2">
                <figure
                  className={`overflow-hidden rounded-xl border border-ink-800/80 bg-ink-950 shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/5 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={shot.src}
                    width={shot.w}
                    height={shot.h}
                    alt={shot.alt}
                    className="w-full"
                    loading="lazy"
                  />
                </figure>
                <div className={`lg:px-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl font-semibold text-slatey-100">{shot.title}</h3>
                  <p className="mt-3 leading-relaxed text-slatey-400">{shot.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
