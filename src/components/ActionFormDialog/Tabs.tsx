/* eslint-disable react/jsx-props-no-spreading */
import { Avatar, Grid, Tab, Tabs as MuiTabs } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from '../../assets/styles/style';
import a11yProps from '../../utils/a11yprops';

const Tabs = ({ formStep }: { formStep: number }): JSX.Element => {
    const classes = useStyles();
    return (
        <MuiTabs
            value={formStep}
            aria-label="event details"
            indicatorColor="primary"
            textColor="secondary"
            selectionFollowsFocus
            TabIndicatorProps={{
                style: {
                    height: 5,
                    borderRadius: 4,
                    bottom: 9
                }
            }}
            classes={{
                flexContainer: clsx(classes.scroller, classes.actionScroller)
            }}
        >
            <Tab
                className={clsx(classes.tab, classes.actionTab)}
                disableRipple
                label={
                    <Grid container alignItems="center" justify="center">
                        <Grid item>
                            <Avatar
                                className={clsx(
                                    classes.numberIcon,
                                    formStep === 1 && classes.disabledTab
                                )}
                            >
                                1
                            </Avatar>
                        </Grid>
                        <Grid item>SELECT ACTION</Grid>
                    </Grid>
                }
                {...a11yProps(0)}
            />
            <Tab
                className={clsx(classes.tab, classes.actionTab)}
                disableRipple
                label={
                    <Grid container alignItems="center" justify="center">
                        <Grid item>
                            <Avatar
                                className={clsx(
                                    classes.numberIcon,
                                    formStep === 0 && classes.disabledTab
                                )}
                            >
                                2
                            </Avatar>
                        </Grid>
                        <Grid item>TAKE ACTION</Grid>
                    </Grid>
                }
                {...a11yProps(0)}
            />
        </MuiTabs>
    );
};

export default Tabs;
