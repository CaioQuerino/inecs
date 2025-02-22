import React from 'react';
import { ProjectCard } from '../components/ProjectCard.jsx';
import image1 from '../assets/limpeza_rio_1.png'; // Importando a primeira imagem
import image2 from '../assets/limpeza_rio_2.png'; // Importando a segunda imagem
import image3 from '../assets/hamburgueres_do_mar.png'; // Importando a segunda imagem
import { ProjectsContainer, ProjectsTitle } from '../styles.js'; // Importando estilos

export function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Limpeza dos Rios',
      description: 'Projeto de limpeza e recuperação de rios na Baixada Fluminense.',
      images: [image1, image2], // Adicionando as imagens ao projeto
    },
    {
      id: 2,
      name: 'Hambúrgueres do Mar',
      description: 'Projeto de capacitação de jovens na área de gastronomia com foco em produtos do mar.',
      images: [image3], // Adicionando a imagem ao projeto
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>Nossos Projetos</ProjectsTitle>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  );
}