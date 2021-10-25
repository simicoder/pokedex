import React from 'react';
import { Link } from 'react-router-dom';
import { IPokemon } from '../../types/IPokemon';

interface IProps {
  pokemon: IPokemon;
}

export const PokemonCard = ({ pokemon }: IProps) => (
  <div>
    <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
  </div>
);
