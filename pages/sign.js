import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import Cover from './cover';
import css from '../styles/Home.module.css'

export default function Sign() {

  const [singInIsActive, setSingInIsActive] = React.useState(false);

  const clickHandler = () => {
    setSingInIsActive(!singInIsActive);
  }

  const render

  return (
    <Container component="main" maxWidth="md" >
        <Box sx={{border: 1, height: "80vh", padding: "0px"}}>
            <Grid container spacing={2} sx={{height: "100%"}}>
              <Grid item xs={6} zIndex={singInIsActive ? 1000 : 1050}>
                {singInIsActive ? <SignInForm></SignInForm> : 
                  <Cover 
                    className={css.cover_left} 
                    onClick={clickHandler}>
                  </Cover>}
              </Grid>
              <Grid item xs={6} zIndex={!singInIsActive ? 1000 : 1050}>
                {!singInIsActive ? <SignUpForm></SignUpForm> : 
                  <Cover 
                    className={css.cover_right}
                    onClick={clickHandler}>
                  </Cover>}
              </Grid>
            </Grid>  
        </Box>  
    </Container>
  )
}
