import React from "react";
import { Home as HomeStyle } from "./styles"

const Home = () => {
  return (
    <HomeStyle className="text-center flex items-center justify-center">
      <div>
        <div>Bem-vindo ao</div>
        <div className="sub-titulo">Universo Rick and Morty</div>
      </div>
    </HomeStyle>
  );
};

export default Home;
