import React, { useEffect } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { PokemonCard } from '../components/moleculs/PokemonCard/PokemonCard';
import { Layout } from '../components/organisms/Layout/Layout';

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
    <Layout>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-auto">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};
