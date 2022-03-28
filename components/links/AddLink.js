import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CheckboxesTags from "./CheckboxesTag";
import GroupsAdd from "./GroupsAdd";
import SendIcon from "@mui/icons-material/Send";

function AddLink() {
  const [link, setLink] = useState({
    name: "",
    url: "",
    tags: [],
    group: "undefined",
  });

  function handleChanges(e){
    setLink({
      ...link,
      [link.tags]: e.value,
    });
  }

  const handleChange = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

  const addLink = () => {
    console.log(link);
  };

  return (
    <form className="AddLink">
      <Box
        component="form"
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
      >
        <TextField
          required
          className="addlink"
          id="name-addlink"
          label="Name"
          name="name"
          value={link.name}
          onChange={handleChange}
          sx={{ width: 297 }}
        />
        <TextField
          required
          className="addlink"
          id="url-addlink"
          label="URL"
          name="url"
          value={link.url}
          onChange={handleChange}
          sx={{ width: 297 }}
        />
        <GroupsAdd value={link.group} onChange={handleChange} />
        <CheckboxesTags value={link.tags} onChanges={handleChanges} />

        <Button variant="contained" endIcon={<SendIcon />} onClick={addLink}>
          Create!
        </Button>
      </Box>
    </form>
  );
}

export default AddLink;
