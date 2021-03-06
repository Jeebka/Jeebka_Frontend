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
import { signUp } from '/lib/auth/auth.services';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material";

export default function SignUpForm({className, handleSignUp}) {
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
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const handleSubmit = (event) => {
    signUp(fields.email, fields.password, handleSignUp);
  }

  return (
      <ThemeProvider theme={customTheme}>
        <div className={className}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '10000'}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
            <Typography component="h1" variant="h5">Sign up</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName"  label="First Name" value={fields.firstName} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" value={fields.lastName} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={fields.email} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" value={fields.password} onChange={handleFieldChange}/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="Accept the terms and conditions"/>
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up</Button>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
  )
}
