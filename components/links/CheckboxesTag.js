import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CheckboxesTags(props) {
  const [tagsSet, setTags] = useState([]);
  const tags = [{ name: "Mate" }, { name: "Sova" }];
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  //const error = true;
  const handleChangeAutocomplete = (event, value, name) => {
    console.log(value);
    setTags((tagsSet) => ({
      ...tagsSet,
      [name]: value,
    }));
    console.log(tagsSet);
  };

  return (
    <Autocomplete
      multiple
      name="tags"
      //error={error}
      id="checkbox-tags"
      sx={{ width: props.width }}
      options={tags}
      disableCloseOnSelect
      getOptionLabel={(tags) => tags.name}
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
        <TextField {...params} label="Tags" placeholder="Tags" />
      )}
    />
  );
}

export default CheckboxesTags;
