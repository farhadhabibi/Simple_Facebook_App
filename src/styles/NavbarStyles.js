import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '3.5rem',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    grow: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: '30px',
        // borderRadius: theme.shape.borderRadius,
        backgroundColor: '#EBEDF0',
        '&:hover': {
            // backgroundColor: alpha(theme.palette.common.white, 0.2)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        padding: theme.spacing(0.4),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            // marginLeft: theme.spacing(2),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default useStyles;