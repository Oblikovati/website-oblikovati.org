import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { FAQ_ITEMS } from '../data/faq.js'

function FaqRow({ item, isOpen, onToggle, panelId, buttonId }) {
  return (
    <div className="surface-card overflow-hidden">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-semibold text-slatey-100">
            {item.q}
          </span>
          <span className="flex-none text-signal-soft" aria-hidden="true">
            {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="px-6 pb-6"
      >
        <p className="leading-relaxed text-slatey-400">{item.a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="border-t border-ink-800/80 bg-ink-900/40 py-20 sm:py-28"
    >
      <div className="container-content">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <FaqRow
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
                buttonId={`faq-btn-${index}`}
                panelId={`faq-panel-${index}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
