import React,{useState} from "react";
import { Dropdown } from "./Components/Dropdown/Dropdown";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      <h1>Wellcome to your adventure pokemon</h1>
      <Dropdown 
        title='Select your initial pokemon' 
        pokemons={['charmander','bulbasauro','squirtle']}
        onSelected={(selected)=> setSelectedPokemon(selected)}
      />
      {selectedPokemon && <p>Your pokemon is {selectedPokemon}</p>}
    </div>
  );
}

export default App;
