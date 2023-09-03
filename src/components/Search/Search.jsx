import React from "react";
import "./Search.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  
  const [pokemonName, setPokemonName] = useState('');
  
  function NameSaving(event) {
    setPokemonName(event.target.value.toLowerCase());
  }

  return (
    <div className="search-wrapper">
      <input
        id="pokemon-name-search"
        onChange={NameSaving}
        type="text"
        placeholder="Pokemon Name"
      />
      <Link to={pokemonName ? `/pokemon/${pokemonName}` : null} >
        <button type="submit">GO</button>
      </Link>
    </div>
  );
}

export default Search;
