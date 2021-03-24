import { Grid, Typography } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import React from 'react';

const ErrorInfo = (): JSX.Element => {
    return (
        <>
            <Grid item>
                <CancelOutlinedIcon style={{ fontSize: 60 }} color="error" />
            </Grid>
            <Grid item>
                <Typography variant="h3" color="error">
                    A PROBLEM OCCURED!
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ fontSize: 16 }}
                >
                    We cannot continue due to a problem.
                </Typography>
            </Grid>
        </>
    );
};

export default ErrorInfo;
