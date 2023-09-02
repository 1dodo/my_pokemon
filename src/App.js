import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [dodoPokName, setDodoPokName] = useState("");
  const [dodoPokemon, setPokemon] = useState({
    name:  "",
    species: "",
    img: "",
    attack: "",
    defense: "",
    type: "",
  })

  const fetchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${dodoPokName}`)
    .then((response) => {
      setPokemon({
        name: dodoPokName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name

      });
      console.log(response)
    })
    .catch(() => {
      console.error("Error")
    })
  }

  return (
    <>
    <h1 className='titlePokemonDodo'>Pokemon App</h1>
      <div className='searchQidiruvPok searchArea'>
        <input
          className='search'
          type='text'
          onChange={(event) => {
            setDodoPokName(event.target.value);
          }}
        />
        <button onClick={fetchPokemon}> Search </button>
      </div>

          <div className='NatijaKartasiDodo'>
            <div className='dodoCard'>
              <h1>{dodoPokemon.name}</h1>
              <img src={dodoPokemon.img}/>
              <p>Species:{dodoPokemon.species}</p>
              <h3>Attack:{dodoPokemon.attack}</h3>
              <h4>Defense:{dodoPokemon.defense}</h4>
              <p>Type:{dodoPokemon.type}</p>
            </div>

          </div>

    </>
  );
}

export default App;
