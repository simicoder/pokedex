import React, { createContext, useState, Dispatch, SetStateAction, useContext } from 'react';
import { IPokemon } from '../types/IPokemon';

const PokemonContext = createContext<ContextType>({
  pokemons: [],
  setPokemons: () => {},
});

type ContextType = {
  pokemons: IPokemon[];
  setPokemons: Dispatch<SetStateAction<IPokemon[]>>;
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('Error while reading context!');
  }

  return context;
};

export const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>{children}</PokemonContext.Provider>
  );
};
