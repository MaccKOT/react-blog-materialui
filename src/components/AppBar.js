import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//custom CSS in JS for classes
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#fff',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="primary">
          Blog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
