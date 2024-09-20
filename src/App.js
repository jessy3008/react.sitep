import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carta from './components/Carta';
import Curiosidades from './components/Curiosidades';
import Projetos from './components/Projetos';
import Causos from './components/Causos';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Carta />
            <Curiosidades />
            <Projetos />
            <Causos />
            <Habilidades />
            <Footer />
        </div>
    );
};

export default App;
