import React from 'react';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid,Card,CardContent,CardMedia,Typography, IconButton, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rishabh from '../../Images/rishabh.jpg'
import RajShah from '../../Images/rajshah.jpg' 
import Jayakar from '../../Images/jaykar.jpg'

const useStyles = makeStyles({
    root: {
        flexGrow: 2
    },
    rootCard: {
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
        <div className = {classes.root}>
            <Grid container direction = "row" justify = "center">
                <Grid item xs={12}>
                    <Typography gutterBottom align="center" variant = "h6">
                        Write to us at : 
                        <Link variant = "inherit" href = "mailto:secyprogsoc.sg@iitbbs.ac.in"> secyprogsoc.sg@iitbbs.ac.in</Link>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom align="center" variant = "h5" >
                        Project Leads
                    </Typography>
                </Grid>
            </Grid>
            <Grid container direction = "row" justify = "center" spacing = {4} >
                <Grid item s={5} justice ="center" >
                    <Card className = {classes.rootCard}>
                        <CardMedia 
                            className = {classes.media} 
                            title ="Rishabh Gupta" 
                            component = "img"
                            image = {Rishabh} 
                        />
                        <CardContent>
                            <Typography align = "center" display="inline" variant = "h6" component = "h2">
                                Rishabh Gupta 
                            </Typography>
                            <IconButton display="inline" area-label="Linkedin.com" onClick={ () => window.open('https://www.linkedin.com/in/rishabh-gupta-48890613b')}>
                                <LinkedInIcon color = "primary" fontSize="inherit"/>
                            </IconButton>
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
                            <IconButton display="inline" area-label="Linkedin.com" onClick={ () => window.open('https://www.linkedin.com/in/raj-shah-6754641a9')}>
                                <LinkedInIcon color = "primary" fontSize="inherit"/>
                            </IconButton>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container direction = "row" justify = "center">
                    <Grid item xs={12}>
                        <Typography gutterBottom align="center" variant = "h5" >
                            Contributors
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction = "row" justify = "center">
                    <Grid item s={5} >
                        <Card className = {classes.root}>
                            <CardMedia
                                className = {classes.media} 
                                component = "img" 
                                title ="Jayakar" 
                                image = {Jayakar} 
                            />
                            <CardContent justify = "right" >
                                <Typography display="inline" variant = "h6" component = "h2">
                                    Jayakar 
                                </Typography>
                                <IconButton display="inline" area-label="Linkedin.com" onClick={ () => window.open('https://www.linkedin.com/in/jayakar-reddy-9a538a170/')}>
                                    <LinkedInIcon color = "primary" fontSize="inherit"/>
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutUsContent;