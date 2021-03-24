/* eslint-disable react/jsx-props-no-spreading */
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import useStyles from '../../assets/styles/style';
import { actionTypeSelection } from '../../types';
import Transition from '../Transition';
import AfterActionScreen from './AfterActionScreen';
import FirstTabPanel from './FirstTabPanel';
import SecondTabPanel from './SecondTabPanel';
import Tabs from './Tabs';

const ActionFormDialog = ({
    open,
    handleClose
}: {
    open: boolean;
    handleClose: () => void;
}): JSX.Element => {
    const classes = useStyles();
    const [formStep, setFormStep] = useState<number>(0);
    const [selectedAction, setSelectedAction] = useState<actionTypeSelection>(
        null
    );
    const [text, setText] = useState<string>('');
    const [remaining, setRemaining] = useState<number>(300);

    const handleOnClick = (type: number): void =>
        setSelectedAction(!type ? 'Mark As Resolved' : 'Change Asset');

    const handleNext = (): void => {
        setFormStep((prevValue) => prevValue + 1);
    };
    const handleBack = (): void => {
        setFormStep((prevValue) => prevValue - 1);
    };

    const handleOnClose = (): void => {
        setFormStep(0);
        setSelectedAction(null);
        setText('');
        setRemaining(300);
        handleClose();
    };

    const handleTextChange = ({
        // eslint-disable-next-line @typescript-eslint/no-shadow
        target: { value }
    }: {
        target: { value: string };
    }) => {
        setText(value);
        setRemaining(300 - value.length);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleOnClose}
            style={{ display: 'relative' }}
            PaperProps={{ classes: { rounded: classes.dialogPaper } }}
        >
            <Box mb={2} mt={4}>
                {formStep < 2 && (
                    <>
                        <DialogContent>
                            <Tabs formStep={formStep} />
                            <FirstTabPanel
                                formStep={formStep}
                                handleOnClick={handleOnClick}
                                selectedAction={selectedAction}
                            />
                            <SecondTabPanel
                                formStep={formStep}
                                text={text}
                                selectedAction={selectedAction}
                                handleTextChange={handleTextChange}
                                remaining={remaining}
                            />
                        </DialogContent>
                        <DialogActions style={{ justifyContent: 'center' }}>
                            {formStep === 1 && (
                                <Button
                                    onClick={handleBack}
                                    color="secondary"
                                    variant="contained"
                                    className={classes.formButton}
                                >
                                    <Typography
                                        variant="body2"
                                        style={{ fontSize: 14 }}
                                    >
                                        Back
                                    </Typography>
                                </Button>
                            )}
                            <Button
                                onClick={handleNext}
                                color="primary"
                                variant="contained"
                                className={classes.formButton}
                                disabled={!selectedAction}
                            >
                                <Typography
                                    variant="body2"
                                    style={{ fontSize: 14 }}
                                >
                                    {formStep === 1 ? 'take action' : 'next'}
                                </Typography>
                            </Button>
                        </DialogActions>
                        <IconButton
                            onClick={handleOnClose}
                            aria-label="close"
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                fontWeight: 'bold',
                                color: 'black'
                            }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                )}
                {formStep === 2 && (
                    <AfterActionScreen
                        text={text}
                        handleOnClose={handleOnClose}
                        selectedAction={selectedAction}
                    />
                )}
            </Box>
        </Dialog>
    );
};

export default ActionFormDialog;
