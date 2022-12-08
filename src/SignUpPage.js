import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { grey } from '@material-ui/core/colors';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import classNames from 'classnames';

import style from './styles/SignUpPageStyle';


function LoginPage() {
    const classes = style();

    const [day, setDay] = React.useState('');

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    return (
        <div className={classes.cardContainer}>
            <div>
                <Typography className={classes.facebookText} variant="h4" component="div">
                    <span>facebook</span>
                </Typography>
                <Card variant="ouline" className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Stack sx={{ width: '100%' }} align="center" >
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                Create a new account
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ fontWeight: '600', color: `${grey[600]}` }}>
                                It's quick and easy.
                            </Typography>
                            <Divider sx={{ marginTop: '0.7rem' }} />
                        </Stack>
                        <Stack sx={{ width: '100%' }} direction="row" spacing={1} >
                            <TextField sx={{ height: '2rem' }}
                                fullWidth
                                id="outlined-basic"
                                label="First name"
                                variant="outlined"
                                size="small"
                            />
                            <TextField sx={{ height: '2rem' }}
                                fullWidth
                                id="outlined-basic"
                                label="Surname"
                                variant="outlined"
                                size="small"
                            />
                        </Stack>
                        <TextField sx={{ height: '2rem' }}
                            fullWidth
                            id="outlined-basic"
                            label="Mobile number or email address"
                            variant="outlined"
                            size="small"
                        />
                        <TextField sx={{ height: '2rem' }}
                            fullWidth
                            id="outlined-password-input"
                            label="New Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                        />
                        <Typography variant="caption" component="span" sx={{ width: '100%', fontWeight: '600', color: `${grey[600]}` }}>
                            Date of birth
                        </Typography>
                        <Stack sx={{ width: '100%' }} direction="row" spacing={1} mt="-13px">
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-day">Day</InputLabel>
                                <Select
                                    labelId="select-age-day"
                                    id="select-age-day"
                                    defaultValue={1}
                                    label="day"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-month">Month</InputLabel>
                                <Select
                                    labelId="select-age-month"
                                    id="select-age-month"
                                    defaultValue={'jan'}
                                    label="month"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'jan'}>Jan</MenuItem>
                                    <MenuItem value={'feb'}>Feb</MenuItem>
                                    <MenuItem value={'mar'}>Mar</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-year">Year</InputLabel>
                                <Select
                                    labelId="select-age-year"
                                    id="select-age-year"
                                    defaultValue={2022}
                                    label="year"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={2000}>2000</MenuItem>
                                    <MenuItem value={2001}>2001</MenuItem>
                                    <MenuItem value={2002}>2002</MenuItem>
                                    <MenuItem value={2022}>2022</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Typography variant="caption" component="span" sx={{ width: '100%', fontWeight: '600', color: `${grey[600]}` }}>
                            Gender
                        </Typography>
                        <Stack sx={{ width: '100%' }} direction="row" spacing={1} mt="-13px">
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-day">Day</InputLabel>
                                <Select
                                    labelId="select-age-day"
                                    id="select-age-day"
                                    defaultValue={1}
                                    label="day"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-month">Month</InputLabel>
                                <Select
                                    labelId="select-age-month"
                                    id="select-age-month"
                                    defaultValue={'jan'}
                                    label="month"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'jan'}>Jan</MenuItem>
                                    <MenuItem value={'feb'}>Feb</MenuItem>
                                    <MenuItem value={'mar'}>Mar</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-age-year">Year</InputLabel>
                                <Select
                                    labelId="select-age-year"
                                    id="select-age-year"
                                    defaultValue={2022}
                                    label="year"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={2000}>2000</MenuItem>
                                    <MenuItem value={2001}>2001</MenuItem>
                                    <MenuItem value={2002}>2002</MenuItem>
                                    <MenuItem value={2022}>2022</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Typography variant="caption" component="span" sx={{ fontSize: '11px', color: `${grey[600]}` }}>
                            People who use our service may have uploaded your contact information to Facebook.
                            <a href="#" className={classes.cardAnchors}>Learn more.</a>
                        </Typography>
                        <Typography variant="caption" component="span" sx={{ fontSize: '11px', color: `${grey[600]}` }} mt="-12px">
                            By clicking Sign Up, you agree to our &nbsp;
                            <a href="#" className={classes.cardAnchors}>Terms</a>,&nbsp;
                            <a href="#" className={classes.cardAnchors}>Privacy Policy</a>&nbsp;
                            and <a href="#" className={classes.cardAnchors}>Cookies Policy</a>.
                           You may receive SMS notifications from us and can opt out at any time.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button className={classes.cardButton} variant="contained" size="small" color="success">Sign Up</Button>
                        <a href="#" className={`${classes.cardAnchors} ${classes.navigateToLogin}`}>Already have an account?</a>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}
export default LoginPage;

// className={classNames(classes.newAccountButton, classes.a)}