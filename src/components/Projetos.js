import React from 'react';
import './Projetos.css';

const Projetos = () => {
    return (
        <section className="projetos" id="projetos">
            <h2>Projetos</h2>
            <div className="project-cards">
                <div className="project-card">
                    <h3>JOGO DA MEMÓRIA</h3>
                    <p>Um jogo da memória desenvolvido com JavaScript que testa a memória do jogador combinando pares de cartas.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript</p>
                    <a href="https://github.com/emysilvaa/Jogo-da-memoria" target="_blank" className="project-link">Ver no GitHub</a>
                </div>
                <div className="project-card">
                    <h3>DOCERIA JESS EMPADAS</h3>
                    <p>Site de uma doceria com integração a banco de dados para pedidos online. Projeto ainda em desenvolvimento.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS, PHP, MySQL</p>
                    <a href="https://github.com/jessy3008/doceria-jess_empadas" target="_blank" className="project-link">Ver no GitHub</a>
                </div>
                <div className="project-card">
                    <h3>SITE PESSOAL - PROFª LORETA</h3>
                    <p>Site pessoal desenvolvido para uma professora, apresentando informações sobre sua carreira e projetos.</p>
                    <p><strong>Tecnologias:</strong> HTML, CSS</p>
                    <a href="https://github.com/giiingrid20/projeto_site-prof" target="_blank" className="project-link">Ver no GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Projetos;
