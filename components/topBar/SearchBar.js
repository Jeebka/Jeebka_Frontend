import React, {useEffect, useState} from "react";
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
import {GetUserTags} from "../../lib/jeebka/jeebka.services";

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

export default function SearchBar({tags, renderTags=false, search}) {
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

  const searchLink = () => {
    let tagsFilter = searchTags.map((tag) => {return tag.name});
    let name = searchValue.link;
    search(name, tagsFilter);
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
          { renderTags ? <Autocomplete
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
          /> : null}
          { <IconButton onClick={searchLink}>
            <SearchIcon sx={{color: "#15787A"}}/>
          </IconButton> }
        </div>
      </ThemeProvider>
  );
}



