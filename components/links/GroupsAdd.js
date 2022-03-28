import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { CircularProgress } from "@mui/material";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function GroupsAdd(props) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

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

  return (
    <Autocomplete
      id="asynchronous-group-addlink"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onChange={props.onChange}
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
  );
}

const groups = [
  { name: "Mate", url: "123" },
  { name: "Sova", url: "321" },
];

export default GroupsAdd;
