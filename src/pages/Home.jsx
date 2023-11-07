import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Home = () => {
  const [showPokemons, setShowPokemons] = useState(null);
  const url = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowPokemons(data);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {showPokemons &&
        showPokemons.results.map((pokemon, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  <Link to={`/pokemondetails/${pokemon.name}`}>{pokemon.name}</Link>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
