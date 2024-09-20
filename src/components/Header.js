import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">JessSilva</div>
      <nav>
        <ul>
          <li><a href="#carta">Sobre mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#causos">Causos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
