import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material';

// Create a theme instance.
const theme = {
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#0288d1',
    },
  },
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={createTheme(theme)}>
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
