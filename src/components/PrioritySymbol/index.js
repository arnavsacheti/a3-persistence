import React from 'react';
import useStyles from './styles';

function PrioritySymbol({ level }) {
  const classes = useStyles();

  return <div className={`${classes.root} ${classes[level]}`}></div>;
}

export default PrioritySymbol;
