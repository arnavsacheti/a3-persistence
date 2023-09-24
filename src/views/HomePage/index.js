import React from 'react';
import TodoForm from '../components/TodoForm';
import TaskCard from '../components/TaskCard';
import useStyles from './styles';

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TodoForm />
      <TaskCard taskName="Sample Task" />
    </div>
  );
}

export default HomePage;
