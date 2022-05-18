import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import css from "/styles/css/Link.module.css";

export default function Link({ linkInfo, handleDeleteLink }) {
  const deleteLink = () => {
    handleDeleteLink(linkInfo.id);
  };
  console.log(linkInfo);
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
          {
            linkInfo.tags.map((text) => { return <span className={css.tag}>{text}</span>;})
          }
        </Box>
        <div className={css.button__delete}>
          <DeleteIcon onClick={deleteLink} className={css.icon__delete} />
        </div>
      </Box>
    </>
  );
}
