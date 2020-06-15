import React from 'react'
import Map from '../../Components/Map/Map2'
import UserPanel from '../../Components/UserPanel/UserPanel'
import BookModal from '../../Components/BookModal/BookModal'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	mapDiv: {
		height: '50vh',
		[theme.breakpoints.up('md')]: {
			height: '90vh'
		},
	}
}))

const User = () => {
	const classes = useStyles()
	return (
		<div>
			<BookModal />
			<Grid container justify="center" className={classes.root} alignItems="stretch">
				<Grid item xs={12} md={6} className={classes.mapDiv}>
					<Map />
				</Grid>
				<Grid item xs={12} md={6}>
					<UserPanel />
				</Grid>
			</Grid>
		</div>
	)
}

export default User
