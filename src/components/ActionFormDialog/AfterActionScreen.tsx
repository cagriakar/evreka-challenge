import {
    Box,
    Button,
    CircularProgress,
    Grid,
    IconButton,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react';
import { useActions, useEvents } from '../../context/EventContext';
import { actionTypeSelection } from '../../types';
import ErrorInfo from './ErrorInfo';
import SuccesInfo from './SuccesInfo';

const AfterActionScreen = ({
    text,
    handleOnClose,
    selectedAction
}: {
    text: string;
    handleOnClose: () => void;
    selectedAction: actionTypeSelection;
}): JSX.Element => {
    const actions = useActions();
    const ctx = useEvents();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);

            if (text.length > 0) {
                actions?.takeAction(ctx?.selectedEvent, selectedAction);
                setIsValid(true);
                return;
            }
            setIsValid(false);
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, selectedAction]);

    const handleOnClick = () => {
        setIsLoading(true);
        setIsValid(false);
        handleOnClose();
    };

    return (
        <Box
            minWidth={500}
            height={250}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
            px={4}
        >
            {isLoading && <CircularProgress />}
            {isValid && (
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <SuccesInfo />
                    <Grid item>
                        <Box mt={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleOnClick}
                            >
                                <Typography
                                    variant="body2"
                                    style={{ fontSize: 16 }}
                                >
                                    OK
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            )}
            {!isLoading && !isValid && (
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <ErrorInfo />
                    <Grid item>
                        <Typography
                            variant="body1"
                            color="textPrimary"
                            style={{ fontSize: 16, marginTop: -10 }}
                        >
                            Please try again later.
                        </Typography>
                    </Grid>
                </Grid>
            )}
            {!isLoading && (
                <IconButton
                    onClick={handleOnClick}
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
            )}
        </Box>
    );
};

export default AfterActionScreen;
