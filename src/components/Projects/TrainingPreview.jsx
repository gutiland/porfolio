import './TrainingPreview.scss'
import React from 'react'

export default function TrainingPreview({ image, imageAlt }) {
  return (
    <figure className="training-preview">
      <img src={image} alt={imageAlt} loading="lazy" />
      <figcaption> {imageAlt} </figcaption>
    </figure>
  )
}
