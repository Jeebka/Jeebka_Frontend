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
import { useFormFields } from '/hooks/sign/useFormFields';
import { logIn } from '/lib/auth/auth.services';

export default function SignInForm({className, handleLogIn}) {

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    logIn(fields.email, fields.password, handleLogIn);
  }

  return (
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
          <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} 
            onClick={handleSubmit}
          > Sign In </Button>
        </Box>
      </Box>
      </div>
  )
}
