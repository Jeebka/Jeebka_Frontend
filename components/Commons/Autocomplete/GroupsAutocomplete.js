import React, {useState} from "react";
import {Autocomplete, CircularProgress, createFilterOptions} from "@mui/material";
import TextField from "@mui/material/TextField";

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

export default function GroupsAutocomplete({ groups, setGroupAdd }){

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
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

    return (
        <Autocomplete
            id="asynchronous-group-addlink"
            name="group"
            open={open}
            size="small"
            ListboxProps={{ style: { maxHeight: '15vh' } }}
            sx={{ width: '100%', marginTop:'3%' }}
            onChange={(event, value) => setGroupAdd(value)}
            onOpen={() => {setOpen(true);}}
            onClose={() => {setOpen(false);}}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) =>  option.name }
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
    );
}

