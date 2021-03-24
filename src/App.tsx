import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import MainLayout from './layout/MainLayout';
import theme from './assets/theme/theme';
import EventContextsProvider from './context/EventContext';

const App = (): JSX.Element => {
    return (
        <EventContextsProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainLayout />
            </ThemeProvider>
        </EventContextsProvider>
    );
};

export default App;
