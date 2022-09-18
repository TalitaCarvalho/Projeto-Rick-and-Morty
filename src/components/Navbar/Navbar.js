import { NavLink } from "react-router-dom";
import { Navegation } from "./styles";
import React from "react";
const Navbar = () => {
  return (
    <Navegation>
      <nav className="p-2 flex flex-row items-center justify-between">     
        <a href="http://localhost:3000/" title="imagem que leva pra home">
          <img
            className="logo-navbar"
            src="/assets/images/home/fundo-home.png"
            alt="Rick-and-Morty-em-preto-e-branco-pequeno"
          />
        </a>
        <div className="flex lg:hidden">
          <svg
            xmlns="http:// www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="redondo"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul className="flex flex-row gap-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "route-active" : "hover:text-[#4682b4]"
              }
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/personagem"
              className={({ isActive }) =>
                isActive ? "route-active" : "hover:text-[#4682b4]"
              }
            >
              Personagens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dimensao"
              className={({ isActive }) =>
                isActive ? "route-active" : "hover:text-[#4682b4]"
              }
            >
              Dimensões
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curiosidades"
              className={({ isActive }) =>
                isActive ? "route-active" : "hover:text-[#4682b4]"
              }
            >
              Curiosidades
            </NavLink>
          </li>
        </ul>
      </nav>
    </Navegation>
  );
};

export default Navbar;
