import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [characterMap, setCharacterMap] = useState(null);

  const handleGenerate = (character) => {
    const id = uuidv4();
    setCharacterMap((prev) => ({ ...prev, [id]: character }));
    return id;
  }

  return (
    <Router>
      <AppRoutes characterMap={characterMap} setCharacterMap={handleGenerate} />
    </Router>
  );
}

export default App;