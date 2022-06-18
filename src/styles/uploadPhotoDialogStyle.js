import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    dialog: {
        maxWidth: '40%',
        maxHeight: '90vh',
        margin: 'auto',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '-8px'
    },
    profileSubContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0rem 1rem 1rem',
        '& Button': {
            height: '1.5rem',
            top: '0.3rem',
        }
    },
    reactEmojiPickerWrapper: {
        position: 'absolute',
        top: 0
    },
    uploadFileContainer: {
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.4rem',
        marginTop: '1rem',
        padding: '0.5rem',
        height: '270px',
        overflow: 'auto',
    },
    photoContainer: {
        border: 'none',
        // borderRadius: '0.4rem',
    },
    photoContent: {
        backgroundColor: '#F5F6F7',
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            backgroundColor: '#EBEDF0',
        },
    },
    addPhotoIcon: {
        backgroundColor: '#DADDE1',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        // marginRight: '20px'
    },
    mobilePhoto: {
        paddingTop: '0.5rem',
    },
    mobilePhotoCard: {
        height: '3.5rem',
    },
    mobilePhotoContent: {
        backgroundColor: '#F5F6F7',
    },
    addToPostContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '0.4rem',
    },
    postButtonContainer: {
        marginTop: '1rem',

    },
    postButton: {
        width: '100%',
    },
    media: {
        overflow: 'scroll'
    }
}))
// #F5F6F7
// #EBEDF0
// #DADDE1
// #DADDE1

