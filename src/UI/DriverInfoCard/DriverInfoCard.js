import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	root: {
		minWidth: 100,
	},
	title: {
		fontSize: 14,
	}
});

const DriverInfoCard = (props) => {
	const classes = useStyles();
	let lastUpdated = (Date.now()-Number(props.driver.timeStamp))/1000;
	let lastUpdatedMessage = lastUpdated.toFixed(0)+' seconds ago';
	if(lastUpdated > 60){
		lastUpdated = lastUpdated/60;
		lastUpdatedMessage = lastUpdated.toFixed(0)+' minutes ago';
		if(lastUpdated >= 60) 
			lastUpdatedMessage = 'More than 1 hour ago'
	}
	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h3" gutterBottom>
					Driver - {props.index}
				</Typography>
				<Typography variant="body2" component="p">
					Status: {props.driver.status} <br />
					Occupied - Seats: {props.driver.occupiedSeats} <br />
					Destination: {(props.driver.destination) ? props.driver.destination : 'Not Set'} <br />
					Last Updated: {lastUpdatedMessage}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="secondary" href={`tel:+91${props.driver.phoneNumber}`}>
					Call
					<CallIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default DriverInfoCard;