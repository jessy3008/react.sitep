import React from 'react';
import './Curiosidades.css';
import iconeSorvete from '../img/icone sorvete.png';
import iconeFoguete from '../img/icone foguete.png';
import iconeMusica from '../img/icone musica.png';
import iconeLivro from '../img/icone livro.png';
import iconePraia from '../img/icone praia.png';

const Curiosidades = () => {
    return (
        <section className="curiosidades" id="curiosidades">
            <h2>Curiosidades</h2>
            <div className="icons">
                <div className="icon">
                    <img src={iconeSorvete} alt="Icone 1" />
                    <p>Meu sabor de sorvete favorito é chocomenta</p>
                </div>
                <div className="icon">
                    <img src={iconeFoguete} alt="Icone 2" />
                    <p>Quando criança, eu sonhava em ser cientista da NASA</p>
                </div>
                <div className="icon">
                    <img src={iconeMusica} alt="Icone 3" />
                    <p>Meu grupo de rap favorito é Racionais Mc's</p>
                </div>
                <div className="icon">
                    <img src={iconeLivro} alt="Icone 4" />
                    <p>Meu livro favorito é "1984" de George Orwell</p>
                </div>
                <div className="icon">
                    <img src={iconePraia} alt="Icone 5" />
                    <p>Minha praia favorita é Ponta Negra em Natal</p>
                </div>
            </div>
        </section>
    );
};

export default Curiosidades;
