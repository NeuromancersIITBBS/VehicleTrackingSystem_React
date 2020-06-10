import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';
import { initSocketListeners } from './utils/SocketUtils';

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

export default App;