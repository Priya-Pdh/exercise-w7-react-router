import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonDetails = () => {
const [ pokemondetails, setPokemonDetails] = useState(null)
const { pokemonid } = useParams();

  console.log(pokemonid)
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonid}/`


useEffect(() => {
  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Individual Pokemon", data);
    setPokemonDetails(data)})
    
}, [pokemonUrl]);

  return(
    <div>
      <h1>PokemonDetails</h1>
      {
        pokemondetails && 
        <div>
            <p>{pokemondetails.height}</p>
            <p>{pokemondetails.name}</p>
            <img src={pokemondetails.sprites.front_default} />
        </div>
      }
    </div>
  )
}

export default PokemonDetails;