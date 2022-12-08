import { makeStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
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
    },
    userActionsButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '2rem',
        width: '12rem',
        fontWeight: '600',
        fontSize: '16px',
        verticalAlign: 'middle',
        '&:hover': {
            backgroundColor: `${grey[200]}`,
            borderRadius: '6px',
        }
    },
    iconText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))