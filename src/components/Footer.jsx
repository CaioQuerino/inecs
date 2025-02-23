import React from 'react';
import { FooterContainer, NavLink } from '../styles.js'; // Importando estilos
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 INECS - Instituto de Desenvolvimento Social. Todos os direitos reservados.</p>
      <p>Contato: contato@inecs.org.br | <NavLink><Link target='_blank' to='https://wa.me/55981910324'>(21) 98191-0324</Link></NavLink> | Av. Beira Mar, 262, Grupo 203, </p> 
    </FooterContainer>
  );
}