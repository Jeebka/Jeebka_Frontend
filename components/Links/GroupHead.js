import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import css from "/styles/css/Link.module.css";
import PlusIcon from "../../styles/resources/svg/PlusIcon";
import GroupIcon from "../../styles/resources/svg/GroupAddIcon";
import PopUpButton from "../Commons/PopUp/PopUpButton";
import SearchBar from "../topBar/SearchBar";

export default function GroupHead({ info, reloadViewContent, search}) {
  return (
    <>
      <Box className={css.header}>
        <Box className={css.header__bar}>
          <Typography className={css.title}> {info.name}</Typography>
          <SearchBar search={search} renderTags={true} tags={info.linksTags.map((tag) => {return {name: tag}})}/>
        </Box>
        <Box className={css.button__menu__container}>
          <PopUpButton reloadViewContent={reloadViewContent} linkWindowProps={{renderGroups: false, defaultGroup: info.name}} isForLink={true} iconSize={'small'} svgIcon={<PlusIcon/>}></PopUpButton>
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
