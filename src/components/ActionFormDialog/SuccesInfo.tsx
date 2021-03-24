import { Grid, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import React from 'react';

const SuccesInfo = (): JSX.Element => {
    return (
        <>
            <Grid item>
                <CheckCircleOutlineIcon
                    style={{ fontSize: 60 }}
                    color="primary"
                />
            </Grid>
            <Grid item>
                <Typography variant="h3" color="primary">
                    ACTION HAS BEEN TAKEN!
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ fontSize: 16 }}
                >
                    You can see the action details from details tab.
                </Typography>
            </Grid>
        </>
    );
};

export default SuccesInfo;
