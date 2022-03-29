import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material//styles';
import { createTheme, ThemeProvider } from '@mui/material//styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#E1A0B1',
      light: '#f3b7c7',
      dark: '#51ABF6',

    },
    secondary: {
      main: '#9f6474',
    },
  },
});


export default function GroupMiniature({name, href}) {

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 200}}>
        <Box
          sx={{
            width: 'auto',
            height: 100,
            backgroundColor: getColor(),
          }}
        />
        <CardContent>
          <TextField  id="standard-basic" variant="standard"
            fullWidth
            contentEditable={false}
            value={name}
            InputProps={{ disableUnderline: true, readOnly: true }}
            sx = {{
              padding: 'none',
              marginBottom: '10px',
              borderBottom: '1px solid #CBCBCB',
            }}
          />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}