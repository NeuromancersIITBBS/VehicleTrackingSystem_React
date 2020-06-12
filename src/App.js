import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';
import DriverPage from './Pages/Driver/Driver';
import { initSocketListeners } from './utils/SocketUtils';
import { setStorage, readStorage } from './utils/LocalStorageUtil';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9765F4',
    },
    secondary: {
      main: '#00e5ff',
    }
  },
});

const lightTheme = createMuiTheme();
  
class App extends Component{
  state = {
    theme: readStorage('theme')
  };

  setLightTheme = () => {
    this.setState({theme: 'light'});
    setStorage('theme', 'light');
  };
  
  setDarkTheme = () => {
    this.setState({theme: 'dark'});
    setStorage('theme', 'dark');
  };
  
  componentDidMount(){
    initSocketListeners();
  }
  

  render(){
    const theme = (this.state.theme  ? (this.state.theme === 'light' ? lightTheme:darkTheme) : lightTheme); 
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={{ height: '100vh', overflow: 'auto'}}>
        <BrowserRouter>
          <Navbar 
            setDarkTheme={this.setDarkTheme} 
            setLightTheme={this.setLightTheme} 
            currTheme={this.state.theme}/>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route exact path="/driver" component={DriverPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    );
  }
}

export default App;