import { useState } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import Search from "./components/Search/Search";
import PokemonList from "./components/PokemonList/PokemonList";
// import CustomRoutes from "./Routes/CustomRoutes";
import { Link } from "react-router-dom";
import { Route, Routes} from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
    <div className="outer-pokedex">
    <div id="container">
    <Link to='/' id="pokedex">
        <h1 id='pokedex-heading'>
          Pokedex
        </h1>
      </Link>
      <div id="Search-wrapper">
        <Search />
      </div>
      <div id="body">
      <Routes >
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
