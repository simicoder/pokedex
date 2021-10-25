import React from 'react';
import { IPokemon } from '../../types/IPokemon';

interface IProps {
  pokemon: IPokemon;
}

export const Pokemon = ({ pokemon }: IProps) => <div>{pokemon.name}</div>;
