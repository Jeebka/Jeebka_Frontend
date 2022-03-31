import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import css from "/styles/css/Link.module.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material//styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1B9B9D",
      light: "#73E5E7",
      dark: "#1B9B9D",
    },
    info: {
      main: "#1B9B9D",
      light: "#73E5E7",
      dark: "#1B9B9D",
    },
  },
});

export default function SearchBar() {
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
    <ThemeProvider theme={customTheme}>
      <div className={`${css.searchBar}`}>
        <TextField
          sx={{ width: '50%' }}
          size="small"
          className="searchLink"
          name="link"
          id="search-link"
          label="Link Name"
          value={searchValue.link}
          onChange={handleChange}
        />
        <Autocomplete
          sx={{ width: '40%' }}
          multiple
          name="tags"
          size="small"
          id="checkbox-tags"
          limitTags={7}
          options={tags}
          disableCloseOnSelect
          getOptionLabel={(tags) => tags.name}
          onChange={(event, value) => setSearchTags(value)}
          renderOption={(props, tags, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                checked={selected}
              />
              {tags.name}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Tags" />
          )}
        />
        <IconButton onClick={searchLink}>
          <SearchIcon sx={{color: "#15787A"}}/>
        </IconButton>
      </div>
    </ThemeProvider>
  );
}


