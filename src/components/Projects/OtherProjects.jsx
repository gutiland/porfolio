import React from 'react'
import { otherProjects } from '../../data/projects'
import './OtherProjects.scss'

export default function OtherProjects() {
  return (
    <section className="other-projects" aria-labelledby="other-projects-title">
      <h2 id="other-projects-title">Otros proyectos</h2>
      <p className="other-projects-intro">
        Ejercicios de frontend y maquetaci?n que completan mi recorrido.
      </p>

      <div className="other-projects-grid">
        {otherProjects.map((project) => (
          <article
            className="other-project-card"
            key={project.id}
            aria-labelledby={project.id + '-title'}
          >
            {project.image ? (
              <img
                className="other-project-image"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />
            ) : (
              <div className="other-project-summary">
                <span className="other-project-category">{project.category}</span>
                <p>React ? Rutas ? Formularios</p>
                <span>Proyecto disponible en GitHub</span>
              </div>
            )}

            <div className="other-project-content">
              <h3 id={project.id + '-title'}>{project.title}</h3>
              <p>{project.description}</p>

              <ul
                className="other-project-technologies"
                aria-label="Tecnolog?as utilizadas"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="other-project-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Ver demo
                    <span className="other-project-sr-only">de {project.title}</span>
                    
                  </a>
                )}
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  Ver código
                  <span className="other-project-sr-only">de {project.title}</span>
                 
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
