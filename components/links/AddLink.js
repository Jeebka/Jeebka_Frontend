import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import css from "../../styles/Link.module.css";

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

  const handleChange = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

  const addLink = () => {
    console.log(link);
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <footer>
        <Button
          variant="contained"
          className="AddLinkbutton"
          onClick={handleClick}
          endIcon={<AddCircleIcon />}
        >
          {show ? "Cerrar" : "Añadir Link"}
        </Button>
      </footer>
      {show ? (
        <div className={`${css.AddLink}`}>
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
            <GroupsAdd width={610} value={link.group} onChange={handleChange} />
            <CheckboxesTags
              width={610}
              value={link.tags}
              onChanges={handleChange}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={addLink}
            >
              Create!
            </Button>
          </Box>
        </div>
      ) : null}
    </div>
  );
}

export default AddLink;
