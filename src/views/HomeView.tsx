import React, { useEffect } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';

export const HomeView = () => {
  const { pokemons, setPokemons } = usePokemonContext();

  const fetchPokemons = (limit = 50, offset = 0) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
};
