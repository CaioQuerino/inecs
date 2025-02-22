import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { Courses } from './pages/Courses.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Rede } from './pages/Redes.jsx';

export function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/redes" element={<Rede />} />
      </Routes>
      <Footer />
    </Router>
  );
}

