import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))
