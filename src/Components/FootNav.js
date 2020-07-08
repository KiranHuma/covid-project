import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import MultilineChart from '@material-ui/icons/MultilineChart';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import GlbalIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
   position:'relative',
   bottom:"-300px",
   top:"100"
 
  },
});

export default function  FootNav({screenConfig}) {
  const classes = useStyles();
 
//   const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue);
       screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<HomeIcon />} />
      <BottomNavigationAction label="Global" icon={<GlbalIcon />} />
     <BottomNavigationAction label="Country Tab" icon={<LocationOnIcon />} />
     <BottomNavigationAction label="Country Stat " icon={<MultilineChart />} />
      <BottomNavigationAction label="Graphs By id" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Pakistan Stat" icon={<LocationOnIcon />} />
      {/* <BottomNavigationAction label="Pakistan" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}