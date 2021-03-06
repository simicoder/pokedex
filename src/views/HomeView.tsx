import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { PokemonCard } from '../components/moleculs/PokemonCard/PokemonCard';
import { Layout } from '../components/organisms/Layout/Layout';

export const HomeView = () => {
  const { pokemons, setPokemons } = usePokemonContext();

  const [loading, setLoading] = useState(false);
  const [numberOfElements, setNumberOfElements] = useState(0);

  const observer = useRef<HTMLDivElement | IntersectionObserver>(null!);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) (observer.current as IntersectionObserver).disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setNumberOfElements((prevNumberOfElements: number) => prevNumberOfElements + 50);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading],
  );

  const fetchPokemons = (limit = 50, offset = 0) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const pokeTab = [...pokemons, ...data.results];

        // removing duplicates
        const result = pokeTab
          .map((e) => e.name)
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter((e) => pokeTab[e as number])
          .map((e) => pokeTab[e as number]);

        setPokemons(result);

        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemons(50, numberOfElements);
  }, [numberOfElements]);

  return (
    <Layout>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-auto">
        {pokemons.map((pokemon, index) => {
          if (pokemons.length === index + 1) {
            return (
              <div key={pokemon.name} ref={lastElementRef}>
                <PokemonCard pokemon={pokemon} />
              </div>
            );
          }
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        })}
      </div>
    </Layout>
  );
};
