import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class BookModal extends Component {
	state = {
		pickupPoint: 'MyLocation',
		destination: 'BHR'
	}

	changePickupPoint = (e) => {
		this.setState({ pickupPoint: e.target.value });
	};

	changeDestination = (e) => {
		this.setState({ destination: e.target.value });
	};

	makeBookRequest = async () => {
		this.props.closeDialog();
		const userData = { 
			location: {
				pickupPoint: this.state.pickupPoint,
			}, 
			destination: this.state.destination,
			timeStamp: Date.now()
		};
		if (userData.location.pickupPoint === 'MyLocation') {
			const locationPromise = new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					location => resolve(location),
					err => reject(err)
				)
			});
			const locationData = await locationPromise;
			userData.location.location = {
				lat: locationData.coords.latitude, 
				lng: locationData.coords.longitude
			}
		}
		console.log(userData);
		// Emit userData to the backend
	};

	cancelBooking = () => {
		this.props.closeDialog();
	};

	getLocationsList = () => {
		const locations = [
			{ val: 'BHR', text: 'BHR' },
			{ val: 'MHR', text: 'MHR' },
			{ val: 'SHR', text: 'SHR' },
			{ val: 'GHR', text: 'GHR' },
			{ val: 'LG', text: 'L-Gate' },
			{ val: 'MBLD', text: 'Admin Building' },
			{ val: 'MG', text: 'Main Gate' },
			{ val: 'SES', text: 'SES' },
			{ val: 'LBCF', text: 'LBC Front' },
			{ val: 'LBCC', text: 'LBC Charging Point' },
			{ val: 'SBS', text: 'SBS' },
			{ val: 'SIF', text: 'SIF' },
			{ val: 'SMS', text: 'SMS' },
			{ val: 'CC', text: 'Community Center' },
			{ val: 'GH', text: 'Guest House' },
			{ val: 'SC', text: 'Shopping Complex' },
			{ val: 'SQ', text: 'Staff Quarters' },
		];
		return locations;
	};

	render() {

		const locationsList = this.getLocationsList().map(location => {
			return <option value={location.val} key={location.val}>&nbsp;&nbsp;{location.text}</option>
		});

		return (
			<div>
				<Dialog
					open={this.props.dialogState ? true : false}
					onClose={this.props.closeDialog}
					aria-labelledby="book-dialog-title">
					<DialogTitle id="book-dialog-title">Book</DialogTitle>
					
					<DialogContent>
						<form>
							<FormControl>
								<InputLabel htmlFor="pickupPoint">Pickup Point</InputLabel>
								<Select
									native
									value={this.state.pickupPoint}
									onChange={this.changePickupPoint}
									input={<Input id="pickupPoint" />}>
									<option value="MyLocation">&nbsp;&nbsp;My Location</option>
									{locationsList}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel htmlFor="destination">Destination</InputLabel>
								<Select
									native
									value={this.state.destination}
									onChange={this.changeDestination}
									input={<Input id="destination" />}>
									{locationsList}
								</Select>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.cancelBooking} color="primary">
							Cancel
						</Button>
						<Button onClick={this.makeBookRequest} color="primary">
							Book
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default BookModal;