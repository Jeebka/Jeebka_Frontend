import React, { useState } from "react";
import { Box } from "@mui/material";
import CheckboxesTags from "./CheckboxesTag";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchValue, setSearchValue] = useState({ link: "", tags: [] });
  const handleChange = (e) => {
    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="searchBar">
      <Box
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
      >
        <TextField
          required
          className="searchLink"
          name="link"
          id="search-link"
          label="Link Name"
          value={searchValue.link}
          onChange={handleChange}
        />
        <CheckboxesTags value={searchValue.tags} onChange={setSearchValue.tags}/>
        <IconButton>
          <SearchIcon fontsize="inherit" />
        </IconButton>
      </Box>
    </form>
  );
}

export default SearchBar;
