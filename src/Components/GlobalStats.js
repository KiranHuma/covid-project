import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography,Tooltip,Fade,Zoom} from '@material-ui/core';


import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
    
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color:'red',
    backgroundColor: "#00334d",
    // position: 'relative',
   
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      transform: 'scale(1.1)',}
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // color: theme.palette.text.secondary,
  },
 
  title:{
    color:'white',
    textTransform:"uppercase"
  }
}));

export default function GlobalStats() {
  const [globalData, setGlobalData] = useState({});
  
   
  // console.log(currentScreen)

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      let data = await response.json();

      delete data.results[0].source;
      setGlobalData(data.results[0]);
      // console.log(data.results[0])
      return data;
    }
    getData()
  }, [])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        {Object.keys(globalData).map((key ,ind )=> {

          return (
        
            <Tooltip title="Global Data" TransitionComponent={Zoom} >
           <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} 
              elevation={4}>
               <h3 className={classes.title}>
                 {key.replace(/_/g,' ')}
                 </h3>
                 <Typography variant="h6">
              <CountUp start={0} end={globalData[key]} duration={2.75} separator="," />
            </Typography>
               {/* <h3>{globalData[key]}</h3> */}
              </Paper>

            </Grid>
            </Tooltip>
          
          )
        })}




      </Grid>
    </div>
  );
}