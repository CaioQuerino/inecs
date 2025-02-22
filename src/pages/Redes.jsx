import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importando ícones
import { RedeContainer, RedeTitle, RedeList, RedeItem, RedeLink } from '../styles.js'; // Importando estilos
import '../styles.js'
export function Rede() {
  return (
    <RedeContainer>
      <RedeTitle>Nossas Redes Sociais</RedeTitle>
      <RedeList>
        <RedeItem>
          <RedeLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            <span>Facebook</span>
          </RedeLink>
        </RedeItem>
        <RedeItem>
          <RedeLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            <span>Instagram</span>
          </RedeLink>
        </RedeItem>
        <RedeItem>
          <RedeLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </RedeLink>
        </RedeItem>
        <RedeItem>
          <RedeLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            <span>Twitter</span>
          </RedeLink>
        </RedeItem>
        <RedeItem>
          <RedeLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            <span>YouTube</span>
          </RedeLink>
        </RedeItem>
      </RedeList>
    </RedeContainer>
  );
}