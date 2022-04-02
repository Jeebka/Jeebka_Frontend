import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardActions from "@mui/material/CardActions";
import {CustomNameInput} from "./CustomInputs";
import TagsAutocomplete from "../../Autocomplete/TagsAutocomplete";
import GroupsAutocomplete from "../../Autocomplete/GroupsAutocomplete";
import {useFields} from "../../../../hooks/sign/useFields";

const groups = [
    { name: "Mate", id: "123" },
    { name: "Sova", id: "321" },
];

const tags = [
    { name: "Mate" },
    { name: "Algebra" },
    { name: "ECI" },
    { name: "Games" },
    { name: "Doom" },
    { name: "Algoritmos" },
    { name: "Redes" },
    { name: "Web" },
    { name: "HTML" },
    { name: "CSS" },
];


export default function LinkAddCardContent({addButtonOnClick, theme, handleSave}){

    const [tagsAdd, setTagsAdd] = useState({});
    const [groupAdd, setGroupAdd] = useState("");

    const [link, setLink] = useFields({
        name: "",
        url: ""
    });

    const cleanValues = () => {
        setLink({
            name: "",
            url: ""
        });
    };

    const addLink = () => {
        console.log(link);
        cleanValues();
        addButtonOnClick();
    };

    return (
        <>
            <CardContent>
                <TextField
                    id="standard-basic"
                    variant="standard"
                    fullWidth
                    placeholder="Link Name"
                    InputProps={{ disableUnderline: true }}
                    sx = {{
                        padding: 'none',
                        marginBottom: '10px',
                        borderBottom: '1px solid #CBCBCB',
                    }}
                />
                <CustomNameInput height={'30px'} placeholder="Put your link url here"/>
                <GroupsAutocomplete setGroupAdd={setGroupAdd} groups={groups}/>
                <TagsAutocomplete setTagsAdd={setTagsAdd} tags={tags}/>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Fab title="Add new link" size="small" aria-label="add" color={'secondary'} onClick={handleSave} theme={theme} sx={{marginLeft: 'auto'}}>
                    <AddIcon theme={theme} color='info'/>
                </Fab>
            </CardActions>
        </>
    );
}

