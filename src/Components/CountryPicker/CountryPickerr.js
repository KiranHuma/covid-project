import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  mainChart: {
    maxWidth: "1000px",
    margin: "20px auto",
  },
}));

const Chart = () => {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState([{}]);
  // console.log(currentScreen)

  
  useEffect(() => {
      async function getData() {
          const response = await fetch("https://api.thevirustracker.com/free-api?countryTimeline=PK");
          let data = await response.json();

          //   delete data.results[0].source;
          setGlobalData(Object.values(Object.values(data.timelineitems)[0]));
          console.log(Object.values(Object.values(data.timelineitems)[0]));
          return data;
      }
      getData()
  }, [])
  
  const LineChart =
  globalData.length !== 0 ? (
      <Line
 
        data={{
          labels: globalData.map(({ new_daily_cases}) => new_daily_cases),
       
          
          datasets: [
            {
              data: globalData.map(({ new_daily_cases }) => new_daily_cases),
              label: "New Daily Cases",
              borderColor: "#3333ff",
              fill: true,
            },
            {
                data: globalData.map(({ total_deaths  }) => total_deaths),
              label: "Total Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.3)",
              fill: true,
              
            },
            {
                data: globalData.map(({ new_daily_deaths }) => new_daily_deaths),
              label: "New Daily Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.3)",
              fill: true,
            },
            {
                data: globalData.map(({ total_recoveries }) => total_recoveries),
              label: "total_recoveries",
              borderColor: "green",
              backgroundColor: "lightgreen",
              fill: true,
            },
           
          ],
        }}
        
      />
    ) : null;

  return <div className={classes.mainChart}>{LineChart} <h6>New Daily Cases</h6>
  <br/>
  <br/>
  <br/>
 <h1 >Pakistan Stats</h1> </div>


};

export default Chart;