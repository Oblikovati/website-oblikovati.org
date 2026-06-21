// Single source of truth for external links and brand strings.
// Keeping these here avoids scattering URLs across components.

export const REPO_APP = 'https://github.com/Oblikovati/Oblikovati'
export const REPO_API = 'https://github.com/Oblikovati/Oblikovati.API'

// Base URL of the installation-base telemetry service that backs the /stats page.
// Overridable at build time (VITE_STATS_BASE) so a local instance can be targeted.
export const STATS_BASE = import.meta.env.VITE_STATS_BASE || 'https://stats.oblikovati.org'

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '#examples' },
  { label: 'Extensibility', href: '#extensibility' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Stats', href: '#/stats' },
]
