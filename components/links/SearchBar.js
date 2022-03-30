import React, { useState } from "react";
import { Box } from "@mui/material";
import CheckboxesTags from "./CheckboxesTag";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import css from "../../styles/Link.module.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState({ link: "", tags: [] });
  const handleChange = (e) => {
    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value,
    });
  };

  const searchLink = () => {
    console.log(searchValue);
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
          required
          className="searchLink"
          name="link"
          id="search-link"
          label="Link Name"
          value={searchValue.link}
          onChange={handleChange}
        />
        <CheckboxesTags
          width={230}
          onChange={handleChange}
          prevState={searchValue.tags}
        />
        <IconButton>
          <SearchIcon
            sx={{ width: 30, height: 30, right: 20 }}
            onClick={searchLink}
          />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchBar;
