import { NavLink } from "react-router-dom";
import { Navegation } from "./styles";
import React from "react";
import Logo from "../assets/images/fundo-home.png";
const Navbar = () => {
  return (
    <Navegation>
      <nav>
        <a href="http://localhost:3000/" title="imagem que leva pra home">
          <img
            className="logo-navbar"
            src={Logo}
            alt="Rick-and-Morty-em-preto-e-branco-pequeno"
          />
        </a>
        <ul>
          <li>
            <NavLink to="/">Início</NavLink>
          </li>
          <li>
            <NavLink to="/personagem">Personagem</NavLink>
          </li>
          <li>
            <NavLink to="/dimensao">Dimensão</NavLink>
          </li>
          <li>
            <NavLink to="/curiosidades">Curiosidades</NavLink>
          </li>
        </ul>
      </nav>
    </Navegation>
  );
};

export default Navbar;
