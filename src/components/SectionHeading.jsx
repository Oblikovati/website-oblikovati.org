import Reveal from './Reveal.jsx'

/**
 * Consistent eyebrow + title + lede block used to open most sections.
 * Centered by default; pass align="left" for asymmetric layouts.
 */
export default function SectionHeading({ eyebrow, title, lede, align = 'center' }) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-slatey-100 sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-base leading-relaxed text-slatey-300 sm:text-lg">
          {lede}
        </p>
      )}
    </Reveal>
  )
}
