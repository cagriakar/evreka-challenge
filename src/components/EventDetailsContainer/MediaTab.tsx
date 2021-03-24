import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    Typography
} from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Image from 'material-ui-image';
import React, { useState } from 'react';
import { Media } from '../../types';
import Transition from '../Transition';

interface DetailsTabProps {
    media: Media[] | undefined;
}

const MediaTab = ({ media }: DetailsTabProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box position="relative">
            <Image
                src={media?.[0].url ?? ''}
                aspectRatio={16 / 9}
                disableTransition
                disableSpinner
                iconContainerStyle={{
                    ...(media?.[0].type !== 'image' && {
                        backgroundColor: 'white'
                    })
                }}
                style={{}}
                errorIcon={
                    <Typography variant="body1" color="textSecondary">
                        No Media Content
                    </Typography>
                }
            />
            {media?.[0].type === 'image' && (
                <IconButton
                    onClick={handleClickOpen}
                    aria-label="full-size"
                    style={{
                        position: 'absolute',
                        right: 10,
                        bottom: 10,
                        color: 'white'
                    }}
                >
                    <FullscreenIcon fontSize="large" />
                </IconButton>
            )}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                style={{ display: 'relative' }}
            >
                <DialogContent>
                    <img src={media?.[0].url ?? ''} alt="media-original-size" />
                </DialogContent>
                <IconButton
                    onClick={handleClose}
                    aria-label="full-size"
                    style={{
                        position: 'absolute',
                        right: 20,
                        bottom: 10,
                        color: 'white'
                    }}
                >
                    <FullscreenExitIcon fontSize="large" />
                </IconButton>
            </Dialog>
        </Box>
    );
};

export default MediaTab;
