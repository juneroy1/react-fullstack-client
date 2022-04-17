import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {GoogleLogin} from 'react-google-login';
// import Lock
import useStyles from './styles'
import Input from './Input'
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { AUTH, LOGOUT } from '../../constants/actionTypes';



const Auth = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp );
        handleShowPassword(false);
    }

    const googleSucess = async (res) =>{
        // console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: AUTH, data: {result, token}});
            
            history.push('/')
        } catch (error) {   
            console.log(error)
        }
    }
    const googleFailure = () =>{
        console.log("Google sign in was unsuccessful, Try again later")
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5' >{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half={6} />
                                    <Input name='lastName' label="Last Name" handleChange={handleChange} half={6} />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword} />
                        {
                            isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type='password'/>
                        }

                    </Grid>
                    
                    <Button type='submit' fullWidth variant='contained' color="primary" className={classes.submit}>
                        {
                            isSignUp?'Sign Up' : 'Sing In'
                        }
                    </Button>
                    <GoogleLogin
                        clientId='467456132560-159mb6g0ek8foa8k9f1bplkif34sglj7.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button 
                            className={classes.googleButton} 
                            color="primary" 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon/>} 
                            variant='contained'>
                                Googile Sign 
                            </Button>
                        )}
                        onSuccess={googleSucess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justifyContent='flex-end'>
                        <Grid item >
                            <Button onClick={switchMode}>
                                {
                                    isSignUp? 'Alreadt have an account? Sign In': 'Dont have an account? Sign Up'
                                }
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth