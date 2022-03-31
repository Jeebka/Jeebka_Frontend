import Box from "@mui/material/Box";
import css from "../styles/LinkList.module.css";
import Link from "./Link";
import PropTypes from "prop-types";

export default function LinkList({ info, handleDeleteLink }) {
  return (
    <>
      <Box className="links-list-container">
        {info.links?.map((link) => (
          <Link
            className="link"
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
