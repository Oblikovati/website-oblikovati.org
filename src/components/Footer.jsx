import { Github } from 'lucide-react'
import { Wordmark } from './Logo.jsx'
import { NAV_LINKS, REPO_APP, REPO_API } from '../data/site.js'

const RESOURCE_LINKS = [
  { label: 'Application (GitHub)', href: REPO_APP, external: true },
  { label: 'Automation API (GitHub)', href: REPO_API, external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="container-content py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slatey-400">
              Open-source parametric, feature-based CAD. Shape your ideas — own
              your tools.
            </p>
          </div>

          <nav aria-label="Sections">
            <h2 className="text-sm font-semibold text-slatey-200">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slatey-400 transition-colors hover:text-slatey-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2 className="text-sm font-semibold text-slatey-200">Project</h2>
            <ul className="mt-4 space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slatey-400 transition-colors hover:text-slatey-100"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-ink-800/80 pt-8">
          <p className="text-xs leading-relaxed text-slatey-500">
            Autodesk&reg; Inventor&reg;, SolidWorks&reg;, and Siemens NX&reg; are
            trademarks of their respective owners and are referenced for
            identification only. Oblikovati is not affiliated with or endorsed by
            them.
          </p>
          <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slatey-500">&copy; 2026 Oblikovati</p>
            <p className="text-sm text-slatey-500">
              Application: GPL-2.0 &middot; API: Apache-2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
