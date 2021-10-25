import React, { useEffect, useState } from 'react';
import { usePokemonContext } from '../context/PokemonContext';

export const HomeView = () => {
  const { pokemons, setPokemons } = usePokemonContext();

  const fetchPokemons = (limit = 50, offset = 0) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((name) => setPokemons(name.results));
    console.log(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return <div>{pokemons.map((pokemon) => `${(pokemon as any).name} `)}</div>;
};
