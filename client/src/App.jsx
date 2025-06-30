import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { useState } from 'react';

function App() {
  const [character, setCharacter] = useState(null);

  return (
    <Router>
      <AppRoutes character={character} setCharacter={setCharacter} />
    </Router>
  );
}

export default App;