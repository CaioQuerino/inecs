import React from 'react';
import { CoursesContainer, CourseImage, CourseList } from '../styles.js';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../styles.js';
import cursoImage from '../assets/cursos.png'; // Importando a imagem

export function Courses() {
  const courses = [
    { id: 1, name: 'Cuidador de Idosos', description: 'Curso de capacitação para cuidadores de idosos.' },
    { id: 2, name: 'Processamento de Pescado', description: 'Curso de processamento de pescado para jovens da comunidade.' },
    { id: 3, name: 'Bombeiro Civil Mirim', description: 'Projeto social para formação de bombeiros civis mirins.' },
    { id: 4, name: 'Eletricistas para Mulheres', description: 'Curso de eletricistas voltado para mulheres em situação de vulnerabilidade.'},
  ];

  return (
    <CoursesContainer>
      <CourseImage src={cursoImage} alt="Informações sobre cursos" />
      <CourseList>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </CourseList>

      <Link target='_blank' to="https://www.facebook.com/">
        <SubmitButton>Veja nossos cursos</SubmitButton>
      </Link>
    </CoursesContainer>
  );
}