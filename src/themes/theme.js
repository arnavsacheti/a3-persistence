import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#f39c12',
    },
  },
  typography: {
    fontFamily: '"Oswald", sans-serif',
  },
});

export default theme;
