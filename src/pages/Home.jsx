import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import LatestArticles from '../components/LatestArticles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
    return (
        <div className="App">
            <Hero />
            <About />
            <Services />
            <LatestArticles />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
