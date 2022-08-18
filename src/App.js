// import { Title } from "./components/styles";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
//Components
import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer.js";
//Pages
import Home from "./pages/Home/Home";
import CharactersPage from "./pages/Character/CharactersPage";
import Dimension from "./pages/Dimension/Dimension";
import Curiosity from "./pages/Curiosity/Curiosity";
import CharacterDetailsPage from "./pages/Character/CharacterDetailsPage";
//Images

function App() {
  return (
    <div className="App">
      {/* <Title>Testando o styled components
        <span> pequeno texto para testar.</span>
        <p>Aqui está sendo feito mais outro teste</p>
      </Title> */}
      <BrowserRouter>
      <Navbar/>
       <div className="container">
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personagem" element= {<CharactersPage/>}/>
          <Route path="/dimensao" element= {<Dimension/>}/>
          <Route path="/curiosidades" element={<Curiosity/>}/>
          <Route path="/personagem/:id" element={<CharacterDetailsPage/>}/>
        </Routes>
       </div>
       {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
