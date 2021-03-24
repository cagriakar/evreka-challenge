/* eslint-disable react/jsx-props-no-spreading */
import { Box, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../assets/styles/style';
import { actionTypeSelection } from '../../types';
import TabPanel from '../TabPanel';

interface FirstTabPanelProps {
    handleTextChange: ({
        // eslint-disable-next-line @typescript-eslint/no-shadow
        target: { value }
    }: {
        target: { value: string };
    }) => void;
    remaining: number;
    text: string;
    selectedAction: actionTypeSelection;
    formStep: number;
}

const SecondTabPanel = ({
    remaining,
    text,
    formStep,
    handleTextChange,
    selectedAction
}: FirstTabPanelProps): JSX.Element => {
    const classes = useStyles();
    return (
        <TabPanel value={formStep} index={1}>
            <Box my={-2}>
                {selectedAction === 'Mark As Resolved' && (
                    <>
                        <Typography
                            variant="body2"
                            style={{ fontSize: 18 }}
                            color="textSecondary"
                        >
                            Mark As Resolved
                        </Typography>

                        <Typography
                            variant="body1"
                            style={{ fontSize: 14 }}
                            color="textSecondary"
                        >
                            Mark this event as resolved and enter the details of
                            the resolution.
                        </Typography>
                    </>
                )}
                {selectedAction === 'Change Asset' && (
                    <>
                        <Typography
                            variant="body2"
                            style={{ fontSize: 18 }}
                            color="textSecondary"
                        >
                            Change Asset
                        </Typography>

                        <Typography
                            variant="body1"
                            style={{ fontSize: 14 }}
                            color="textSecondary"
                        >
                            Change the asset with another one.
                        </Typography>
                    </>
                )}
                <Box mt={6} position="relative">
                    <TextField
                        autoFocus
                        variant="outlined"
                        id="detail"
                        label="Resolution Detail"
                        fullWidth
                        multiline
                        rows={6}
                        InputLabelProps={{
                            shrink: false,
                            className: classes.text
                        }}
                        color="secondary"
                        required
                        InputProps={{
                            classes: {
                                multiline: classes.textField
                            }
                        }}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        inputProps={{ maxlength: 300 }}
                        value={text}
                        onChange={handleTextChange}
                    />
                    <Typography
                        variant="body1"
                        className={classes.remainingText}
                    >
                        ({remaining}/300)
                    </Typography>
                </Box>
            </Box>
        </TabPanel>
    );
};

export default SecondTabPanel;
