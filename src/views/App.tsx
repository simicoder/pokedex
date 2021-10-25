import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PokemonProvider } from '../context/PokemonContext';
import { HomeView } from './HomeView';
import { PokemonView } from './PokemonView';

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/pokemons/:pokemonName" component={PokemonView} />
        </Switch>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
