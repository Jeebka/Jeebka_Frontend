import Box from "@mui/material/Box";
import css from "/styles/css/Link.module.css";
import Link from "./Link";
import PropTypes from "prop-types";

export default function LinkList({ info, handleDeleteLink }) {
  return (
    <>
      <Box className={css.links_list_container}>
        {info.links?.map((link) => (
          <Link
            className={css.link}
            linkInfo={link}
            key={link.id}
            handleDeleteLink={handleDeleteLink}
          />
        ))}
      </Box>
    </>
  );
}

LinkList.propTypes = {
  info: PropTypes.any.isRequired,
};

LinkList.defaultProps = {
  info: { links: [] },
};
