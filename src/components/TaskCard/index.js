import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';

function TaskCard({ taskName }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {taskName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
