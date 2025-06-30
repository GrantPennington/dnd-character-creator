import { useNavigate, useParams } from 'react-router-dom';
import CharacterDisplay from '../components/CharacterDisplay';
import { Box, Button, Stack } from '@mui/material';

const CharacterViewer = ({ characterMap }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const character = characterMap[id];

    if (!character) return <div>Character not found or expired.</div>;

    return (
        <Box sx={{ m: 4 }}>
        <Stack direction={'row'} gap={3}>
            <Button
                variant="outlined"
                onClick={() => navigate(`/print/${id}`)}
            >
                Export / Print
            </Button>
            <Button
                variant="outlined"
                onClick={() => navigate(`/print/${id}`)}
            >
                Save
            </Button>
            <Button
                variant="outlined"
                onClick={() => navigate(`/print/${id}`)}
            >
                Edit
            </Button>
        </Stack>
        <CharacterDisplay character={character} />
        </Box>
        
    );
};

export default CharacterViewer;