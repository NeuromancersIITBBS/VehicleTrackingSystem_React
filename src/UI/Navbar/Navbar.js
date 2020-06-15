import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import BOVTariff from '../../Data/Tariff/BOVTariff.pdf';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LightMode from '@material-ui/icons/WbSunny';
import NightMode from '@material-ui/icons/Brightness3';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	},
	navRight: {
		marginLeft: 'auto',
	}
}));

const Navbar = (props) => {

	const classes = useStyles();
	const [drawerState, setDrawerState] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawerState(open);
	};

	const themeState = props.currTheme;
	const themeHandler = (themeState === 'light') ? props.setDarkTheme : props.setLightTheme;

	const list = (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem button component={RouterLink} to='/' color='inherit'>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>
				<ListItem button component={RouterLink} to='/legends' color='inherit'>
					<ListItemIcon>
						<DescriptionIcon />
					</ListItemIcon>
					<ListItemText primary='Legends' />
				</ListItem>
				<ListItem button component="a" href={BOVTariff} target="_blank" color='inherit'>
					<ListItemIcon>
						<ArrowDownward />
					</ListItemIcon>
					<ListItemText primary='BOV Tariff Card' />
				</ListItem>
				<ListItem button component={RouterLink} to='/aboutus' color='inherit'>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText primary='About Us' />
				</ListItem>
				<ListItem button component={RouterLink} to='/driver' color='inherit'>
					<ListItemIcon>
						<DirectionsCarIcon />
					</ListItemIcon>
					<ListItemText primary='Driver Page' />
				</ListItem>	
			</List>
		</div>
	);

	const appBar = (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>
				<IconButton
					edge="start"
					className={classes.navRight}
					color="inherit"
					aria-label="menu"
					onClick={themeHandler}>
					{themeState==='light' ? <NightMode />:<LightMode />}
				</IconButton>
				<IconButton
					component={RouterLink} 
					to='/' 
					edge="start"
					color="inherit"
					aria-label="menu">
					<HomeIcon />
				</IconButton>
			</Toolbar>
		</AppBar>);

	return (
		<>
			{appBar}
			<Drawer open={drawerState} onClose={toggleDrawer(false)}>
				{list}
			</Drawer>
		</>
	);
}

export default Navbar;
