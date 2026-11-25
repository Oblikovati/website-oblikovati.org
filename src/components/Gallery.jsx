import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const SHOTS = [
  {
    src: '/shots/motor-assembly.png',
    w: 1106,
    h: 607,
    alt: 'Electric motor assembly with a slotted steel stator, segmented magnet ring, and brass rotor core in the 3D viewport.',
    title: 'Multi-component assemblies',
    body: 'Model the stator, rotor, and magnets as separate parts. Position them coaxially and assign distinct materials for clear visual inspection.',
  },
  {
    src: '/shots/motor-assembly-app.png',
    w: 1440,
    h: 900,
    alt: 'Oblikovati Assemble workspace displaying the model browser with Stator, Rotor, and Magnets beside the shaded motor assembly.',
    title: 'Structured product hierarchy',
    body: 'Manage components in the model browser. Ground, suppress, and pattern occurrences while tracking quantities in a live bill of materials.',
  },
  {
    src: '/shots/motor-drawing.png',
    w: 1440,
    h: 900,
    alt: 'Oblikovati Drawing workspace showing an ISO A3 sheet with orthographic and isometric views of the motor stator and a title block.',
    title: 'Associative engineering drawings',
    body: 'Project orthographic and isometric views onto standard sheets, add dimensions, and export to DXF. Views update automatically when the 3D model changes.',
  },
]

export default function Gallery() {
  return (
    <section id="examples" className="py-20 sm:py-28">
      <div className="container-content">
        <SectionHeading
          eyebrow="Worked example"
          title="From individual parts to documented assemblies"
          lede="Follow an electric motor design through three stages: part modeling, coaxial assembly with materials, and ISO A3 drawing documentation."
        />

        <div className="mt-14 space-y-8">
          {SHOTS.map((shot, index) => (
            <Reveal key={shot.src} delay={(index % 2) * 80}>
              <article className="grid items-center gap-8 lg:grid-cols-2">
                <figure
                  className={`overflow-hidden rounded-md border border-ink-700 bg-ink-950 shadow-panel ${
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
