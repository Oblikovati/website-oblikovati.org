import { useEffect, useState } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { Wordmark } from './Logo.jsx'
import { NAV_LINKS, REPO_APP } from '../data/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink-700/70 bg-ink-950/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="rounded-md" aria-label="Oblikovati home">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-2xs font-medium uppercase tracking-label text-slatey-300 transition-colors hover:text-slatey-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={REPO_APP}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            View on GitHub
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slatey-200 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-ink-700/70 bg-ink-950/95 backdrop-blur-md md:hidden"
        >
          <div className="container-content flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 font-mono text-xs font-medium uppercase tracking-label text-slatey-200 hover:bg-ink-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={REPO_APP}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn-primary mt-2"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
