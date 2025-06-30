import { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterDisplay from './components/CharacterDisplay';

const App = () => {
  const [character, setCharacter] = useState(null);

  return (
    <div>
      <h1>D&D Character Creator</h1>
      <CharacterForm onResult={setCharacter} />
      <CharacterDisplay character={character} />
    </div>
  );
};

export default App;