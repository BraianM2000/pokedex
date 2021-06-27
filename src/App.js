import { useState } from 'react';
import './App.css';
import { PokemonList } from './components/PokemonList';
import {PokemonView} from './components/PokemonView'
import { SearchPokemon } from './components/SearchPokemon';

function App() {

  const [pokemon, setPokemon] = useState('')

  return (
    <div className="App">
        <SearchPokemon setPokemon={setPokemon}/>
        {
          (pokemon===''?<PokemonList />:<PokemonView pokemon={pokemon}/>)
        }
        
    </div>
  );
}

export default App;
