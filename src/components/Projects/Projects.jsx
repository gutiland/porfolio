import './Projects.scss'
import React from 'react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import TrainingPreview from './TrainingPreview'
import OtherProjects from './OtherProjects'

export default function Projects() {
  return (
    <section id="proyecto" className="project-section">
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow">01 / PROYECTO DESTACADO</span>
          <span className="small">Del concepto a una aplicación</span>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}>
            {project.id === 'clases-a-tu-ritmo' && (
              <TrainingPreview image={project.image} imageAlt={project.imageAlt} />
            )}
          </ProjectCard>
        ))}
        <OtherProjects />
      </div>
    </section>
  )
}
