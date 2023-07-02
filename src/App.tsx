import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Hero from './components/Hero';
import About from './pages/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;