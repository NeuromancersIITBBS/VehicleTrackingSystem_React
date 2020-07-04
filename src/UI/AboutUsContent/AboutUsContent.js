import React from 'react';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid,Card,CardContent,CardMedia,Typography, IconButton, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Rishabh from '../../Images/rishabh.jpg';
import Raj from '../../Images/raj.jpg'; 
import Jayakar from '../../Images/jaykar.jpg';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 200,
		round: true,
	},
	wrapper: {
		padding: '8px',
		width: '100vw',
	},
});
  

const AboutUsContent = ()=>{
	const classes = useStyles();
	return(
		<>
			<Grid container direction = "row" justify = "center">
				<Grid item xs={12}>
					<Typography align="center" variant = "h6">
                        Write to us at : 
						<Link variant = "inherit" href = "mailto:secyprogsoc.sg@iitbbs.ac.in"> secyprogsoc.sg@iitbbs.ac.in</Link>
						<br/>
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
			<Grid container direction = "row" justify = "center" spacing = {4} className={classes.wrapper} >
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
								<Link href="https://www.linkedin.com/in/rishabh-gupta-48890613b/" target="_blank" color="secondary">
									<LinkedInIcon fontSize="inherit"/>
								</Link>
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
							image = {Raj} 
						/>
						<CardContent>
							<Typography display="inline" variant = "h6" component = "h2">
                                Raj Shah 
							</Typography>
							<Typography display="inline" align="right">
								<Link href="https://www.linkedin.com/in/raj-shah-6754641a9/" target="_blank" color="secondary">
									<LinkedInIcon fontSize="inherit"/>
								</Link>
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction = "row" justify = "center">
					<Grid item xs={12}>
						<Typography align="center" variant = "h5">
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
							<CardContent>
								<Typography display="inline" variant = "h6" component = "h2">
                                    Jayakar 
								</Typography>	
								<Typography display="inline" align="right">
									<Link href="https://www.linkedin.com/in/jayakar-reddy-9a538a170/" target="_blank" color="secondary">
										<LinkedInIcon fontSize="inherit"/>
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default AboutUsContent;