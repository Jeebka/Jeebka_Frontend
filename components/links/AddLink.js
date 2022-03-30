import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgress } from "@mui/material";
import { Autocomplete } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import css from "../../styles/Link.module.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function AddLink() {
  const [tagsAdd, setTagsAdd] = useState({});
  const [groupAdd, setGroupAdd] = useState(" ");
  const [link, setLink] = useState({
    name: "",
    url: "",
  });

  const handleChange = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };

  const addLink = () => {
    console.log(link, "tags:", tagsAdd, "group:", groupAdd);
  };

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const handleClick = () => {
    setShow(!show);
  };

  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);
      if (active) {
        setOptions([...groups]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
            <Autocomplete
              id="asynchronous-group-addlink"
              name="group"
              open={open}
              size="medium"
              sx={{ width: 610 }}
              onChange={(event, value) => setGroupAdd(value)}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              getOptionLabel={(option) => option.name}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Groups"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />

            <Autocomplete
              multiple
              name="tags"
              size="medium"
              //error={error}
              id="checkbox-tags"
              sx={{ width: 610 }}
              options={tags}
              disableCloseOnSelect
              getOptionLabel={(tags) => tags.name}
              onChange={(event, value) => setTagsAdd(value)}
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

const groups = [
  { name: "Mate", id: "123" },
  { name: "Sova", id: "321" },
];

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

export default AddLink;
