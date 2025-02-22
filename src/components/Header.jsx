import React from 'react';
import { HeaderStyle, Logo } from '../styles.js';
import logo from '../assets/inecs_logo.png'; // Ajuste o caminho conforme necessário

export function Header() {
  return (
    <HeaderStyle>
        <Logo src={logo} alt="Logo da INECS" />
        <p>Transformando vidas através de projetos e cursos</p>
    </HeaderStyle>
  );
}