import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { STATS_BASE } from '../data/site.js'

// Stats is the public installation-base page (#/stats). It reads the aggregated metrics the
// stats.oblikovati.org service serves and renders the headline install count plus a set of
// distribution breakdowns. Telemetry is anonymous and opt-out; this page only ever shows
// aggregates, never a single machine.
export default function Stats() {
  const { metrics, state } = useMetrics()
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <>
      <Header />
      <main id="main" className="py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Installation base"
            title="Who runs Oblikovati"
            lede="Anonymous, opt-out usage statistics shared by Oblikovati installs. No personal data — just the platforms, hardware and add-ins the community runs."
          />
          <div className="mt-14">
            <StatsBody metrics={metrics} state={state} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

// StatsBody switches between the loading, error, empty and loaded views.
function StatsBody({ metrics, state }) {
  if (state === 'loading') return <Notice>Loading the latest figures…</Notice>
  if (state === 'error') {
    return <Notice>Statistics are unavailable right now. Please check back later.</Notice>
  }
  if (!metrics || metrics.totalInstalls === 0) {
    return <Notice>No installations have reported in yet — check back soon.</Notice>
  }
  return <Breakdowns metrics={metrics} />
}

// Breakdowns lays out the headline number and every distribution card.
function Breakdowns({ metrics }) {
  return (
    <div className="space-y-12">
      <Headline total={metrics.totalInstalls} />
      <div className="grid gap-6 md:grid-cols-2">
        <Distribution title="Operating systems" items={metrics.byOS} />
        <Distribution title="Architectures" items={metrics.byArch} />
        <Distribution title="Oblikovati versions" items={metrics.byAppVersion} />
        <Distribution title="Popular add-ins" items={metrics.popularAddIns} empty="No add-ins reported yet." />
        <Distribution title="Memory" items={metrics.ramBuckets} />
        <Distribution title="CPU cores" items={metrics.cpuCoreBuckets} />
        <Distribution title="Storage" items={metrics.storageBuckets} />
        <Distribution title="Vulkan / MoltenVK" items={metrics.byVulkanVersion} />
        <Distribution title="Graphics adapters" items={metrics.byGPU} />
      </div>
    </div>
  )
}

// Headline renders the total install count as the page's hero figure.
function Headline({ total }) {
  return (
    <Reveal className="surface-card px-6 py-10 text-center">
      <div className="text-5xl font-bold tracking-tight text-slatey-100 sm:text-6xl">
        {total.toLocaleString()}
      </div>
      <div className="mt-2 font-mono text-2xs font-medium uppercase tracking-label text-signal-soft">
        Reporting installations
      </div>
    </Reveal>
  )
}

// Distribution renders one labelled horizontal bar chart from a [{label,count}] slice, each
// bar scaled to the largest count so the relative split reads at a glance.
function Distribution({ title, items, empty = 'No data yet.' }) {
  const rows = items ?? []
  const max = rows.reduce((m, r) => Math.max(m, r.count), 0)
  return (
    <Reveal className="surface-card p-6">
      <h3 className="text-lg font-semibold text-slatey-100">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-slatey-400">{empty}</p>
      ) : (
        <ul className="mt-5 space-y-3">
          {rows.map((row) => (
            <Bar key={row.label} label={row.label} count={row.count} max={max} />
          ))}
        </ul>
      )}
    </Reveal>
  )
}

// Bar is one row of a Distribution: label, a proportional fill, and the count.
function Bar({ label, count, max }) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="truncate text-slatey-200">{label}</span>
        <span className="font-mono text-xs text-slatey-400">{count.toLocaleString()}</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-ink-800">
        <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${pct}%` }} />
      </div>
    </li>
  )
}

// Notice is the centered single-line state message shared by loading/error/empty.
function Notice({ children }) {
  return (
    <Reveal className="surface-card px-6 py-16 text-center text-slatey-300">{children}</Reveal>
  )
}

// useMetrics fetches the aggregated metrics once on mount, exposing a loading/error/loaded
// state machine so the view can render gracefully without the data.
function useMetrics() {
  const [metrics, setMetrics] = useState(null)
  const [state, setState] = useState('loading')
  useEffect(() => {
    let live = true
    fetch(`${STATS_BASE}/metrics`, { headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`metrics: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!live) return
        setMetrics(data)
        setState('loaded')
      })
      .catch(() => {
        if (live) setState('error')
      })
    return () => {
      live = false
    }
  }, [])
  return { metrics, state }
}
