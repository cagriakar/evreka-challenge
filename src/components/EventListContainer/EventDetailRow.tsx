import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Detail } from '../../types';

const EventDetailRow = ({
    detail: { format, title, value }
}: {
    detail: Detail;
}): JSX.Element => {
    return (
        <Grid item xs={3}>
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
                {format === 'date'
                    ? Intl.DateTimeFormat('tr', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit'
                      }).format(Date.parse(value))
                    : value}
            </Typography>
        </Grid>
    );
};

export default EventDetailRow;
