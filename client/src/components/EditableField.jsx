import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Paper,
} from '@mui/material';
import axios from 'axios';

const EditableField = ({
  field,
  label,
  value,
  character,
  onAccept,
}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // ✅ Sync internal state when prop updates
    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    const regenerate = async () => {
        setLoading(true);
        setError('');
        try {
        const res = await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/characters/regenerate-field`,
            {
                field,
                character,
            }
        );
            setPreview(res.data.result);
        } catch (err) {
            setError('Failed to regenerate.');
        } finally {
            setLoading(false);
        }
    };

    const accept = () => {
        onAccept(field, preview);
        setPreview(null);
    };

    const cancel = () => {
        setPreview(null);
    };

    return (
        <Paper sx={{ mb: 4, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>{label}</Typography>

        {!preview && (
            <>
            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{currentValue}</Typography>
            <Button onClick={regenerate} disabled={loading} sx={{ mt: 1 }} variant="contained" size='small'>
                Regenerate {label}
            </Button>
            </>
        )}

        {loading && (
            <Box sx={{ mt: 2 }}>
            <CircularProgress size={24} />
            </Box>
        )}

        {preview && (
            <Box sx={{ mt: 2 }}>
            <TextField
                fullWidth
                multiline
                minRows={4}
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Button variant="contained" onClick={accept}>
                    Use This
                </Button>
                <Button variant="outlined" onClick={cancel}>
                    Cancel
                </Button>
            </Box>
            </Box>
        )}

        {error && (
            <Typography color="error" mt={1}>{error}</Typography>
        )}
        </Paper>
    );
};

export default EditableField;