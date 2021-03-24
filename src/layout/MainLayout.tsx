import { Box, Grid, Hidden, InputBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import useStyles from '../assets/styles/style';
import EventDetailsContainer from '../components/EventDetailsContainer/EventDetailsContainer';
import EventListContainer from '../components/EventListContainer/EventListContainer';
import { useActions } from '../context/EventContext';

const MainLayout = (): JSX.Element => {
    const classes = useStyles();
    const actions = useActions();

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        actions?.filterEvent(searchTerm);
        setSearchTerm(event.target.value);
    };

    return (
        <Box bgcolor="secondary.main" pt={8} pl={6}>
            <Box height="100%" className={classes.root} px={2} pt={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <Grid container justify="space-between">
                            <Grid item>
                                <Typography
                                    variant="h3"
                                    color="textSecondary"
                                    style={{ fontSize: 23 }}
                                >
                                    EVENTS
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Box
                                    borderRadius="borderRadius"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    mb={1}
                                    className={classes.search}
                                >
                                    <Box
                                        px={2}
                                        height="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <SearchIcon />
                                    </Box>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            input: classes.inputInput
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleChange}
                                        value={searchTerm}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <EventListContainer />
                    </Grid>

                    <Hidden mdDown>
                        <Grid item lg={4}>
                            <Typography
                                variant="h3"
                                color="textSecondary"
                                gutterBottom
                                style={{ fontSize: 23 }}
                            >
                                EVENT DETAILS
                            </Typography>
                            <EventDetailsContainer />
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </Box>
    );
};

export default MainLayout;
