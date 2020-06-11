import React, {useEffect} from 'react';
import { pickupPoints } from '../../Data/PickupPoints';
import { driverStatus } from '../../Data/DriverStatus';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

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
	const lastUpdatedVal = (Date.now()-Number(props.driver.timeStamp))/(1000*60);
	const [lastUpdatedTime, setLastUpdatedTime] =  useState(lastUpdatedVal.toFixed(0));
	
	const getPickupPointName = (val) => {
		const pickupPoint = pickupPoints.find(point => point.val === val);
		if(!pickupPoint) return val;
		return pickupPoint.text;
	};

	const getStatusText = (val) => {
		const dStatus = driverStatus.find(status => status.val === val);
		if(!dStatus) return val;
		return dStatus.text;
	};
	
	useEffect(() => {
		let timerRef = setInterval(() => {
			const time = (Date.now()-Number(props.driver.timeStamp)) / (1000*60) ;
			setLastUpdatedTime(time <= 60 ? time.toFixed(0):'More than 60');
		}, 2*60*1000);
		return () => {
			clearInterval(timerRef);
		}
	}, [props.driver.timeStamp])

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h3" gutterBottom>
					Driver - {props.index}
				</Typography>
				<Typography variant="body2" component="p">
					Status: {getStatusText(props.driver.status)} <br />
					Occupied - Seats: {props.driver.occupiedSeats} <br />
					Destination: {(props.driver.destination) ? getPickupPointName(props.driver.destination) : 'Not Set'} <br />
					Last Updated: {lastUpdatedTime+' minutes ago'}
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