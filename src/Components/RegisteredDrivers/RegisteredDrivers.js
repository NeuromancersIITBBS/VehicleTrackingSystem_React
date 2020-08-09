import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from '../../Data/Constants';
import RegisteredDriverCard from '../../UI/RegisteredDriverCard/RegisteredDriverCard'
import { initRegisteredDrivers, deleteDriver} from '../../Store/actions/adminActions'
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import {Typography,Card,CardContent} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

 

const styles = (theme) => ({
	main: {
		flexGrow: 1,
		padding: 4,
		marginTop: theme.spacing(2)
    }
});


class RegisteredDivers extends Component{
    state= {
        isLoading: false
    };
    async componentDidMount(){
        this.setState({isLoading: true});
		try{
			let response = await fetch(`${BASE_URL}/vts/admin/allDrivers`);
            let data = await response.json();
            console.log(data);
            this.props.initRegisteredDrivers(data);
            this.setState({isLoading: false});
		}catch(e){
			alert('Failed Loading response!! Check  the internet connection.')
			this.setState({isLoading: false});
		}
    }

    
    registeredDriversCards = (driversList) => {
        console.log(driversList);
        const noRegisteredDrivers = (
            <Card variant="outlined">
                <CardContent>
                    <Typography color="secondary" variant="h6" align="center">
                        No drivers are registered yet !
                    </Typography>
                </CardContent>
            </Card>
        );
        const driverCards = driversList.map((driver, index) => {
            const deleteHandler = async (phoneNumber) => {
                console.log('Event triggered..delete driver');
                const requestOptions = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({phoneNumber})
                }
                this.setState({isLoading: true});
                try{
                    let response = await fetch(`${BASE_URL}/vts/admin/deleteDriver`,requestOptions);
                    let json = await response.json();
                    if(response.ok){
                        this.props.deleteDriver(phoneNumber);
                        this.setState({isLoading: false});
                    }
                    else{
                        alert(json.messsage || 'Driver not found in data base.');
                        this.setState({isLoading: false});
                    }

                }
                catch{
                    alert('Failed Loading response!! Check  the internet connection.')
                    this.setState({isLoading: false});
                }
            }
            return (
                <Grid container justify ="center" item xs={12} lg={6} key={index}>
                    <RegisteredDriverCard driver = {driver} deleteHandler = {deleteHandler} index ={index} />
                </Grid>
            );
        });
        return (
            <div>
                <Grid container spacing={1} justify="center" >
                    {driversList.length ? driverCards : noRegisteredDrivers}
                </Grid>
            </div>
        )
    };
    render(){ 
        const {classes,driversList} = this.props;
        //console.log(driversList)
        return (
            <div className={classes.main} justify="center" >
                <Grid container justify="center" >
                    {this.state.isLoading ? (<CircularProgress color="secondary" />) : this.registeredDriversCards(driversList)}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        driversList: state.admin.registeredDrivers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
        initRegisteredDrivers: (driverList) => dispatch(initRegisteredDrivers(driverList)),
        deleteDriver: (phoneNumber) => dispatch(deleteDriver(phoneNumber))
	};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisteredDivers));