import React from "react";
import { Home as HomeStyle } from "./styles"

const Home = () => {
  return (
    <HomeStyle>
      <main>
        <div>Bem-vindo ao</div>
        <div className="sub-titulo">Universo Rick and Morty</div>
      </main>
    </HomeStyle>
  );
};

export default Home;
