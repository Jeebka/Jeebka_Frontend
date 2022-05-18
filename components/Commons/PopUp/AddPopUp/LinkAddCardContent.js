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
import {CreateLink} from "../../../../lib/jeebka/jeebka.services";

export default function LinkAddCardContent({theme, closePopUp, renderGroups=true, defaultGroup="", groups, tags}){

    const [tagsAdd, setTagsAdd] = useState({});
    const [groupAdd, setGroupAdd] = useState(defaultGroup);

    const [link, setLink] = useFields({
        name: "",
        url: ""
    });

    const handleSave = () => {
        let tagsList = tagsAdd.map((tag) => { return tag.name; })
        let newLink = {tags: tagsList, name: link.name, url: link.url};
        CreateLink(newLink, groupAdd, () => {
            closePopUp();
        })
    }

    return (
        <>
            <CardContent>
                <TextField
                    id="name"
                    variant="standard"
                    fullWidth
                    placeholder="Link Name"
                    InputProps={{ disableUnderline: true }}
                    sx = {{
                        padding: 'none',
                        marginBottom: '10px',
                        borderBottom: '1px solid #CBCBCB',
                    }}
                    onChange={setLink}
                    value={link.name}
                />
                <CustomNameInput
                    id="url"
                    height={'30px'}
                    placeholder="Put your link url here"
                    onChange={setLink}
                    value={link.url}
                />
                {renderGroups ? <GroupsAutocomplete setGroupAdd={setGroupAdd} groups={groups}/> : null}
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