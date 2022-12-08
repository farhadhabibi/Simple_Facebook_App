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
        minWidth: 400,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: '1.3rem',
        '& a': {
            position: 'relative',
            textDecoration: 'none',
            color: `${blue[800]}`,
            fontWeight: 500,
            top: '0.2rem',
            '&:hover': {
                textDecoration: 'underline',
            }
        }
    },
    cardInputs: {
        width: '100%',
        height: '3rem',
    },
    cardButtons: {
        width: '100%',
        height: '3rem',
        fontWeight: 'bold !important',
        textTransform: 'capitalize !important',
        fontSize: '20px !important'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    newAccountButton: {
        position: 'absolute',
        width: '54%',
        fontSize: '16px !important',
        top: '0.3rem',
    },
}))
