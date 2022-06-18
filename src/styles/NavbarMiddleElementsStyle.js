import { makeStyles } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  nav: {
    cursor: 'default'
  },
  IconContainer: {
    marginRight: theme.spacing(8),
    height: '3rem',
    width: '4rem',
  },
  active: {
    borderBottom: `3px solid ${blue[700]}`,
    color: blue[700],
    padding: '10px',
  },
  icon: {
    position: 'absolute',
    height: '3rem',
    width: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: `${grey[200]}`,
      borderRadius: '6px',
    }
  }
}))
