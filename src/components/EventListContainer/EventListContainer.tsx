import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ButtonBase,
    Grid,
    Hidden,
    Paper,
    Typography
} from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import useStyles from '../../assets/styles/style';
import { useActions, useEvents } from '../../context/EventContext';
import { EventDataObject } from '../../types/index';
import EventDetailsContainer from '../EventDetailsContainer/EventDetailsContainer';
import EventDetailRow from './EventDetailRow';
import EventSortRow from './EventSortRow';

const EventListContainer = (): JSX.Element => {
    const classes = useStyles();
    const ctx = useEvents();
    const actions = useActions();
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleOnClick = (item: EventDataObject): void => {
        return actions?.setSelectedEvent(item);
    };

    const handleOnClickAccordion = (item: EventDataObject): void => {
        if (item.id === expanded) {
            setExpanded(false);
            return actions?.setSelectedEvent(null);
        }
        return actions?.setSelectedEvent(item);
    };

    const handleChange = (panel: number) => (
        event: unknown,
        newExpanded: boolean
    ) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Paper variant="outlined" square className={classes.sortRowPaper}>
                <Box width="12px" mr={1} />
                <Grid container wrap="nowrap">
                    {ctx?.events?.[0]?.details.map(
                        (detail, index) =>
                            index <= 4 && (
                                <EventSortRow
                                    detail={detail}
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={`index-${index}`}
                                />
                            )
                    )}
                </Grid>
            </Paper>
            {ctx?.events?.map((item) => (
                <React.Fragment key={item.id}>
                    <Hidden mdDown>
                        <Paper
                            variant="outlined"
                            square
                            className={clsx(
                                classes.rowPaper,
                                ctx?.selectedEvent?.id === item.id &&
                                    classes.selectedBackground
                            )}
                        >
                            <Box
                                bgcolor={
                                    item.details.find(
                                        (detail) => detail.title === 'Aksiyon'
                                    )?.value === '-'
                                        ? 'warning.main'
                                        : 'common.white'
                                }
                                width="12px"
                                mr={1}
                            />
                            <ButtonBase
                                focusRipple
                                className={classes.fullwidth}
                                onClick={() => handleOnClick(item)}
                            >
                                <Grid
                                    container
                                    wrap="nowrap"
                                    alignItems="center"
                                >
                                    {item.details.map(
                                        (detail, index) =>
                                            index <= 4 && (
                                                <EventDetailRow
                                                    detail={detail}
                                                    // eslint-disable-next-line react/no-array-index-key
                                                    key={index}
                                                />
                                            )
                                    )}
                                </Grid>
                            </ButtonBase>
                        </Paper>
                    </Hidden>
                    <Hidden lgUp>
                        <Box mb={1}>
                            <Accordion
                                onChange={handleChange(item.id)}
                                expanded={expanded === item.id}
                            >
                                <AccordionSummary
                                    onClick={() => handleOnClickAccordion(item)}
                                    className={clsx(
                                        classes.accordion,
                                        ctx?.selectedEvent?.id === item.id &&
                                            classes.selectedBackground
                                    )}
                                    classes={{
                                        content: classes.content,
                                        expanded: classes.content
                                    }}
                                >
                                    <Box
                                        bgcolor={
                                            item.details.find(
                                                (detail) =>
                                                    detail.title === 'Aksiyon'
                                            )?.value === '-'
                                                ? 'warning.main'
                                                : 'common.white'
                                        }
                                        width="12px"
                                        mr={1}
                                    />
                                    <Grid
                                        container
                                        wrap="nowrap"
                                        alignItems="center"
                                    >
                                        {item.details.map(
                                            (detail, index) =>
                                                index <= 4 && (
                                                    <EventDetailRow
                                                        detail={detail}
                                                        // eslint-disable-next-line react/no-array-index-key
                                                        key={index}
                                                    />
                                                )
                                        )}
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails className={classes.details}>
                                    <Typography
                                        variant="h3"
                                        color="textSecondary"
                                        gutterBottom
                                        style={{
                                            fontSize: 23
                                        }}
                                    >
                                        EVENT DETAILS
                                    </Typography>
                                    <EventDetailsContainer />
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Hidden>
                </React.Fragment>
            ))}
        </>
    );
};

export default EventListContainer;
