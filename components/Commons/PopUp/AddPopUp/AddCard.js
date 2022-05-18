import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import LinkAddCardContent from "./LinkAddCardContent";
import {createTheme} from "@mui/material/styles";
import GroupAddCardContent from "./GroupAddCardContent";
import store from "../../../../lib/redux";

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

export default function AddCard({onClick, isForLink, closePopUp, linkWindowProps}) {

  let tags = [];
  let groups = [];

  if(isForLink){
    let state = store.getState();
    console.log(state);
    tags = state.addOptions.tags;
    groups = state.addOptions.groups;
    console.log(tags, groups);
  }

  return (
      <Card sx={{ maxWidth: 365 }} onClick={onClick}>
        <Box sx={{width: 'auto', height: 150, backgroundColor: !isForLink ? '#77BEF8' : '#9CD39D',}}/>
        { isForLink ? <LinkAddCardContent
            renderGroups={linkWindowProps.renderGroups}
            defaultGroup={linkWindowProps.defaultGroup}
            linkWindowProps={linkWindowProps}
            theme={theme}
            closePopUp={closePopUp}
            groups={groups}
            tags={tags}
            /> :
            <GroupAddCardContent theme={theme} closePopUp={closePopUp}/>}
      </Card>
  );
}
