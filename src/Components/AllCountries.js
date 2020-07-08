import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: "uppercase"
    }
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
        <div className={classes.root}>
            <table>
                <tr>
                    <th>
                        Country Name
                    </th>
                    <th>
                        Total Cases
                    </th>
                    <th>
                        Active Cases
                    </th>
                </tr>
                {globalData.map((key, ind) => {
                    return (
                        <tr>
                            <td>{globalData[ind].title}</td>
                            <td>
                                <h3 className={classes.title}>
                              {/* {ind}+Hello   
                               {key.replace(/_/g, ' ')} */}
                               {globalData[ind].total_cases}
                                </h3>
                            </td>
                            <td>
                                {/* <h3>{globalData[0][key]}</h3> */}
                                {globalData[ind].total_active_cases}
                            </td>
                        </tr>


                    )
                })}
            </table>
        </div>

    );
}


///Items are more in number so table is used
    //             //below is working fine but space is not enough
    //            ///for grid uncomment below code */}

    //   return (
    //     <div className={classes.root}>

    
//       {/* <Grid container spacing={3}>
//         {Object.keys(globalData[0]).map((key ,ind )=> {
//           return (


//             <Grid item xs={12} sm={4} key={ind}>
//               <Paper className={classes.paper} 
//               elevation={3}>
//                <h3 className={classes.title}>
//                  {key.replace(/_/g,' ')}
//                  </h3>
//                <h3>{globalData[0][key]}</h3>
//               </Paper>

//             </Grid>
//           )
//         })}
//       </Grid> */}
//     </div>
//   );
// }