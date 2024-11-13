import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Customize primary color
        },
        secondary: {
            main: '#dc004e', // Customize secondary color
        },
        background: {
            default: '#f5f5f5', // Background color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;
