import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const BookPanel = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container alignItems='center' justify='center'>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={props.openDialog}>
                        Book
				</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default BookPanel;
