import React, { useState } from 'react';
import { NavbarContainer, NavLink, HamburgerIcon, MobileMenu } from '../styles.js';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <NavbarContainer>
      {/* Ícone do menu hamburguer */}
      <HamburgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerIcon>

      {/* Menu tradicional (desktop) */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projetos</NavLink>
      <NavLink to="/courses">Cursos</NavLink>
      <NavLink to="/about">Sobre Nós</NavLink>
      <NavLink to="/contact">Contato</NavLink>
      <NavLink to="/redes">Redes sociais</NavLink>

      {/* Menu móvel (hamburguer) */}
      <MobileMenu isOpen={isOpen}>
        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/projects" onClick={toggleMenu}>Projetos</NavLink>
        <NavLink to="/courses" onClick={toggleMenu}>Cursos</NavLink>
        <NavLink to="/about" onClick={toggleMenu}>Sobre Nós</NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>Contato</NavLink>
        <NavLink to="/redes" onClick={toggleMenu}>Redes sociais</NavLink>
      </MobileMenu>
    </NavbarContainer>
  );
}