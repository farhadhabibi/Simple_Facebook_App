import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { grey } from '@material-ui/core/colors';
// import classNames from 'classnames';

import style from './styles/LoginPageStyle';


function LoginPage() {
    const classes = style();
    return (
        <div className={classes.cardContainer}>
            <div>
                <Typography className={classes.facebookText} variant="h4" component="div">
                    <span>facebook</span>
                </Typography>
                <Card variant="ouline" className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h6" component="div">
                            <span>Log in to Facebook</span>
                        </Typography>
                        <TextField className={classes.cardInputs}
                            id="outlined-basic"
                            label="Email address or phone number"
                            variant="outlined"
                        />
                        <TextField className={classes.cardInputs}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button className={classes.cardButtons} variant="contained">Log In</Button>
                        <a href="*" className={classes.cardAnchor}>Forgotten account?</a>
                    </CardContent>
                    <Divider variant="middle" sx={{ color: `${grey[500]}` }}>or</Divider>
                    <CardContent className={classes.cardActions}>
                        <Button className={`${classes.cardButtons} ${classes.newAccountButton}`} variant="contained" color="success">Create New Account</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default LoginPage;

// className={classNames(classes.newAccountButton, classes.a)}