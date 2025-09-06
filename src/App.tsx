import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;