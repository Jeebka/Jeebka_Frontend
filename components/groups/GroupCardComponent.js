import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material//styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material//styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#E1A0B1',
      light: '#f3b7c7',
      dark: '#c28998',

    },
    secondary: {
      main: '#9f6474',
    },
  },
});


const GroupNameInput = styled('textarea')(({ theme }) => ({
  width: '100%',
  height: '100px',
  border: 'hidden',
  borderRadius: '5px',
  outline: 'none',
  autoSize: true,
  backgroundColor: '#f2f2f2'
}));

export default function GroupCardComponent() {

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
      <Card sx={{ maxWidth: 345, margin: '20px 60px 10px'}}>
        <Box
          sx={{
            width: 'auto',
            height: 150,
            backgroundColor: '#6a9f64',
          }}
        />
        <CardContent>
          <TextField  id="standard-basic" variant="standard"
            fullWidth
            placeholder="Group Name"
            InputProps={{ disableUnderline: true }}
            sx = {{
              padding: 'none',
              marginBottom: '10px',
              borderBottom: '1px solid #CBCBCB',
            }}
          />
          <GroupNameInput placeholder="Put a group description here."/>
        </CardContent>
        <CardActions>
        <Tooltip title="Add" placement="right">
          <Fab size="small" aria-label="add" color="primary" onClick={saveGroup}>
            <AddIcon color='secondary'/>
          </Fab>
        </Tooltip>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}