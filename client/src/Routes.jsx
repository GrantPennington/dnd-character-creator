import { Routes, Route, Navigate } from 'react-router-dom';
import CharacterForm from './components/CharacterForm';
import CharacterViewer from './pages/CharacterViewer'; // new
import GenerateRedirect from './pages/GenerateRedirect'; // handles in-memory ID creation
import PrintableView from './components/PrintableView';
import CharacterEditor from './pages/CharacterEditor';

const AppRoutes = ({ characterMap, setCharacterMap }) => (
  <Routes>
    <Route path="/" element={<Navigate to="/generate" />} />
    <Route path="/generate" element={<CharacterForm onResult={setCharacterMap} />} />
    <Route path="/character/:id" element={<CharacterViewer characterMap={characterMap} />} />
    <Route path="/character/:id/edit" element={<CharacterEditor characterMap={characterMap} setCharacterMap={setCharacterMap} />} />
    <Route path="/print/:id" element={<PrintableView characterMap={characterMap} />} />
    {/* Later: <Route path="/my-characters" element={<UserDashboard />} /> */}
  </Routes>
);

export default AppRoutes;
