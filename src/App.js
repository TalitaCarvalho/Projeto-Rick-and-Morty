import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home/Home";
import CharactersPage from "./pages/Character/CharactersPage";
import Dimension from "./pages/Dimension/DimensionsPage";
import Curiosity from "./pages/Curiosity/Curiosity";
import CharacterDetailsPage from "./pages/Character/CharacterDetailsPage";
import DimensionDatailsPage from "./pages/Dimension/DimensionDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className="app-container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagem" element={<CharactersPage />} />
          <Route path="/dimensao" element={<Dimension />} />
          <Route path="/curiosidades" element={<Curiosity />} />
          <Route path="/personagem/:id" element={<CharacterDetailsPage />} />
          <Route path="/dimensao/:id" element={<DimensionDatailsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
