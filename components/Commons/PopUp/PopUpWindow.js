import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material//styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import css from "/styles/css/PopUp.module.css";

const GroupNameInput = styled('textarea')(({ theme }) => ({
    width: '100%',
    height: '100px',
    border: 'hidden',
    borderRadius: '5px',
    outline: 'none',
    autoSize: true,
    backgroundColor: '#f2f2f2',
    maxWidth: '100%'
  }));

export default function PopUpWindow({iconSize}) {

    const saveGroup = () => {}

    return (
        <div className={css.popUpContainer}>
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
        </div>
        
    );
}