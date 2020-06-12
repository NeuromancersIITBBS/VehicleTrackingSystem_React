import React, { Component } from 'react';
import { pickupPoints } from '../../Data/PickupPoints';
import { driverStatus } from '../../Data/DriverStatus';
import { connect } from 'react-redux';
import { getLocation } from '../../utils/HelperFunctions';
import { emitDriverLocation, emitDriverData } from '../../utils/SocketUtils';
import { DRIVER_LOCATION_UPDATE_INTERVAL } from '../../Data/Constants';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = (theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	numBtns: {
		padding: theme.spacing(2),
	},
	formControl: {
		marginTop: theme.spacing(2),
	}
});

class DriverPanel extends Component{
	state = {
		occupiedSeats: 0,
		destination: 'NotSet',
		status: 'active',
	};
	// If destination is "NotSet" send null to the backend
	
	componentDidMount(){
		// Update location after every 30 seconds
		this.timerRef = setInterval(async () => {
			if(this.props.driverToken){
				const location = await getLocation();
				emitDriverLocation({location, token: this.props.driverToken});
			}
		}, DRIVER_LOCATION_UPDATE_INTERVAL*60*1000);
	}
	
	componentWillUnmount(){
		clearInterval(this.timerRef);
	}


	incOccupiedSeats = () => {
		const occupiedSeats = this.state.occupiedSeats;
		const seats = occupiedSeats < 20 ? occupiedSeats + 1 : occupiedSeats;
		this.setState({occupiedSeats: seats});
	};
	
	decOccupiedSeats = () => {
		const occupiedSeats = this.state.occupiedSeats;
		const seats = occupiedSeats > 0 ? occupiedSeats - 1 : occupiedSeats;
		this.setState({occupiedSeats: seats});
	};

	stateChangeHandler = (event) => {
		this.setState({[event.target.id]: event.target.value});
	};

	updateInformation = async (event) => {
		event.preventDefault();
		const driverData = {...this.state};
		if(driverData.destination === 'NotSet'){
			driverData.destination = null;
		}
		if(!this.props.driverToken){
			alert('Login before updating the data!');
		}
		driverData.token = this.props.driverToken;
		driverData.timeStamp = Date.now();
		driverData.location = await getLocation();

		console.log(driverData);
		emitDriverData(driverData);
	};

	render(){
		const {classes} = this.props;
		const locationsList = pickupPoints.map(location => {
			return <option value={location.val} key={location.val}>&nbsp;&nbsp;{location.text}</option>
		});
		const statusList = driverStatus.map(status => {
			return <option value={status.val} key={status.val}>&nbsp;&nbsp;{status.text}</option>
		});
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<form className={classes.form}>
						<Typography align="center" variant="subtitle1">Occupied Seats</Typography>
						<Grid container>
							<Grid item xs={4}>
								<Button variant="contained" color="primary" fullWidth onClick={this.incOccupiedSeats}>
									+
								</Button>
							</Grid >
							<Grid item xs={4}>
								<Typography style={{ margin: '2px' }} align="center" variant="h6">
									{this.state.occupiedSeats}
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Button variant="contained" color="primary" fullWidth onClick={this.decOccupiedSeats}>
									-
								</Button>
							</Grid>
						</Grid>
						<FormControl fullWidth className={classes.formControl}>
							<InputLabel htmlFor="destination">Destination</InputLabel>
							<Select
								fullWidth
								native
								id="destination"
								onChange={this.stateChangeHandler}
								value={this.state.destination}>
								<option value="NotSet">&nbsp;&nbsp;Uncertain</option>
								{ locationsList }
							</Select>
						</FormControl>
						<FormControl fullWidth className={classes.formControl}>
							<InputLabel htmlFor="status">Status</InputLabel>
							<Select
								fullWidth
								native
								id="status"
								onChange={this.stateChangeHandler}
								value={this.state.status}>
								{ statusList }
							</Select>
						</FormControl>
						<FormControl fullWidth className={classes.formControl}>
							<Button 
								onClick={this.updateInformation} 
								color="primary" 
								variant="contained"
								type="submit">
								Update Information
							</Button>
						</FormControl>
					</form>
				</div>
			</Container>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		driverToken: state.driver.driverToken
	};
};

export default withStyles(styles)(connect(mapStateToProps)(DriverPanel));
