import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import { useState } from 'react';
//,FormControlLabel,FormGroup,Checkbox

const useStyles = makeStyles({
	root: {
		minWidth: 200,
		marginBottom: 20
	},
	title: {
		fontSize: 14,
	}
});

const RegisteredDriverCard = (props) => {
	const classes = useStyles();
	const { driver, deleteHandler } = props;
	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h3" gutterBottom>
					Driver Name: {driver.driverName} <br />
                    Phone Number: {driver.phoneNumber}
				</Typography>
				<CardActions>
					<Button size="small" color="secondary" href={`tel:+91${driver.phoneNumber}`}>
						Call<CallIcon />&nbsp;
					</Button>
					<Button size="medium" color="primary" onClick={() => { deleteHandler(driver.phoneNumber); }}>
						Remove
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default RegisteredDriverCard;