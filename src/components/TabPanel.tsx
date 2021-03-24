import { Box } from '@material-ui/core';
import React from 'react';

interface TabPanelProps {
    children: React.ReactNode;
    index: unknown;
    value: unknown;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`event-details-tabpanel-${index}`}
            aria-labelledby={`event-details-tab-${index}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {value === index && <Box py={3}>{children}</Box>}
        </div>
    );
};

export default TabPanel;
