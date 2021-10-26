import React from 'react';
import { IPokemonType } from '../../../types/types';

interface IProps {
  types: IPokemonType[];
}

export const PokemonTypes = ({ types }: IProps) => (
  <div className="d-flex col-5">
    <p className="p-1 m-1">Types: </p>

    {types.map((typeItem) => (
      <p className="p-1 m-1 bg-info text-yellow rounded">{typeItem.type.name}</p>
    ))}
  </div>
);
