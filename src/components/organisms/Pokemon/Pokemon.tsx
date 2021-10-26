import React from 'react';
import { IPokemon } from '../../../types/types';
import { PokemonTypes } from '../../atoms/PokemonTypes/PokemonTypes';
import { PokemonStats } from '../../atoms/PokemonStats/PokemonStats';

interface IProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IProps) => (
  <div className="d-flex flex-row flex-wrap">
    <div className="d-flex col-12 col-md-5">
      <img
        className="img-fluid"
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
      />
    </div>

    <div className="d-flex mx-auto col-12 col-md-6 h-50 fw-bold flex-wrap">
      <div className="d-flex col-12 justify-content-center mb-3">
        <p className="d-flex justify-content-center align-items-center p-1 m-1 bg-primary text-yellow rounded">
          {pokemon.name}
        </p>
      </div>

      <div className="d-flex col-12 flex-wrap">
        <PokemonStats stats={pokemon.stats} />

        <div className="d-flex flex-column col-sm-5 col-12">
          <div className="d-flex justify-content-center align-items-center p-1 m-1 bg-info text-yellow rounded">
            Height: {pokemon.height}
          </div>

          <div className="d-flex justify-content-center align-items-center p-1 m-1 bg-info text-yellow rounded">
            Weight: {pokemon.weight}
          </div>

          <PokemonTypes types={pokemon.types} />
        </div>
      </div>
    </div>
  </div>
);
