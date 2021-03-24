/* eslint-disable react/jsx-props-no-spreading */
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../assets/styles/style';
import { actionTypeSelection } from '../../types';
import TabPanel from '../TabPanel';

interface FirstTabPanelProps {
    handleOnClick: (type: number) => void;
    selectedAction: actionTypeSelection;
    formStep: number;
}

const FirstTabPanel = ({
    formStep,
    handleOnClick,
    selectedAction
}: FirstTabPanelProps): JSX.Element => {
    const classes = useStyles();
    return (
        <TabPanel value={formStep} index={0}>
            <Button
                onClick={() => handleOnClick(0)}
                color={
                    selectedAction === 'Mark As Resolved'
                        ? 'secondary'
                        : 'default'
                }
                variant="contained"
                style={{
                    marginBottom: 15
                }}
                classes={{ label: classes.buttonLabel }}
                fullWidth
            >
                <Typography
                    variant="body2"
                    style={{ fontSize: 18 }}
                    color={
                        selectedAction === 'Mark As Resolved'
                            ? 'inherit'
                            : 'textSecondary'
                    }
                >
                    Mark As Resolved
                </Typography>

                <Typography
                    variant="body1"
                    style={{ fontSize: 14 }}
                    align="left"
                >
                    Mark this event as resolved and enter the details of the
                    resolution.
                </Typography>
            </Button>
            <Button
                onClick={() => handleOnClick(1)}
                color={
                    selectedAction === 'Change Asset' ? 'secondary' : 'default'
                }
                variant="contained"
                classes={{ label: classes.buttonLabel }}
                fullWidth
            >
                <Typography
                    variant="body2"
                    style={{ fontSize: 18 }}
                    color={
                        selectedAction === 'Change Asset'
                            ? 'inherit'
                            : 'textSecondary'
                    }
                >
                    Change Asset
                </Typography>

                <Typography
                    variant="body1"
                    style={{ fontSize: 14 }}
                    align="left"
                >
                    Change the asset with another one.
                </Typography>
            </Button>
        </TabPanel>
    );
};

export default FirstTabPanel;
