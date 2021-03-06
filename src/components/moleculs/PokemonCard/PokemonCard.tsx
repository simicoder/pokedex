import React from 'react';
import { Link } from 'react-router-dom';
import { IPokemon } from '../../../types/types';

interface IProps {
  pokemon: IPokemon;
}

export const PokemonCard = ({ pokemon }: IProps) => (
  <Link
    className="d-flex flex-column justify-content-between text-black text-decoration-none fw-bold p-2"
    to={`/pokemons/${pokemon.name}`}
  >
    <div className="d-flex my-auto">
      <img
        className="img-fluid"
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
      />
    </div>
    <div className="d-flex justify-content-center">
      <p className="d-flex justify-content-center align-items-center w-100 fw-bold h3 p-1 bg-primary text-yellow rounded">
        {pokemon.name}
      </p>
    </div>
  </Link>
);
