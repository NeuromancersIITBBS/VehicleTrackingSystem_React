import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from '../../Data/Constants';
import RequestedDriverCard from '../../UI/RequestedDriverCard/RequestedDriverCard';
import { initRequestedDrivers, rejectDriver, verifyDriver } from '../../Store/actions/adminActions';
import { verifyDriversList, rejectDriverRequest } from '../../utils/adminUtils';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';



const styles = (theme) => ({
	main: {
		flexGrow: 1,
		padding: 4,
		marginTop: theme.spacing(2)
	},
	selectButton: {
		marginTop: 12,
		marginBottom: 2
	},
	verifyButton: {
		marginTop: 12,
		marginBottom: 2
	}
});


class RequestedDivers extends Component {
	state = {
		isLoading: false,
		select: 'Select Drivers',
		selected: []
	};
	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			let response = await fetch(`${BASE_URL}/vts/admin/getRequestedDrivers`);
			let data = await response.json();
			console.log('Data fetched: ');
			console.log(data);
			this.props.initRequestedDrivers(data);
			this.setState({ isLoading: false });
		} catch (e) {
			alert('Failed Loading response!! Check  the internet connection.');
			this.setState({ isLoading: false });
		}
	}
	toggleSelect(select) {
		const update = select === 'Select Drivers' ? 'Unselect' : 'Select Drivers';
		this.setState({ select: update });
	}
	async verifySelected() {
		const dList = [];
		const requestedDrivers = this.props.requestedDrivers;
		const selected = this.state.selected;
		if (selected.length) {
			selected.map(index => { dList.push(requestedDrivers[index]); return null; });
			this.setState({ isLoading: false });
			let response = await verifyDriversList(dList);
			if (response) {
				dList.map(driver => { this.props.verifyDriver(driver); return null; });
			}
			this.setState({ isLoading: false });
		}
		else {
			alert('Select atleast one driver');
		}
	}
	RequestedDriversCards = (requestedDrivers) => {
		//console.log(requestedDrivers);
		const noRequestedDrivers = (
			<Card variant="outlined">
				<CardContent>
					<Typography color="secondary" variant="h6" align="center">
						No pending Driver requests !
					</Typography>
				</CardContent>
			</Card>
		);
		const driverCards = requestedDrivers.map((driver, index) => {
			const select = this.state.select;
			const verifyHandler = async (dList) => {
				this.setState({ isLoading: true });
				console.log('Event triggered..verify driver');
				let response = await verifyDriversList(dList);
				if (response) {
					dList.map(driver => { this.props.verifyDriver(driver); return null; });
				}
				this.setState({ isLoading: false });
			};
			const rejectHandler = async (phoneNumber) => {
				console.log('Event triggered..reject driver');
				this.setState({ isLoading: true });
				let response = await rejectDriverRequest(phoneNumber);
				console.log(response);
				if (response) {
					this.props.rejectDriver(phoneNumber);
				}
				this.setState({ isLoading: false });
			};

			const handleChange = (index) => {
				console.log('Handle Change');
				const selected = this.state.selected;
				if (this.state.selected.find(element => element === index) === index) {
					const updateSelected = selected.filter(element => element !== index);
					this.setState({ selected: updateSelected });
				}
				else {
					selected.push(index);
					this.setState({ selected: selected });
				}
			};
			return (
				<Grid container justify="center" item xs={12} lg={6} key={index}>
					<RequestedDriverCard driver={driver} rejectHandler={rejectHandler} verifyHandler={verifyHandler} handleChange={handleChange} select={select} index={index} />
				</Grid>
			);
		});
		return (
			<div>
				<Grid container spacing={1} justify="center" >
					{requestedDrivers.length ? driverCards : noRequestedDrivers}
				</Grid>
			</div>
		);
	};
	render() {
		const { classes, requestedDrivers } = this.props;
		const select = this.state.select;
		//console.log(requestedDrivers);
		return (
			<>{requestedDrivers.length ?
				(<Grid container justify="flex-end">
					{(select !== 'Select Drivers') ? (<Grid item xs={6} container justify="center">
						<Button className={classes.verifyButton} variant="contained" color="secondary" size="small" onClick={() => { this.verifySelected(); }}>Verify Drivers</Button>
					</Grid>) : null}
					<Grid item xs={6} container justify="center">
						<Button className={classes.selectButton} variant="contained" color="secondary" size="small" onClick={() => { this.toggleSelect(select); }} >{select}</Button>
					</Grid>
				</Grid>) : null}
			<div className={classes.main} justify="center" >
				<Grid container justify="center" >
					{this.state.isLoading ? (<CircularProgress color="secondary" />) : this.RequestedDriversCards(requestedDrivers)}
				</Grid>
			</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		requestedDrivers: state.admin.requestedDrivers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		initRequestedDrivers: (requestedDrivers) => dispatch(initRequestedDrivers(requestedDrivers)),
		verifyDriver: (driver) => dispatch(verifyDriver(driver)),
		rejectDriver: (phoneNumber) => dispatch(rejectDriver(phoneNumber))
	};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RequestedDivers));