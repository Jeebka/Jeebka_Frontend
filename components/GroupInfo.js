import Box from "@mui/material/Box";
import GroupInfoHead from "./GroupInfoHead";
import Description from "./Description";
import Members from "./Members";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import css from "../styles/GroupInfo.module.css";

export default function GroupInfo({
  groupProps,
  active,
  menuBarToggle,
  handleDeleteGroup,
}) {
  const deleteGroup = () => {
    handleDeleteGroup(groupProps?.id);
  };

  return (
    <>
      <Box
        className={
          active ? "group__info__container active" : "group__info__container"
        }
      >
        <GroupInfoHead info={groupProps} menuBarToggle={menuBarToggle} />
        <Box className={css.info__card}>
          <Button
            className={css.detelete__button}
            variant="outlined"
            color="error"
            onClick={deleteGroup}
          >
            Eliminar grupo
          </Button>
        </Box>

        <Description info={groupProps} />
        <Members info={groupProps} />
      </Box>
    </>
  );
}
