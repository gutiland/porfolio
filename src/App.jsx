import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
