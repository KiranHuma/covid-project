import React, { useEffect, useState } from 'react';
import GlobalStats from './GlobalStats'
import AllCountries from './AllCountries.js'
import Chartdaily from './Chart/Chart'
import CountryPicker from './CountryPicker/Country'
import CountryTable from './CountryPicker/CountryTable'
import ChartCountrywise from './Chart/ChartCountrywise'
import Pakstat from './CountryPicker/PakStat'

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // flexGrow: 1,
//     maxWidth: 1000,
//     margin: '0 auto',
//     marginTop: 50
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   title:{
//     color:'#3f51b5',
//     textTransform:"uppercase"
//   }
// }));

export default function InfoPanel({currentScreen}) {
  // console.log(currentScreen)
 
if(currentScreen ===0)
return <GlobalStats/>
else if(currentScreen ===1)
return <Chartdaily/>
else if(currentScreen ===2)
return <CountryTable/>
else if(currentScreen ===3)
return<CountryPicker/>
 else if(currentScreen ===4)
return<ChartCountrywise/>
else if(currentScreen ===5)
return<Pakstat/>
// else if(currentScreen ===6)
// return<AllCountries/>

  else return <GlobalStats/>
}