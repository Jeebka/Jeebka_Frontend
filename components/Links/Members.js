import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import css from "/styles/css/Link.module.css";

export default function Members({ info }) {
  return (
    <>
      <Box className={css.info__card}>
        <Box className={css.member__container}>
          <Typography className={css.tittle_card}>
            Members: {info.members.length}
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

Members.defaultProps = {
  info: { name: "name", members: [] },
};
