import React from 'react'
import './Experience.scss'

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="experience wrap"
      aria-labelledby="experience-title"
    >
      <div className="experience-heading">
        <span className="eyebrow">02 / EXPERIENCIA PROFESIONAL</span>
        <h2 id="experience-title">
          Aprender en un
          <br />
          <em>equipo real.</em>
        </h2>
      </div>

      <article className="experience-card" aria-labelledby="experience-role">
        <p className="experience-company">Talentfyseek</p>
        <h3 id="experience-role">Desarrollo web · Prácticas</h3>

        <p className="experience-period">
          <time dateTime="2025-06">Junio</time>-
          <time dateTime="2025-10">octubre de 2025</time> · 300 horas
        </p>

        <p>
          Participé en el desarrollo de un ecommerce y de Nexion Academy, trabajando
          principalmente en frontend con React y TypeScript. También realicé ajustes con
          apoyo en un backend existente con Laravel.
        </p>

        <p>
          Mis tareas evolucionaron desde funcionalidades de subida de archivos hasta la
          participación en la integración de pagos con Stripe.
        </p>

        <ul
          className="experience-technologies"
          aria-label="Tecnologías utilizadas en las prácticas"
        >
          <li>React</li>
          <li>TypeScript</li>
          <li>Laravel · con apoyo</li>
          <li>PHP · con apoyo</li>
        </ul>
      </article>
    </section>
  )
}
