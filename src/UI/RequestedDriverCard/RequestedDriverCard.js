import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,FormControlLabel,FormGroup,Checkbox} from '@material-ui/core';
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

const RequestedDriverCard = (props) => {
	const classes = useStyles();
    const {driver,handleChange,index} = props;
	const dList = [driver];
    // const handleChange = ()=> {
    //     props.toggleDriver(props.index);
    // }
	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				{(props.select==='Unselect')?(<FormGroup >
                    <FormControlLabel
                        control={
                            <Checkbox onChange={()=>{handleChange(index)}} name="Driver" />
                        }
                        label="Select"
                    />
                </FormGroup>):null}
				<Typography variant="h6" component="h3" gutterBottom>
					Driver Name: {driver.driverName} <br />
                    Phone Number: {driver.phoneNumber}
				</Typography>
                <CardActions>
			    	<Button size="small" color="secondary" href={`tel:+91${driver.phoneNumber}`}>
				    	Call
					    <CallIcon />&nbsp;
				    </Button>
					{(props.select!=='Unselect')? (<><Button size="medium" color="primary" onClick={()=>props.verifyHandler(dList)}>
						Verify
					</Button>
					<Button size="medium" color="primary" onClick={()=>props.rejectHandler(driver.phoneNumber)}>
						Reject
					</Button></>):null}
			    </CardActions>
			</CardContent>
		</Card>
	);
};

export default RequestedDriverCard;