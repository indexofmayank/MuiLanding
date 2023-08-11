import logo from './logo.svg';
import './App.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import { Container } from '@mui/material';
import HeroSection from './components/HeroSection';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container>
        <HeroSection />  
        <CakeSection /> 
        <ContactUs />
      </Container>
    </ThemeProvider>
  );
}

export default App;
