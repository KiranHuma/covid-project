import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  mainChart: {
    maxWidth: "1000px",
    // marginTop:"10px auto",
    margin: "80px auto",
   
  },
}));
const Chart = () => {
  const classes = useStyles();
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
  
  const LineChart =
  globalData.length !== 0 ? (
      <Line 
        data={{
          labels: globalData.map(({ title }) => title),
          datasets: [
            {
              data: globalData.map(({ total_cases }) => total_cases),
              label: "infected",
              borderColor:  "#f90606",
              backgroundColor:"rgba(255,0,0,0.3)",
              fill: true,
            },
            {
              data: globalData.map(({  total_recovered } ) => total_recovered),
              label: "Total Recovered",
              borderColor: "#009900",
              backgroundColor: "#CCFF66",    
              fill: true,
              
            },
            {
              data: globalData.map(({  total_unresolved } ) => total_unresolved),
              label: "Total Unresolved",
              borderColor: "#660066",
              backgroundColor: "#CC6699",
              fill: true,
            },
            {
              data: globalData.map(({  total_deaths } ) => total_deaths),
              label: "Total Deaths",
              borderColor: "#993333",
              backgroundColor: "rgba(255,0,0,0.3)",
              fill: true,
            },
            {
              data: globalData.map(({  total_new_cases_today } ) => total_new_cases_today),
              label: "Total New Cases Today",
              borderColor: "#CC0066",
              backgroundColor: "rgba(255,0,0,0.3)",
              fill: true,
            },
            {
              data: globalData.map(({  total_new_deaths_today } ) => total_new_deaths_today),
              label: "Total New Deaths Today",
              borderColor: "#FF9900",
              backgroundColor: "#FFCC99",
              fill: true,
            },
            {
              data: globalData.map(({  total_active_cases } ) => total_active_cases),
              label: "Total Active Cases",
              borderColor: "#FFCC99",
              backgroundColor: "#993333",
              fill: true,
            },
            {
              data: globalData.map(({  total_serious_cases } ) => total_serious_cases),
              label: "Total Serious Cases",
              borderColor: "#CC0066",
              backgroundColor: "#FF9966",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={classes.mainChart}>{LineChart}</div>;
};

export default Chart;