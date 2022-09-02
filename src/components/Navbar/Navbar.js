import { NavLink } from "react-router-dom";
import { Navegation } from "./styles";
import React from "react";
const Navbar = () => {
  return (
    <Navegation>
      <nav>
        <a href="http://localhost:3000/" title="imagem que leva pra home">
          <img
            className="logo-navbar"
            src="/assets/images/fundo-home.png"
            alt="Rick-and-Morty-em-preto-e-branco-pequeno"
          />
        </a>
        <ul className="flex flex-row gap-x-4">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "route-active" : "hover:text-[#4682b4]"}>Início</NavLink>
          </li>
          <li>
            <NavLink to="/personagem" className={({isActive}) => isActive ? "route-active" : "hover:text-[#4682b4]"}>Personagem</NavLink>
          </li>
          <li>
            <NavLink to="/dimensao" className={({isActive}) => isActive ? "route-active" : "hover:text-[#4682b4]"}>Dimensão</NavLink>
          </li>
          <li>
            <NavLink to="/curiosidades" className={({isActive}) => isActive ? "route-active" : "hover:text-[#4682b4]"}>Curiosidades</NavLink>
          </li>
        </ul>
      </nav>
    </Navegation>
  );
};

export default Navbar;
