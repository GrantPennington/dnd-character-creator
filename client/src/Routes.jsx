import { Routes, Route } from 'react-router-dom';
import CharacterForm from './components/CharacterForm';
import CharacterDisplay from './components/CharacterDisplay';
import PrintableView from './components/PrintableView';

const AppRoutes = ({ character, setCharacter }) => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <CharacterForm onResult={setCharacter} />
          <CharacterDisplay character={character} />
        </>
      }
    />
    <Route path="/print" element={<PrintableView />} />
  </Routes>
);

export default AppRoutes;