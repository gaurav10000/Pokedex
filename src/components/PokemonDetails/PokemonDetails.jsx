import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './PokemonDetails.css'
import Loading from '../Loading/Loading'


function PokemonDetails() {
  const {id} = useParams()
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsloading] = useState(true)
  async function downloadPokemonDetails() {
    
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      // console.log(response.data)
      setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        types: response.data.types.map((t) => t.type.name),
        found: true
      })
      setIsloading(false)
    })
    .catch((error) => {
      setPokemon({
        message: "Pokemon not found, please try again.",
        found: false
      })
      setIsloading(false)
    })
    
  }

  useEffect(() => {
    downloadPokemonDetails()
  }, [id])

  return (
    <div id='container'>

      <div className='pokemon-details-wrapper'>
        { 
          isLoading ? <Loading /> : 
          
            pokemon.found ? (
              <div id='pokemon-details'>
                <div id="pokemon-image-wrapper">
                  {pokemon.image ? <img id='pokemon-img' src={pokemon.image} alt={pokemon.name} /> : <Loading />}
                </div>
                <div id="pokemon-text-details">
                <div className="pokemon-name xx-large"> <span>Name: </span>
                  {pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </div>
                <div className="pokemon-height xx-large"><span>Height: </span> {pokemon.height}</div>
                <div className="pokemon-weight xx-large"><span>Weight: </span> {pokemon.weight}</div>
                <div className="pokemon-details-types"><span>Type: </span> {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}</div>
                </div>
              </div>
            ) : 
  
            (
              <div>
                <p id="try-again">{pokemon.message}</p>
              </div>
            )
          
        }
    </div>
    </div>
  )
}

export default PokemonDetails