import { makeStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
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
    // displayComment: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    emojiContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        wordBreak: 'break-all',
    },
    commentContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        wordBreak: 'break-all'
    },
    commentSubContainer: {
        marginLeft: '10px',
        width: 'auto',
        backgroundColor: '#F2F3F5',
        padding: '0.7rem',
        borderRadius: '20px',
    }
}))