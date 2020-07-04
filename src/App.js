import React, { Component, Suspense, lazy }from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import UserPage from './Pages/User/User';
import { initSocketListeners } from './utils/SocketUtils';
import { setStorage, readStorage } from './utils/LocalStorageUtil';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

const DriverPage = lazy(() => import('./Pages/Driver/Driver'));
const LegendsPage = lazy(() => import('./Pages/Legends/Legends'));
const AboutUs = lazy(() => import('./Pages/About/About'));
const AdminPage = lazy(()=> import('./Pages/Admin/Admin'))

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

class App extends Component {
	state = {
		theme: readStorage('theme')
	};

	setLightTheme = () => {
		this.setState({ theme: 'light' });
		setStorage('theme', 'light', null);
	};

	setDarkTheme = () => {
		this.setState({ theme: 'dark' });
		setStorage('theme', 'dark', null);
	};

	componentDidMount() {
		initSocketListeners();
	}


	render() {
		const theme = (this.state.theme ? (this.state.theme === 'light' ? lightTheme : darkTheme) : lightTheme);
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="App" style={{ height: '100vh', overflow: 'auto' }}>
					<BrowserRouter>
						<Navbar
							setDarkTheme={this.setDarkTheme}
							setLightTheme={this.setLightTheme}
							currTheme={this.state.theme ? this.state.theme : 'light'} />
						<Suspense fallback={
							<div style={{textAlign: "center", marginTop: "40vh"}}><CircularProgress color="secondary" /></div>
						}>
							<Switch>
								<Route exact path="/" component={UserPage} />
								<Route exact path="/driver" component={DriverPage} />
								<Route exact path="/aboutus" component={AboutUs} />
								<Route exact path="/legends" component={LegendsPage} />
                <Route exact path="/admin" component={AdminPage} />
							</Switch>
						</Suspense>
					</BrowserRouter>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;