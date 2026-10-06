import './About.scss'
import React from 'react'

export default function About() {
  return (
    <section id="sobre-mi" className="about wrap">
      <div>
        <span className="eyebrow">03 / SOBRE MÍ</span>
        <h2>
          Construir.
          <br />
          Entender.
          <br />
          <em>Mejorar.</em>
        </h2>
      </div>
      <div className="about-copy">
        <p className="lead">
          Mi trayectoria comenzó en el sector deportivo, como entrenador personal, monitor
          de clases colectivas y director de centros deportivos. En esas etapas aprendí a
          escuchar, coordinar equipos y asumir la responsabilidad de que el trabajo salga
          adelante.
        </p>
        <p>
          En 2025 decidí orientar mi carrera hacia el desarrollo web. Ahora aplico esa
          experiencia al aprendizaje técnico y a la construcción de aplicaciones con React
          y JavaScript. Mi proyecto Clases a tu ritmo conecta ambas etapas: desarrollo una
          herramienta para un entorno que conozco de primera mano.
        </p>
        <div className="skills">
          <div>
            <span>INTERFAZ</span>
            <p>HTML · CSS / SCSS · JavaScript · React · TypeScript</p>
          </div>
          <div>
            <span>SERVIDOR Y DATOS</span>
            <p>Node.js · Express · MongoDB · Mongoose</p>
          </div>
          <div>
            <span>DISPONIBILIDAD</span>
            <p>
              Remoto desde España · Cádiz · Murcia
              <br />
              Abierto a equipos internacionales en inglés
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
