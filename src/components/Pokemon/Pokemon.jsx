import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";
function Pokemon({ name, image, id }) {
  return (
    <div className="container">
      <div className="pokemon">
      <Link to={`/pokemon/${id}`} >
      <span id = "pokemon-name" >{name}</span>
      <div>
        <img className="pokemon-img" src={image} alt={name} />
      </div>
      </Link>
    </div>
    </div>
  );
}

export default Pokemon;
