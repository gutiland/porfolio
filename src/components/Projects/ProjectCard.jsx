import './ProjectCard.scss'
import React from 'react'

export default function ProjectCard({ project, children }) {
  const caseId = project.id === 'clases-a-tu-ritmo' ? 'caso' : project.id + '-caso'

  return (
    <article aria-labelledby={project.id + '-title'}>
      <div className="project-grid">
        <div className="project-copy">
          <span className="tag">{project.category}</span>
          <h2 id={project.id + '-title'}>
            {project.titleLines.map((line, index) => (
              <React.Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
            <span>.</span>
          </h2>
          <p>{project.description}</p>
          {project.vision && (
            <div className="project-vision">
              <h3>La idea y su evolución</h3>
              <p>{project.vision}</p>
            </div>
          )}
          <div className="chips">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <a
            className="button dark"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Explorar la aplicación <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver código en GitHub <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={'#' + caseId}>
            Conocer las decisiones del proyecto ↓
          </a>
        </div>
        {children}
      </div>
      <div id={caseId} className="case-grid">
        {project.decisions.map((decision, index) => (
          <article key={decision.id}>
            <span className="number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{decision.title}</h3>
            <p>{decision.description}</p>
          </article>
        ))}
      </div>
    </article>
  )
}
