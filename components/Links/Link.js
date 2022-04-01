import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import css from "/styles/css/Link.module.css";

export default function Link({ linkInfo, handleDeleteLink }) {
  const deleteLink = () => {
    handleDeleteLink(linkInfo.id);
  };
  return (
    <>
      <Box className={css.link}>
        <Box className={css.head__link__container}>
          <Box className={css.title__container}>
            <h3>{linkInfo.name}</h3>
          </Box>
          <Box className={css.url__container}>
            <a href={linkInfo.url} target="_blank" rel="noreferrer">
              {linkInfo.url}
            </a>
          </Box>
        </Box>
        <Box className={css.tags__container}>
          {linkInfo.tags.map((tag) => (
            <span className={css.tag} key={tag}>
              {tag}
            </span>
          ))}
        </Box>
        <Box className={css.button__delete}>
          <Button onClick={deleteLink}>
            <DeleteIcon className={css.icon__delete} />
          </Button>
        </Box>
      </Box>
    </>
  );
}
