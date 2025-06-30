import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CharacterDisplay = ({ character }) => {
    const navigate = useNavigate();

    const handleExport = () => {
        navigate('/print', { state: { character } })
    }

    if (!character) return null;

    return (
        <Box mt={4}>
        <Card sx={{ maxWidth: 800, mx: 'auto', p: 2, backgroundColor: 'background.paper' }}>
            <CardContent>
            {/* <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button variant="outlined" size="medium" onClick={handleExport}>
                    Export Character Sheet
                </Button>
            </Box> */}
            {character.portraitUrl && (
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <img
                        src={character.portraitUrl}
                        alt="Character portrait"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                        }}
                    />
                </Box>
            )}
            <Typography variant="h4" gutterBottom align="center">
                {character.name}
            </Typography>

            <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
                {character.race} {character.class} • {character.alignment}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h6">Backstory</Typography>
                <Typography variant="body1">{character.backstory}</Typography>
                </Grid>

                <Grid item xs={12}>
                <Typography variant="h6">Appearance</Typography>
                <Typography variant="body1">{character.appearance}</Typography>
                </Grid>

                {[
                ['Personality Traits', character.personalityTraits],
                ['Ideals', character.ideals],
                ['Bonds', character.bonds],
                ['Flaws', character.flaws],
                ].map(([label, value]) => (
                <Grid item xs={12} sm={6} key={label}>
                    <Paper variant="outlined" sx={{ p: 2, height: '100%' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {label}
                    </Typography>
                    <Typography variant="body2">{value}</Typography>
                    </Paper>
                </Grid>
                ))}

                <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Suggested Stats
                </Typography>
                <Grid container spacing={1}>
                    {Object.entries(character.stats).map(([stat, value]) => (
                    <Grid item xs={6} sm={4} key={stat}>
                        <Paper
                        elevation={1}
                        sx={{
                            textAlign: 'center',
                            p: 1,
                            fontWeight: 'bold',
                        }}
                        >
                        {stat.toUpperCase()}: {value}
                        </Paper>
                    </Grid>
                    ))}
                </Grid>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
        </Box>
    );
};

export default CharacterDisplay;