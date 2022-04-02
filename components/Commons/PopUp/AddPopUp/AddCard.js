import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import LinkAddCardContent from "./LinkAddCardContent";
import {createTheme} from "@mui/material/styles";
import GroupAddCardContent from "./GroupAddCardContent";

const theme = createTheme({
  palette: {
    primary: {
      main: '#77BEF8',
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

export default function AddCard({onClick, isForLink, closePopUp}) {

  return (
      <Card sx={{ maxWidth: 365 }} onClick={onClick}>
        <Box sx={{width: 'auto', height: 150, backgroundColor: !isForLink ? '#77BEF8' : '#9CD39D',}}/>
        { isForLink ? <LinkAddCardContent theme={theme} closePopUp={closePopUp}/> : <GroupAddCardContent theme={theme} closePopUp={closePopUp}/>}
      </Card>
  );
}
