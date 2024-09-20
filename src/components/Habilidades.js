import React from 'react';
import './Habilidades.css';
import habilidadesImage from '../img/habilidades.png'; // Ajuste conforme seu caminho

const Habilidades = () => {
    return (
        <section className="habilidades">
            <img src={habilidadesImage} alt="Imagem de Jessica" />
            <div className="skills">
                <h2>Habilidades</h2>
                <ul>
                    <li>Design</li>
                    <li>HTML & CSS</li>
                    <li>Gestão de Redes Sociais</li>                
                </ul>
            </div>
        </section>
    );
};

export default Habilidades;
