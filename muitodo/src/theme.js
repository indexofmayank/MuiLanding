import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        },
        secondary: {
            main: '#FFD2D7'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontSize: 16,
                    fontWeight: 'bold',
                    backgroundColor: "#FFD2D7"
                }
            }
        }
    }
})

export default theme;