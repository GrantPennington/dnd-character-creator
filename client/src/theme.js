// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // switch to 'light' if you prefer
        primary: {
            main: '#8c52ff', // purple
        },
        secondary: {
            main: '#00bcd4', // cyan
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
        },
    },
    typography: {
        fontFamily: `"Cinzel", "Roboto", "serif"`,
        h1: {
            fontSize: '2.4rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;