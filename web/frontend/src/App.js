import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#222222',
  },
}));

function App() {
 const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid classname={classes.grid} item xs={2}>
          fff
        </Grid>
        <Grid classname={classes.grid} item xs={10}>
          9868
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
