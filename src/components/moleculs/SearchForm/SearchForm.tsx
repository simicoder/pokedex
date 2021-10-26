import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePokemonContext } from '../../../context/PokemonContext';
import { IPokemon } from '../../../types/types';

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setPokemons } = usePokemonContext();

  const history = useHistory();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const searchReg = new RegExp(`${searchValue}`, 'i');

    fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .then((response) => response.json())
      .then((data) => {
        const result: IPokemon[] = [];
        data.results.map((pokemon: IPokemon) => {
          if (pokemon.name.search(searchReg) != -1) {
            result.push(pokemon);
          }
          return null;
        });

        setPokemons(result);
      });

    history.push('/search');
  };

  const handleChange = (e: { target: { name: string; value: string } }) =>
    setSearchValue(e.target.value);

  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchValue}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
