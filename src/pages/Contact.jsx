import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
} from '../styles.js';

export function Contact() {
  const navigate = useNavigate(); // Hook para navegação

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
  
    console.log('Formulário enviado:', formData);
  
    // Clear form and redirect
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      alert('Obrigado por entrar em contato!');
      navigate('/');
    }, 1000);
  };
  
  return (
    <ContactContainer>
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactForm onSubmit={handleSubmit}> {/* Adiciona o onSubmit no formulário */}
        <FormLabel>
          Nome:
          <FormInput
            type="text"
            name="name"
            placeholder="Digite seu nome"
            autoComplete="off"
            value={formData.name} // Controla o estado do input
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Email:
          <FormInput
            type="email"
            name="email"
            placeholder="Digite seu email"
            autoComplete="off"
            value={formData.email} // Controla o estado do input
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Mensagem:
          <FormTextarea
            name="message"
            placeholder="Digite sua mensagem"
            autoComplete="off"
            value={formData.message} // Controla o estado do textarea
            onChange={handleChange}
          />
        </FormLabel>
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
}
