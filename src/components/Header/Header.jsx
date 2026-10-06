import './Header.scss'
import React from 'react'

export default function Header() {
  return (
    <header className="nav wrap">
      <a className="brand" href="#" aria-label="Alejandro Gutiérrez Moreno">
        AGM<span>.</span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#proyecto">Proyecto</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">
          Contacto <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
