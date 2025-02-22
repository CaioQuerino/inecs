import React from 'react';
import { Card, ProjectImage } from '../styles.js'; // Importando estilos

export function ProjectCard({ project }) {
  return (
    <Card>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {project.images && project.images.map((image, index) => (
        <ProjectImage key={index} src={image} alt={`Imagem do projeto ${project.name}`} />
      ))}
    </Card>
  );
}