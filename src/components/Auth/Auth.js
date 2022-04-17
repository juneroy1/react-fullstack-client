import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
// import Lock
import useStyles from './styles'
const Auth = () => {
    const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                {/* <LockOut */}
            </Avatar>
        </Paper>
    </Container>
  )
}

export default Auth