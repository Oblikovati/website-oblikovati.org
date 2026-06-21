import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Stats from './components/Stats.jsx'
import './index.css'

// The site is a single marketing page plus a standalone /stats view. Rather than pull in a
// router dependency, we switch on the URL hash: "#/stats" shows the installation-base stats,
// everything else (including in-page anchors like "#features") shows the landing page.
function isStatsRoute() {
  return window.location.hash.replace(/^#/, '').startsWith('/stats')
}

function Root() {
  const [stats, setStats] = useState(isStatsRoute())
  useEffect(() => {
    const onHashChange = () => setStats(isStatsRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return stats ? <Stats /> : <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
