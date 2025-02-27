import React from 'react';
import { Link } from 'react-router-dom'; // Importando o Link para navegação interna
import { HomeContainer, SubmitButton } from '../styles.js'; // Importando estilos
import { SpeedInsights } from "@vercel/speed-insights/next"


export function Home() {
  return (
    <HomeContainer>
      <SpeedInsights />

      <h1>Bem-vindo ao INECS - Instituto de Desenvolvimento Social</h1>
      <p>
        O INECS está comprometido com o desenvolvimento social e a inclusão através de diversos projetos e cursos que visam transformar vidas e comunidades.
      </p>
      <h2>Nossos Destaques</h2>
      <ul>
        <li>
          <strong>Projetos Sociais:</strong> Desenvolvemos iniciativas como a limpeza de rios, capacitação de jovens, e projetos de reflorestamento.
        </li>
        <li>
          <strong>Cursos Profissionalizantes:</strong> Oferecemos cursos como "Cuidador de Idosos", "Eletricistas para Mulheres" e "Processamento de Pescado".
        </li>
        <li>
          <strong>Inclusão Social:</strong> Trabalhamos para incluir jovens e adultos em situação de vulnerabilidade no mercado de trabalho.
        </li>
      </ul>
      <p>
        Explore nosso site para conhecer mais sobre nossos projetos e cursos, e descubra como você pode fazer parte dessa transformação.
      </p>
      
      <Link to="/courses">
        <SubmitButton>Nossos Cursos</SubmitButton>
      </Link>

    </HomeContainer>
  );
}