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

const getColor = () => { 
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

const GroupNameInput = styled('textarea')(({ theme }) => ({
  width: '100%',
  height: '100px',
  border: 'hidden',
  borderRadius: '5px',
  outline: 'none',
  autoSize: true,
  backgroundColor: '#f2f2f2'
}));

export default function GroupMiniature({name, href}) {

  const saveGroup = () => {
    console.log('Tamos dentro');
    fetch(" http://localhost:5203/v1/jeebka/users/esteesunemail", {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }

    })
    .then((resp) => resp.json())
    .then(function(data){
      console.log(data.results);
    })
  }


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