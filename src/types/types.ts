export interface IPokemon {
  name: string;
  url: string;
  height: number;
  weight: number;
  category: string;
  types: IPokemonType[];
  stats: IPokemonStat[];
}

export interface IPokemonType {
  type: { name: string };
}

export interface IPokemonStat {
  // eslint-disable-next-line camelcase
  base_stat: number;
  stat: {
    name: string;
  };
}
