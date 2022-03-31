import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import InfoIcon from "@mui/icons-material/Info";
import PropTypes from "prop-types";

import css from "../styles/GroupHead.module.css";

export default function GroupHead({ info, menuBarToggle }) {
  return (
    <>
      <Box className={css.header}>
        <Box>
          <Typography className={css.title}> {info.name}</Typography>
        </Box>
        <Box className={css.button__menu__container}>
          <Button>
            <PlusOneIcon className={css.menu__groupAdd} />
          </Button>
          <Button>
            <InfoIcon className={css.menu__groupInfo} onClick={menuBarToggle} />
          </Button>
        </Box>
      </Box>
    </>
  );
}
GroupHead.propTypes = {
  info: PropTypes.any.isRequired,
};

GroupHead.defaultProps = {
  info: { name: "none" },
};
