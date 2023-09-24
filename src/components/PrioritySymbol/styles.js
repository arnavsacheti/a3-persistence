import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 15,
    height: 15,
    borderRadius: '50%',
  },
  high: {
    backgroundColor: '#e74c3c',
  },
  medium: {
    backgroundColor: '#f39c12',
  },
  low: {
    backgroundColor: '#2ecc71',
  },
});

export default useStyles;
