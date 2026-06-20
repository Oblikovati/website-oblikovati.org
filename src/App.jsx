import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Positioning from './components/Positioning.jsx'
import Showcase from './components/Showcase.jsx'
import Features from './components/Features.jsx'
import Extensibility from './components/Extensibility.jsx'
import Platforms from './components/Platforms.jsx'
import Foundation from './components/Foundation.jsx'
import Ownership from './components/Ownership.jsx'
import Faq from './components/Faq.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Positioning />
        <Showcase />
        <Features />
        <Extensibility />
        <Platforms />
        <Foundation />
        <Ownership />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
