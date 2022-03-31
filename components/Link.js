import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import css from "../styles/Link.module.css";

export default function Link({ linkInfo, handleDeleteLink }) {
  const deleteLink = () => {
    handleDeleteLink(linkInfo.id);
  };
  return (
    <>
      <Box className="link">
        <Box className="head__link__container">
          <Box className="title__container">
            <h3>{linkInfo.name}</h3>
          </Box>
          <Box className="url__container">
            <a href={linkInfo.url} target="_blank" rel="noreferrer">
              {linkInfo.url}
            </a>
          </Box>
        </Box>
        <Box className="tags__container">
          {linkInfo.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </Box>
        <Box className="button__delete">
          <Button onClick={deleteLink}>
            <DeleteIcon className="icon__delete" />
          </Button>
        </Box>
      </Box>
    </>
  );
}
