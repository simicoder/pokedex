import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { PokemonCard } from '../components/moleculs/PokemonCard/PokemonCard';
import { Layout } from '../components/organisms/Layout/Layout';

export const SearchResult = () => {
  const { pokemons } = usePokemonContext();

  return (
    <Layout>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-auto">
        {pokemons.length ? (
          pokemons.map((pokemon, index) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
        ) : (
          <div className="d-flex mx-auto justify-content-center">Not Found</div>
        )}
      </div>
    </Layout>
  );
};
