import TextField from "@mui/material/TextField";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {CustomNameInput} from "./CustomInputs";

export default function GroupAddCardContent({theme, handleSave}) {
    return (
        <>
            <CardContent>
                <TextField
                    sx = {{padding: 'none', marginBottom: '10px', borderBottom: '1px solid #CBCBCB',}}
                    id="standard-basic"
                    variant="standard"
                    fullWidth
                    placeholder="Group Name"
                    InputProps={{ disableUnderline: true }}
                />
                <CustomNameInput autoSize={true} height={'100px'} placeholder="Put a group description here."/>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Fab title="Add new group" size="small" aria-label="add" color={'primary'} onClick={handleSave} theme={theme} sx={{marginLeft: 'auto'}}>
                    <AddIcon theme={theme} color='info'/>
                </Fab>
            </CardActions>
        </>
    )
}