import React, { useState } from 'react'
import axios from 'axios'

const Pokémon = () => {
  const [pokémon, setPokémon] = useState([])
  
  const getAllPokémon = async (e) => {
    e.preventDefault()
    let allPokémon = [];
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    allPokémon = [...allPokémon, ...response.data.results];
    setPokémon(allPokémon)
    return
  }

  return (
    <div className='container'>
      <h1>Pokémon</h1>
      <button onClick={getAllPokémon}>Fetch Pokémon</button>
      <ol type='1'>
        {pokémon.map((pokemon, index) => (
        <li key={index}>
          <span>{pokemon.name}</span>
        </li>
        ))}
      </ol>
    </div>
  )
}
export default Pokémon