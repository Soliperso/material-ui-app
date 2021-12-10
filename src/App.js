import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material';
import { cyan } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: cyan,
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
