import { makeStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';
import { textAlign } from "@mui/system";

export default makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addedTextContainer: {
        margin: '-21px 10px -8px 0',
        wordBreak: 'break-word'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EBEDF0',
        height: '2.5rem',
        width: '100%',
        marginLeft: '0.5rem',
        paddingLeft: '0.7rem',
        borderRadius: '3rem',
        color: 'grey',
        cursor: 'pointer',
    },
    footer: {
        display: 'flex',
        justifyContent: 'center'
    },
    fileCard: {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
    userActionContainer: {
        color: '#616161',
        margin: '0.7rem'
    },
    userActionPerformed: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.7rem'
    },
    userActions: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0.5rem',
    },
    userActionsButton: {
        position: 'absolute',
        height: '2rem',
        lineHeight: '2rem',
        width: '12rem',
        fontWeight: '600',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: `${grey[200]}`,
            borderRadius: '6px',
        }
    },
    icon: {
        verticalAlign: 'middle'
    },
    likeReactionContainer: {
        position: 'absolute',
        boxShadow: 'rgba(0, 0, 0, 0.30) 0px 1px 10px',
        borderRadius: '30px !important',
        zIndex: 1,
        // margin: '-50px 0 0 -85px',
        padding: '3px',
        width: '21%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        animationName: '$example',
        animationDuration: '0.1s',
        animationFillMode: 'forwards',
    },
    '@keyframes example': {
        from: { margin: '-20px 0 0 -85px' },
        to: { margin: '-50px 0 0 -85px' },
    },
    likeReaction: {
        transition: '0.3s',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.3)',
        }
    }
}))

// div {
//     width: 100px;
//     height: 100px;
//     background - color: red;
//     position: relative;
//     animation - name: example;
//     animation - duration: 0.5s;
//     animation - fill - mode: forwards;
// }



// }