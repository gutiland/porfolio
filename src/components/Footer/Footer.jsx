import './Footer.scss'
import React from 'react'

export default function Footer() {
  return (
    <footer className="wrap">
      <span> © {new Date().getFullYear()} Alejandro Gutiérrez Moreno</span>
      <span>Hecho con React y SCSS</span>
      <a href="#">Volver arriba ↑</a>
    </footer>
  )
}
