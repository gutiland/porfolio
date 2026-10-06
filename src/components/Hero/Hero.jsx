import './Hero.scss'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="title">
      <div className="eyebrow">
        <span className="dot" /> EN BUSCA DE MI PRIMERA OPORTUNIDAD
      </div>
      <h1 id="title">
        Alejandro
        <br />
        Gutiérrez
        <br />
        Moreno
      </h1>
      <div className="hero-bottom">
        <p>
          Creo interfaces con <strong>React y JavaScript</strong> y desarrollo
          aplicaciones full stack con Node.js y MongoDB. Busco incorporarme a un equipo
          donde aportar y seguir creciendo.
        </p>
        <a className="button dark" href="#proyecto">
          Explorar mi trabajo <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-meta">
        <span>FRONTEND / FULL STACK JUNIOR</span>
        <span>REMOTO · CÁDIZ · MURCIA</span>
      </div>
    </section>
  )
}
