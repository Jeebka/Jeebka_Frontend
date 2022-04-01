import {Autocomplete, createFilterOptions} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React from "react";


export default function TagsAutocomplete({tags, setTagsAdd}){

    const filter = createFilterOptions();
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <Autocomplete
            multiple
            name="tags"
            size="small"
            limitTags={3}
            id="checkbox-tags"
            ListboxProps={{ style: { maxHeight: '15vh' } }}
            sx={{ width: '100%', marginTop:'3%' }}
            options={tags}
            disableCloseOnSelect
            onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                    setTagsAdd({ ...tags, name: newValue });
                } else if (newValue && newValue.inputValue) {
                    setTagsAdd({ ...tags, name: newValue });
                } else {
                    setTagsAdd(newValue);
                }
            }}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);
                const { inputValue } = params;
                const isExisting = options.some(
                    (option) => inputValue === option.name
                );
                if (inputValue !== "" && !isExisting) {
                    filtered.push({
                        name: `${inputValue}`,
                    });
                }
                return filtered;
            }}
            selectOnFocus
            clearOnBlur
            getOptionLabel={(tags) => {
                if (typeof tags === "string") {
                    return tags;
                }
                if (tags.inputValue) {
                    return tags.inputValue;
                }
                return tags.name;
            }}
            renderOption={(props, tags, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 3 }}
                        checked={selected}
                    />
                    {tags.name}
                </li>
            )}
            renderInput={(params) => (
                <TextField {...params} label="Tags" />
            )}
        />
    );
}