import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import PropTypes from "prop-types";

import css from "../styles/Description.module.css";

export default function Description({ info }) {
  return (
    <>
      <Box className={css.info__card}>
        <Box>
          <Typography className={css.tittle_card}>Descripcion</Typography>
          <Typography className={css.name__group__card}>{info.name}</Typography>
          <Typography>{info.description}</Typography>
        </Box>
      </Box>
    </>
  );
}
Description.propTypes = {
  info: PropTypes.any.isRequired,
};

Description.defaultProps = {
  info: { name: "name" },
};
