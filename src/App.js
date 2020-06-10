import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';
import { initDriversList } from './store/actions/driverActions';
import { connect } from 'react-redux';

class App extends Component{
  componentDidMount(){
    // Establish socket connection here

    // Setup all socket listners here

    // Fetch and propagate initial data in the redux store

    // TESTING
    this.props.initDriversList([{
      phoneNumber: '123456789',
      status: 'active',
      occupiedSeats: 4,
      destination: 'MHR',
      timeStamp: 1591709716004
    }, {
      phoneNumber: '123456789',
      status: 'inactive',
      occupiedSeats: 10,
      destination: 'MBLD',
      timeStamp: Date.now()
    }]);

  }
  render(){
    return (
      <div className="App" style={{ height: '100vh', overflow: 'auto'}}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return({
		initDriversList: arg => dispatch(initDriversList(arg)),
	});
};

export default connect(null, mapDispatchToProps)(App);