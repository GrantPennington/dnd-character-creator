import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import EditableField from '../components/EditableField';

const CharacterEditor = ({ characterMap, setCharacterMap }) => {
    const { id } = useParams();
    const character = characterMap[id];
    const navigate = useNavigate();

    if (!character) return <Box p={4}>Character not found.</Box>;

    const handleFieldUpdate = (field, newValue) => {
        const updated = { ...character, [field]: newValue };
        setCharacterMap((prev) => ({ ...prev, [id]: updated }));
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
            Edit Character: {character.name}
        </Typography>

        <EditableField
            field="backstory"
            label="Backstory"
            value={character.backstory}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <EditableField
            field="appearance"
            label="Appearance"
            value={character.appearance}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <EditableField
            field="personalityTraits"
            label="Personality Traits"
            value={character.personalityTraits}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <EditableField
            field="ideals"
            label="Ideals"
            value={character.ideals}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <EditableField
            field="bonds"
            label="Bonds"
            value={character.bonds}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <EditableField
            field="flaws"
            label="Flaws"
            value={character.flaws}
            character={character}
            onAccept={handleFieldUpdate}
        />

        <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 10 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Character saved!')}
            >
                Save All
            </Button>

            <Button
                variant="outlined"
                onClick={() => navigate(`/character/${id}`)}
            >
                Back to Character
            </Button>
        </Stack>
        </Box>
    );
};

export default CharacterEditor;