import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexshrink: 1,
    position:'relative',
     margin: '0 auto',

  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
 navbr: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#00334d",
  },


}));

export default function NavBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbr} position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

            <MenuIcon />

          </IconButton>
          <Typography className={classes.menuButton} variant="h6" >
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}