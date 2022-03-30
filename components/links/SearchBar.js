import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";

import css from "../../styles/Link.module.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState({ link: "" });
  const [searchTags, setSearchTags] = useState({});
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const handleChange = (e) => {
    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value,
    });
  };

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

  const searchLink = () => {
    console.log(searchValue, searchTags);
  };

  return (
    <div className={`${css.searchBar}`}>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          display: "flex",
          flexDirection: "row",
          width: 598,
        }}
      >
        <TextField
          sx={{ width: 300 }}
          size="small"
          required
          className="searchLink"
          name="link"
          id="search-link"
          label="Link Name"
          value={searchValue.link}
          onChange={handleChange}
        />
        <Autocomplete
          multiple
          name="tags"
          size="small"
          //error={error}
          id="checkbox-tags"
          sx={{ width: 230 }}
          options={tags}
          disableCloseOnSelect
          getOptionLabel={(tags) => tags.name}
          onChange={(event, value) => setSearchTags(value)}
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
        <IconButton onClick={searchLink}>
          <SearchIcon sx={{ width: 30, height: 30, right: 20 }} />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchBar;
