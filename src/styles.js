import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importando o Link para estilização

/*** Estilos Globais ***/
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

/*** Header ***/
export const HeaderStyle = styled.header`
  background: linear-gradient(135deg, #2c3e50, #34495e); /* Gradiente moderno */
  color: #ecf0f1;
  padding: 40px 0;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra mais suave */
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */

  h1 {
    margin: 10px 0 0;
    font-size: 2.8rem;
    font-weight: bold;
    letter-spacing: 2px;
  }

  p {
    margin: 10px 0 0;
    font-size: 1.3rem;
    font-style: italic;
    color: #bdc3c7;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 10px;
`;

/*** Navbar ***/
export const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #34495e, #2c3e50);
  padding: 15px 20px;
  display: flex;
  justify-content: center; /* Alinhar ícone e links */
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative; /* Adicionado para posicionar o MobileMenu corretamente */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 20px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #3498db;
    transform: translateY(-3px); /* Efeito de levitação */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3498db;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Linha animada abaixo do link */
  }

  @media (max-width: 768px) {
    display: none; /* Esconde os links no mobile */
  }
`;

/*** Ícone do Menu Hamburguer ***/
export const HamburgerIcon = styled.div`
  display: none; /* Esconde o ícone no desktop */
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: #ecf0f1;
    margin: 4px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex; /* Mostra o ícone no mobile */
  }
`;

/*** Menu Móvel ***/
export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Mostra ou esconde o menu */
  flex-direction: column;
  width: 100%;
  background-color: #2c3e50;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  a {
    padding: 15px 20px;
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #34495e;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Mostra o menu móvel no mobile */
  }
`;

/*** Footer ***/
export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50, #34495e); /* Gradiente moderno */
  color: #ecf0f1;
  text-align: center;
  padding: 30px 0;
  margin-top: 40px;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.2); /* Sombra mais suave */

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #bdc3c7;
  }
`;

/*** Home ***/
export const HomeContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */

  h1 {
    color: #2c3e50;
    font-size: 2.8rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #34495e;
  }

  ul {
    text-align: left;
    margin: 20px auto;
    max-width: 600px;

    li {
      margin-bottom: 15px;
      font-size: 1.1rem;
      color: #34495e;
    }
  }
`;

/*** Projects ***/
export const ProjectsContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */
`;

export const ProjectsTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.8rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

/*** ProjectCard ***/
export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Sombra maior no hover */
  }

  h2 {
    color: #2c3e50;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    color: #34495e;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
`;

/*** Courses ***/
export const CoursesContainer = styled.div`
  padding: 40px 20px;
  max-width: 90rem;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */
`;

export const CourseImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
`;

export const CourseList = styled.ul`
  text-align: left;
  margin: 20px auto;
  max-width: 600px;
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Sombra maior no hover */
    }
  }

  h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #34495e;
    font-size: 1.1rem;
  }
`;

/*** About ***/
export const AboutContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */

  h1 {
    color: #2c3e50;
    font-size: 2.8rem;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
  }

  h2 {
    color: #2c3e50;
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #34495e;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 20px;

    li {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #34495e;
      margin-bottom: 10px;
    }
  }
`;

/*** Contact ***/
/*** Contact ***/
export const ContactContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContactTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.8rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #3498db;
    border-radius: 2px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Sombra maior no hover */
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #34495e;
  text-align: left;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3498db;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:focus-within::after {
    transform: scaleX(1); /* Linha animada abaixo do campo */
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5); /* Efeito de foco */
  }

  &::placeholder {
    color: #95a5a6;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5); /* Efeito de foco */
  }

  &::placeholder {
    color: #95a5a6;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px); /* Efeito de levitação */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra no hover */
  }

  &:active {
    transform: translateY(0); /* Efeito de clique */
  }
`;

/*** Rede Social ***/
export const RedeContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: fadeIn 1s ease-in-out; /* Animação de entrada */
  margin-top: 40px;
  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Sombra maior no hover */
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const RedeTitle = styled.h2`
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #3498db;
    border-radius: 2px;
  }
`;

export const RedeList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RedeItem = styled.li`
  margin: 10px;
`;

export const RedeLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #34495e;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: #fff;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Sombra maior no hover */
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;
