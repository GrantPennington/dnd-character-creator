import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import axios from 'axios';

const CharacterForm = ({ onResult }) => {
    const [formData, setFormData] = useState({
        race: '',
        charClass: '',
        theme: '',
        alignment: '',
        role: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                import.meta.env.VITE_API_BASE_URL + '/characters/generate',
                formData
            );
            onResult(res.data.result);
        } catch (err) {
            alert('Failed to generate character.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // FOR TESTING ONLY
    const autofill = () => {
        setFormData({
            race: 'Wood Elf', 
            charClass: 'Ranger',
            theme: "Nature’s Silent Guardian",
            alignment: "Neutral Good",
            role: 'Range DPS / Scout'
        });
    }

    return (
        <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
            Generate Your Character
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container gap={4}>
            {[
                { label: 'Race', name: 'race' },
                { label: 'Class', name: 'charClass' },
                { label: 'Theme', name: 'theme' },
                { label: 'Alignment', name: 'alignment' },
                { label: 'Role', name: 'role' },
            ].map(({ label, name }) => (
                <Grid item xs={12} key={name}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label={label}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                />
                </Grid>
            ))}

            <Grid item xs={12}>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    size="large"
                    //startIcon={<span>⚔️</span>} // or use MUI icon
                    startIcon={<AutoAwesomeIcon />} // or use MUI icon
                    sx={{
                        height: '56px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                    }}
                >
                    {loading ? 'Generating...' : 'Generate'}
                </Button>
            </Grid>
            </Grid>
        </Box>
        <Button onClick={autofill}>Autofill</Button>
        </Paper>
    );
};

export default CharacterForm;
