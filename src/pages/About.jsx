import React from 'react';
import { AboutContainer } from '../styles.js'; // Importando estilos

export function About() {
  return (
    <AboutContainer>
      <h1>Sobre Nós</h1>
      <p>
        O <strong>INECS (Instituto Nacional de Educação Comunitária Social e Sindical)</strong> é uma organização comprometida com o desenvolvimento social e a inclusão através de projetos e cursos que capacitam e transformam vidas.
      </p>

      <h2>História</h2>
      <p>
        O INECS foi fundado com o objetivo de transformar a visão do problema do ensino em uma visão oficial, ou seja, em uma visão de Estado. Nosso método de massificação baseia-se no registro de informações e em dois tipos de aprendizagem:
      </p>
      <ul>
        <li>
          <strong>Aprendizagem Ativa:</strong> Com motivação intrínseca, onde a pessoa busca por sua própria estimulação interna para alcançar objetivos.
        </li>
        <li>
          <strong>Aprendizagem Induzida:</strong> Com motivação extrínseca, onde estímulos ambientais provocam respostas no organismo.
        </li>
      </ul>

      <h2>Missão</h2>
      <p>
        Nossa missão é promover a inclusão social e o desenvolvimento sustentável através de projetos e cursos que capacitam jovens e adultos em situação de vulnerabilidade, preparando-os para o mercado de trabalho e para a vida em sociedade.
      </p>

      <h2>Visão</h2>
      <p>
        Queremos ser reconhecidos como uma instituição de referência na área de educação comunitária e social, transformando vidas e comunidades através de iniciativas inovadoras e sustentáveis.
      </p>

      <h2>Metodologia de Ensino</h2>
      <p>
        Nossa metodologia é baseada em:
      </p>
      <ul>
        <li>
          <strong>Massificação:</strong> Utilizamos métodos que permitem alcançar um grande número de pessoas, garantindo que o conhecimento seja acessível a todos.
        </li>
        <li>
          <strong>Motivação Intrínseca e Extrínseca:</strong> Trabalhamos com estímulos internos e externos para garantir que os alunos se engajem e alcancem seus objetivos.
        </li>
      </ul>

      <h2>Diretoria</h2>
      <p>
        Nossa equipe é composta por profissionais experientes e comprometidos com a causa social:
      </p>
      <ul>
        <li>
          <strong>Prof. MSc Carlos Magno Salustiano:</strong> Diretor Presidente, professor federal aposentado, projetista e auditor com vasta experiência em segmentos públicos, sociais, sindicais, marítimos e religiosos.
        </li>
        <li>
          <strong>Jorge Alberto de Barros:</strong> Diretor Administrativo, técnico em meio ambiente e administrador, com atuação na coordenação de municípios pela CEDAE e fundador do Sindicato do Meio Ambiente RJ/Niterói.
        </li>
        <li>
          <strong>Prof. Claudia Cristina de Barros:</strong> Professora e especialista em soluções e eventos, contribuindo com sua expertise para o desenvolvimento de nossos projetos.
        </li>
      </ul>
    </AboutContainer>
  );
}