import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFields } from '/hooks/sign/useFields';
import { logIn } from '/lib/auth/auth.services';
import {LogInApi} from "../../lib/jeebka/jeebka.services";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";
import store from "../../lib/redux";
import {changeUserAuth} from "../../lib/redux/actions";


export default function SignInForm({className, handleLogIn}) {

  const customTheme = createTheme({
    palette: {
      primary: {
        main: 'rgba(248,119,119,0.97)',
        light: '#ffffff',
        dark: '#2A99F4',
      },
      secondary: {
        main: '#9CD39D',
        light: '#ffffff',
        dark: '#64B966',
      },
      info: {
        main: '#ffffff',
        light: '#ffffff',
        dark: '#ffffff',
      }
    },
  });

  const [fields, handleFieldChange] = useFields({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    //LogInApi(fields.email, fields.password);
    logIn(fields.email, fields.password, handleLogIn);
    store.dispatch(changeUserAuth({user: fields.email}));
  }

  return (
      <ThemeProvider theme={customTheme}>
        <div className={className}>
          <CssBaseline />
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
            <Typography component="h1" variant="h5"> Sign in</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={fields.email} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" value={fields.password} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Remember me" />
                </Grid>
              </Grid>
              <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color={"primary"}
                onClick={handleSubmit}
              > Sign In </Button>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
  )
}
