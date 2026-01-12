import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import LatestArticles from './components/LatestArticles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
