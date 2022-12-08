import { makeStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';
import { textAlign, borderBottom } from "@mui/system";

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
        marginBottom: '0.7rem',
        height: '1.4rem'
    },
    commentCounts: {
        '&:hover': {
            cursor: 'pointer',
            borderBottom: '1.5px solid grey'
        }
    },
    userActions: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0.5rem',
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
    // emojiContainer: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     wordBreak: 'break-all',
    // },
    // commentContainer: {
    //     display: 'flex',
    //     justifyContent: 'flex-start',
    //     alignItems: 'center',
    //     wordBreak: 'break-all'
    // },
    // commentSubContainer: {
    //     marginLeft: '10px',
    //     width: 'auto',
    //     backgroundColor: '#F2F3F5',
    //     padding: '0.7rem',
    //     borderRadius: '20px',
    // }
}))

// #F5F6F7;
//  #F2F3F5;
// #EBEDF0;