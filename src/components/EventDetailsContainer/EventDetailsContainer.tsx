/* eslint-disable react/jsx-props-no-spreading */
import { Box, Paper, Tab, Tabs } from '@material-ui/core';
import { LatLngExpression } from 'leaflet';
import React, { useState } from 'react';
import { MapContainer } from 'react-leaflet';
import useStyles from '../../assets/styles/style';
import { useActions, useEvents } from '../../context/EventContext';
import a11yProps from '../../utils/a11yprops';
import ActionFormDialog from '../ActionFormDialog/ActionFormDialog';
import TabPanel from '../TabPanel';
import ActionButtonsContainer from './ActionButtonsContainer';
import DetailsTab from './DetailsTab';
import InnerMap from './InnerMap';
import MediaTab from './MediaTab';

const EventDetailsContainer = (): JSX.Element => {
    const classes = useStyles();
    const ctx = useEvents();
    const actions = useActions();

    const [value, setValue] = useState<number>(0);
    const [isActionFormOpen, setIsActionFormOpen] = useState<boolean>(false);

    const handleChange = (event: unknown, newValue: number): void => {
        setValue(newValue);
    };

    const handleNoActionNeededClicked = () => {
        actions?.noActionNeeded(ctx?.selectedEvent ?? undefined);
    };

    const handleTakeActionClicked = () =>
        setIsActionFormOpen((prevValue) => !prevValue);

    const handleClose = () => setIsActionFormOpen(false);

    const position: LatLngExpression = [
        ctx?.selectedEvent?.location?.latitude ?? 0,
        ctx?.selectedEvent?.location?.longitude ?? 0
    ];

    return (
        <Paper variant="outlined" square style={{ width: '100%' }}>
            <Box px={2} pt={2}>
                {ctx?.selectedEvent?.details?.[4].value === '-' && (
                    <ActionButtonsContainer
                        handleNoActionNeededClicked={
                            handleNoActionNeededClicked
                        }
                        handleTakeActionClicked={handleTakeActionClicked}
                    />
                )}

                <Box mt={2}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="event details"
                        indicatorColor="primary"
                        textColor="secondary"
                        selectionFollowsFocus
                        TabIndicatorProps={{
                            style: {
                                height: 5,
                                borderRadius: 4,
                                bottom: 6
                            }
                        }}
                        classes={{ flexContainer: classes.scroller }}
                    >
                        <Tab
                            className={classes.tab}
                            label="DETAILS"
                            {...a11yProps(0)}
                        />
                        <Tab
                            className={classes.tab}
                            label="LOCATION"
                            {...a11yProps(1)}
                        />
                        <Tab
                            className={classes.tab}
                            label="MEDIA"
                            {...a11yProps(2)}
                        />
                    </Tabs>
                    {ctx?.selectedEvent && (
                        <>
                            <TabPanel value={value} index={0}>
                                <DetailsTab
                                    details={ctx?.selectedEvent?.details?.filter(
                                        (_, index) => index > 4
                                    )}
                                />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <MapContainer
                                    center={position}
                                    zoom={13}
                                    scrollWheelZoom={false}
                                    style={{ height: 300 }}
                                >
                                    <InnerMap
                                        position={position}
                                        selectedEvent={ctx?.selectedEvent}
                                    />
                                </MapContainer>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <MediaTab media={ctx?.selectedEvent?.media} />
                            </TabPanel>
                        </>
                    )}
                </Box>
            </Box>
            <ActionFormDialog
                open={isActionFormOpen}
                handleClose={handleClose}
            />
        </Paper>
    );
};

export default EventDetailsContainer;
