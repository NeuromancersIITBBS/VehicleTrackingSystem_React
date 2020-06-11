import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDriverToken } from '../../Store/actions/driverActions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
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
});

function TabPanel(props) {
	const { children, value, index } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			aria-labelledby={value ? 'Sign-Up' : 'Login'}
		>
			{value === index && (
				<>
					{children}
				</>
			)}
		</div>
	);
}

class DriverLogin extends Component {
	state = {
		login: 0,
		phoneNumber: '',
		password: '',
		passwordConf: '',
		isLoading: false,
	}

	tabChangeHandler = (event, newValue) => {
		this.setState({ login: newValue });
	};

	inputChangeHandler = (event) => {
		this.setState({ [event.target.id]: event.target.value })
	};

	loginHandler = async (event) => {
		event.preventDefault();
		const driverData = {
			phoneNumber: this.state.phoneNumber,
			password: this.state.password,
		};
		this.setState({isLoading: true});
		let response = await fetch('https://vts189.herokuapp.com/vts/new_driver/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(driverData)
		});
		
		let json = await response.json();
		if (response.ok) {
			this.props.saveToken(json.token);
		} else {
			alert(json.message || 'Login failed!');
		}

		this.setState({isLoading: false});
	}

	render() {
		const { classes } = this.props;
		const loginForm = (<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Tabs value={this.state.login} onChange={this.tabChangeHandler} aria-label="Login and Sign Up">
					<Tab label="Login" />
					<Tab label="Sign Up" />
				</Tabs>

				<form className={classes.form}>
					<TextField
						error={isNaN(this.state.phoneNumber) || this.state.phoneNumber.length !== 10}
						helperText="Enter 10 digit phone number."
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="phoneNumber"
						label="Phone Number"
						name="PhoneNumber"
						onChange={this.inputChangeHandler}
						autoFocus
					/>
					<TextField
						error={this.state.password.length < 5}
						helperText="Password should contain at least 5 characters."
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						onChange={this.inputChangeHandler}
						autoComplete="off"
					/>
					<TabPanel value={this.state.login} index={0}>
						<Button
							disabled={isNaN(this.state.phoneNumber) || this.state.phoneNumber.length !== 10
								|| this.state.password.length < 5}
							type="submit"
							onClick={this.loginHandler}
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Login
				</Button>
					</TabPanel>
					<TabPanel value={this.state.login} index={1}>
						<TextField
							error={this.state.password !== this.state.passwordConf}
							helperText="Both the passwords should match."
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="confirm password"
							label="Confirm Password"
							type="password"
							id="passwordConf"
							onChange={this.inputChangeHandler}
							autoComplete="off"
						/>
						<Button
							disabled={isNaN(this.state.phoneNumber) || this.state.phoneNumber.length !== 10
								|| this.state.password !== this.state.passwordConf
								|| this.state.password.length < 5}
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign Up
				</Button>
					</TabPanel>
				</form>
			</div>
		</Container>);
		
		return (
			<Dialog
				open={this.props.driverToken === null}
				aria-labelledby="login-dialog">
				<DialogContent>
					{this.state.isLoading ? (<CircularProgress color="secondary" />) :loginForm}
				</DialogContent>
			</Dialog>
		);
	}
};


const mapStateToProps = (state) => {
	return {
		driverToken: state.driver.driverToken
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveToken: (token) => dispatch(updateDriverToken(token))
	};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DriverLogin));
