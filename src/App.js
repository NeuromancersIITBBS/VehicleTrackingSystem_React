import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';
import { initDriversList } from './Store/actions/driverActions';
import { connect } from 'react-redux';
import { initSocketListeners } from './SocketUtils/initSocket';

class App extends Component{
  componentDidMount(){
    initSocketListeners();
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
		initDriversList: driverList => dispatch(initDriversList(driverList)),
	});
};

export default connect(null, mapDispatchToProps)(App);