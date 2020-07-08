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
          labels: globalData.map(({ ourid }) => ourid),
          datasets: [
            {
              data: globalData.map(({ total_cases }) => total_cases),
              label: "infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: globalData.map(({  total_deaths } ) => total_deaths),
              label: "deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.3)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={classes.mainChart}>{LineChart}</div>;
};

export default Chart;