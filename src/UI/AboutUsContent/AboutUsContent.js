import React from 'react';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid,Card,CardContent,CardMedia,Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rishabh from '../../Images/rishabh.jpg'
import RajShah from '../../Images/rajshah.jpg' 

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
      round: true,
    },
  });
  

const AboutUsContent = ()=>{
    const classes = useStyles();
    return(
        <>
            <Grid container direction = "row" justify = "center">
                <Grid item xs={12}>
                    <Typography align="center" variant = "h5">
                        Write to us at : 
                        <Link variant = "inherit" href = "mailto:secyprogsoc.sg@iitbbs.ac.in"> secyprogsoc.sg@iitbbs.ac.in</Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction = "row" justify = "center">
                <Grid item xs={12}>
                    <Typography align="center" variant = "h5">
                        Project Leads
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction = "row" justify = "center" spacing = {4} >
                <Grid item s={5} justice ="center" >
                    <Card className = {classes.root}>
                        <CardMedia 
                            className = {classes.media} 
                            title ="Rishabh Gupta" 
                            component = "img"
                            image = {Rishabh} 
                        />
                        <CardContent justice = "center" >
                            <Typography align = "center" display="inline" variant = "h6" component = "h2">
                                Rishabh Gupta 
                            </Typography>
                            <Typography display="inline" align="right">
                                <LinkedInIcon fontSize="inherit"/>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item s={5} >
                    <Card className = {classes.root}>
                        <CardMedia
                            className = {classes.media} 
                            component = "img" 
                            title ="Raj Shah" 
                            image = {RajShah} 
                        />
                        <CardContent>
                            <Typography display="inline" variant = "h6" component = "h2">
                                Raj Shah 
                            </Typography>
                            <Typography display="inline" align="right">
                                <LinkedInIcon fontSize="inherit"/>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutUsContent;