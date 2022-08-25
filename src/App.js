// import { Title } from "./components/styles";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//Components
import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer.js";
//Pages
import Home from "./pages/Home/Home";
import CharactersPage from "./pages/Character/CharactersPage";
import Dimension from "./pages/Dimension/DimensionsPage";
import Curiosity from "./pages/Curiosity/Curiosity";
import CharacterDetailsPage from "./pages/Character/CharacterDetailsPage";
import DimensionDatailsPage from "./pages/Dimension/DimensionDetailsPage";
//Images

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personagem" element={<CharactersPage />} />
            <Route path="/dimensao" element={<Dimension />} />
            <Route path="/curiosidades" element={<Curiosity />} />
            <Route path="/personagem/:id" element={<CharacterDetailsPage />} />
            <Route path="/dimensao/:id" element={<DimensionDatailsPage/>} />
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
