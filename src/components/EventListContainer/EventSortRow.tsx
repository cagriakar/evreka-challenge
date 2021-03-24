import { ButtonBase, Grid, Tooltip, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import clsx from 'clsx';
import React, { useState } from 'react';
import useStyles from '../../assets/styles/style';
import { useActions } from '../../context/EventContext';
import { Detail } from '../../types';
import decideTitle from '../../utils/decideTitle';

const EventSortRow = ({
    detail: { title }
}: {
    detail: Detail;
}): JSX.Element => {
    const classes = useStyles();

    const actions = useActions();

    const [isClikedOnce, setIsClikedOnce] = useState<boolean>(false);
    const [isAscendingOrder, setIsAscendingOrder] = useState<boolean>(false);

    const handleOnClick = (titleParams: string): void => {
        const sortType: 'ascending' | 'descending' = isAscendingOrder
            ? 'descending'
            : 'ascending';

        actions?.sortEventBy(decideTitle(titleParams), sortType);
        if (!isClikedOnce) {
            setIsClikedOnce((prevValue) => !prevValue);
        }
        setIsAscendingOrder((prevValue) => !prevValue);
    };

    // eslint-disable-next-line no-nested-ternary
    const tooltip = isClikedOnce
        ? isAscendingOrder
            ? 'sorted ascending'
            : 'sorted descending'
        : 'Click to sort';

    return (
        <Grid item xs={3}>
            <Tooltip title={tooltip}>
                <ButtonBase
                    focusRipple
                    className={clsx(classes.fullwidth, classes.sortButton)}
                    onClick={() => handleOnClick(title)}
                >
                    <Typography
                        variant="body2"
                        align="left"
                        className={clsx(classes.sortText, classes.white)}
                    >
                        {`Sort by ${title}`}
                    </Typography>
                    {isClikedOnce &&
                        (isAscendingOrder ? (
                            <ArrowUpwardIcon
                                style={{ fontSize: 15 }}
                                className={classes.white}
                            />
                        ) : (
                            <ArrowDownwardIcon
                                style={{ fontSize: 15 }}
                                className={classes.white}
                            />
                        ))}
                </ButtonBase>
            </Tooltip>
        </Grid>
    );
};

export default EventSortRow;
