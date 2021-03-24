import {
    createStyles,
    fade,
    makeStyles,
    Theme
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default
        },
        rowPaper: {
            height: 100,
            overflowY: 'auto',
            marginBottom: 5,
            display: 'flex',
            border: 'none'
        },
        sortRowPaper: {
            overflowY: 'auto',
            marginBottom: 5,
            display: 'flex',
            padding: theme.spacing(2, 0),
            border: 'none',
            backgroundColor: '#535A72'
        },
        sortButton: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(6)
        },
        sortText: { fontSize: 12 },
        white: { color: theme.palette.common.white },
        fullwidth: { width: '100%' },
        selectedBackground: {
            backgroundColor: 'rgb(244, 231, 151)'
        },
        scroller: {
            borderBottom: '3px solid',
            borderBottomColor: theme.palette.augmentColor({ main: '#535A72' })
                .light
        },
        tab: {
            minWidth: 100,
            textAlign: 'left',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            minHeight: 36,
            '& span': { display: 'block' },
            fontWeight: 'bold',
            fontSize: 15,
            color: theme.palette.text.disabled
        },
        actionTab: {
            fontSize: 20,
            marginBottom: theme.spacing(2),
            cursor: 'default'
        },
        disabledTab: {
            backgroundColor: `${theme.palette.text.disabled} !important`
        },
        actionScroller: {
            marginBottom: 10,
            justifyContent: 'space-evenly'
        },
        formButton: { width: '30%' },
        numberIcon: {
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
            backgroundColor: '#172C49',
            marginRight: theme.spacing(1),
            fontSize: 12
        },
        buttonLabel: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: 10,
            marginBottom: 10,
            textTransform: 'none'
        },
        selectedButton: {
            backgroundColor: '#172C49'
        },
        text: {
            fontSize: 14,
            fontWeight: 700,
            position: 'absolute',
            top: -40,
            marginLeft: -14
        },
        textField: {
            fontSize: 13,
            padding: theme.spacing(2, 2)
        },
        remainingText: {
            fontSize: 12,
            position: 'absolute',
            right: 10,
            bottom: 10
        },
        dialogPaper: {
            borderRadius: theme.spacing(2),
            width: '60vw',
            maxWidth: 'auto'
        },
        content: {
            margin: `0 !important`,
            height: 100
        },
        accordion: { padding: 0, minHeight: 100 },
        details: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        },
        search: {
            backgroundColor: fade(theme.palette.common.white, 0.35),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.75)
            }
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            },
            fontSize: 16
        }
    })
);

export default useStyles;
