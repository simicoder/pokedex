import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from './HomeView';
import { PokemonView } from './PokemonView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/pokemons/:pokemonName" component={PokemonView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
