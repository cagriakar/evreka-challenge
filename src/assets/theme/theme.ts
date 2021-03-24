import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#3BA935' },
        secondary: { main: '#172C49' },
        warning: { main: '#E9CF30' },
        background: { default: '#EBECEF' },
        text: {
            // primary: '#FFFFFF',
            secondary: '#172C49'
        }
    },
    typography: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        h1: { fontSize: '25pt', fontWeight: 700 },
        h2: { fontSize: '21pt', fontWeight: 300 },
        h3: { fontSize: '21pt', fontWeight: 700 },
        body1: { fontSize: '19pt', fontWeight: 300 },
        body2: { fontSize: '19pt', fontWeight: 700 }
    }
});

export default theme;
