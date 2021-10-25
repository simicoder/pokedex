import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pokemon } from '../components/Pokemon/Pokemon';

interface pokemonParams {
  pokemonName: string;
}

export const PokemonView = () => {
  const { pokemonName } = useParams<pokemonParams>();

  const [pokemon, setPokemon] = useState();

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return <>{pokemon && <Pokemon pokemon={pokemon} />}</>;
};
