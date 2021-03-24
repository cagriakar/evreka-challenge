import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

interface ActionButtonsContainerProps {
    handleNoActionNeededClicked: () => void;
    handleTakeActionClicked: () => void;
}

const ActionButtonsContainer = ({
    handleNoActionNeededClicked,
    handleTakeActionClicked
}: ActionButtonsContainerProps): JSX.Element => {
    return (
        <Grid container justify="space-around" alignItems="center" spacing={1}>
            <Grid item xs={6}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleNoActionNeededClicked}
                >
                    <Typography variant="body2" style={{ fontSize: 16 }}>
                        No Action Needed
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleTakeActionClicked}
                >
                    <Typography variant="body2" style={{ fontSize: 16 }}>
                        Take Action
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    );
};

export default ActionButtonsContainer;
