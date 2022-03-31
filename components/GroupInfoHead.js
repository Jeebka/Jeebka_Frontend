import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

import css from "../styles/GroupInfoHead.module.css";

export default function GroupInfoHead({ menuBarToggle }) {
  return (
    <>
      <Box className={css.info__card}>
        <Box>
          <Button className={css.button__close} onClick={menuBarToggle}>
            <CloseIcon className={css.menu__close} />
          </Button>

          <Typography className={css.title}> Informacion del grupo</Typography>
        </Box>
      </Box>
    </>
  );
}
