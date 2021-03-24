import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Detail } from '../../types';

interface DetailsTabProps {
    details: Detail[] | undefined;
}

const DetailsTab = ({ details }: DetailsTabProps): JSX.Element => {
    return (
        <Grid container spacing={2}>
            {details?.map(({ title, value }, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid item xs={6} key={index}>
                    <Typography
                        variant="h3"
                        color="textSecondary"
                        align="left"
                        style={{ fontSize: 16 }}
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        align="left"
                        style={{ fontSize: 13, fontWeight: 400 }}
                    >
                        {value}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default DetailsTab;
