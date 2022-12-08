import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        '& span': {
            fontWeight: 700,
            fontSize: '50px',
            color: `${blue[700]}`
        }
    },
    card: {
        maxWidth: 450,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: '1.3rem',
    },
    cardAnchors: {
        position: 'relative',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: '1rem'
    },
    cardButton: {
        fontWeight: '900 !important',
        textTransform: 'capitalize !important',
        fontSize: '17px !important',
        width: '45%'
    },
    navigateToLogin: {
        fontWeight: 500,
        color: `${blue[800]}`,
        top: '0.2rem',
        marginBottom: '15px'
    },
}))
