import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { IPokemonStat } from '../../../types/types';

interface IProps {
  stats: IPokemonStat[];
}

export const PokemonStats = ({ stats }: IProps) => (
  <div className="d-flex flex-column col-12 col-sm-6">
    {stats.map((statItem) => (
      <div className="p-1 m-1 bg-info text-yellow rounded">
        <p>{statItem.stat.name}</p>
        <ProgressBar variant="warning" now={statItem.base_stat} />
      </div>
    ))}
  </div>
);
