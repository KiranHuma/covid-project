import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 1000,
    minWidth:650,
    margin: '0 auto',
    marginTop: 50,
    // position:'relative',
    
    // flexWrap:'wrap'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexWrap:'wrap'
  },
  title: {
    color: '#3f51b5',
    textTransform: "uppercase"
  }, table: {
    minWidth: 650,
    flexWrap:'wrap'
  },
  head: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.green,
    // color: '#3f51b5',
    backgroundColor:'green',
    flexWrap:'wrap'

  },
  headerr: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#00334d",
    flexWrap:'wrap'

  },
}));

export default function AllCountries() {
  const [globalData, setGlobalData] = useState([{}]);
  // console.log(currentScreen)

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await response.json();

      //   delete data.results[0].source;
      setGlobalData(Object.values(Object.values(data.countryitems)[0]));
      console.log(Object.values(Object.values(data.countryitems)[0]));
      return data;
    }
    getData()
  }, [])
  const classes = useStyles();

  return (
  
    <Paper className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} flexWrap='wrap' aria-label="Covid table">
        <TableHead className={classes.head}>
          <TableRow className={classes.headerr}>
            <TableCell className={classes.headerr} align="left">Country</TableCell>
            <TableCell className={classes.headerr} align="left">Total Cases</TableCell>
            <TableCell className={classes.headerr} align="left">Total Recoverd</TableCell>
            <TableCell className={classes.headerr} align="left">Total UnResolved</TableCell>
            <TableCell className={classes.headerr} align="left">Total Deaths</TableCell>
            <TableCell  className={classes.headerr} align="left">New Cases Today</TableCell>
            <TableCell className={classes.headerr} align="left">New Deaths Today</TableCell>
            <TableCell  className={classes.headerr} align="left">Active Cases</TableCell>
            <TableCell className={classes.headerr} align="left">Serious Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key, ind) => {
            return (
              <TableRow >

                <TableCell align="left">{globalData[ind].title}</TableCell>
                <TableCell>
                  <h3 className={classes.title}>
                    {/* {ind}+Hello   
                               {key.replace(/_/g, ' ')} */}
                    {globalData[ind].total_cases}
                  </h3>
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_recovered}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_unresolved}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_deaths}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_new_cases_today}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_new_deaths_today}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_active_cases}
                </TableCell>
                <TableCell align="left">
                  {/* <h3>{globalData[0][key]}</h3> */}
                  {globalData[ind].total_serious_cases}
                </TableCell>

              </TableRow>


            )
          })}
        </TableBody>
       
      </Table>
      
    </TableContainer>
     
    </Paper>

  );
}


