import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from './styles';

function TodoForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField label="Task Name" variant="outlined" />
      <Button variant="contained" color="primary">
        Add Task
      </Button>
    </div>
  );
}

export default TodoForm;
