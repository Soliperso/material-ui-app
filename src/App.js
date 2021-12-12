import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import Layout from './components/Layout';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3f3f3',
    },
    secondary: purple,
  },
  Typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
