const a11yProps = (index: number): { id: string; 'aria-controls': string } => ({
    id: `event-details-tab-${index}`,
    'aria-controls': `event-details-tabpanel-${index}`
});

export default a11yProps;
