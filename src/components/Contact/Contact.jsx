import './Contact.scss'
import React from 'react'

export default function Contact() {
  return (
    <section id="contacto" className="contact wrap">
      <span className="eyebrow">04 / CONTACTO</span>
      <h2>
        Hablemos de lo
        <br />
        que viene <em>después.</em>
      </h2>
      <p>Busco una oportunidad junior en frontend o full stack.</p>
      <div className="contact-links">
        <a className="button dark" href="mailto:gutierrealem@gmail.com">
          Escríbeme <span aria-hidden="true">↗</span>
        </a>
        <a
          className="contact-link"
          href="https://github.com/gutiland"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/alejandro-gutiérrez-moreno"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          className="contact-link"
          href="/cv/alejandro-gutierrez-moreno-cv.pdf"
          download
        >
          Descargar CV <span aria-hidden="true">↓</span>
        </a>
      </div>
      <p className="contact-email">gutierrealem@gmail.com</p>
    </section>
  )
}
