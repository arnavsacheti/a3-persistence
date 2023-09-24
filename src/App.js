import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
import HomePage from './views/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
