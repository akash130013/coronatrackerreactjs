import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      float:"left",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    infected:{
      borderBottomColor:'rgba(75,192,192,1)',
      minWidth: 275,
      float:"left"
    },
    recovered:{
      borderBottomColor:'rgba(0,255,0,1)',
      minWidth: 275,
      float:"left"
    },
    deaths:{
      borderBottomColor:'rgba(255,0,0,1)',
      minWidth: 275,
      
    }
  });




export default function Cards({data:{confirmed,recovered,deaths,lastUpdate}}) {
    const classes = useStyles();
    

    if(!confirmed){
        return "loading.."
    }

    return (
        <div>
        <Card className={classes.infected} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Infected:  <CountUp start={0} end={confirmed.value} duration={2.5} /> 
               </Typography>
              
                <Typography className={classes.pos} color="textSecondary">
                   Real Date: { new Date(lastUpdate).toDateString()}
          </Typography>
                <Typography variant="body2" component="p">
                Number of Active cases
           
                </Typography>
            </CardContent>
          
        </Card>

        <Card className={classes.recovered} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Recovered:<CountUp start={0} end={recovered.value} duration={2.5} /> 
          </Typography>
              
                <Typography className={classes.pos} color="textSecondary">
                   Real Date:{ new Date(lastUpdate).toDateString()}
          </Typography>
                <Typography variant="body2" component="p">
                Number of Recovered cases
           
                </Typography>
            </CardContent>
          
        </Card>

        <Card  variant="outlined" className={classes.deaths}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   Deaths:<CountUp start={0} end={deaths.value} duration={2.5} /> 
          </Typography>
              
                <Typography className={classes.pos} color="textSecondary">
                  Real Date:{ new Date(lastUpdate).toDateString()}
          </Typography>
                <Typography variant="body2" component="p">
                Number of Deaths cases
           
                </Typography>
            </CardContent>
          
        </Card>

              </div>
    )
}
