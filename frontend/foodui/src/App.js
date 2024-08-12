
import { ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { darkTheme } from './Components/NavBar/Themes/Darkthemes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <cssBaseline/>
       <NavBar/>
    </ThemeProvider>

  );
}

export default App;
