import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";

import css from "../styles/Members.module.css";

export default function Members({ info }) {
  return (
    <>
      <Box className="info__card">
        <Box className="member__container">
          <Typography className="tittle_card">
            miembros: {info.members.length}
          </Typography>
          <ul>
            {info.members.map((member) => (
              <li key={member}>
                <Typography>{member}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
}
Members.propTypes = {
  info: PropTypes.any.isRequired,
};

Members.defaultProps = {
  info: { name: "name", members: [] },
};
