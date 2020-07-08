import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import MultilineChart from '@material-ui/icons/MultilineChart';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import HomeIcon from '@material-ui/icons/Home';
import GlbalIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GridOnIcon from '@material-ui/icons/GridOn';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  root: {
   position:'relative',
   bottom:"-150px",
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
     <BottomNavigationAction label="Tabular Stat" icon={<GridOnIcon />} />
     <BottomNavigationAction label="Country Stat " icon={<BarChartIcon />} />
      <BottomNavigationAction label="Location Stat" icon={<LocationSearchingIcon />} />
      <BottomNavigationAction label="Pakistan Stat" icon={<LocationOnIcon />} />
      {/* <BottomNavigationAction label="Pakistan" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}