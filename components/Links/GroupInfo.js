import Box from "@mui/material/Box";
import GroupInfoHead from "./GroupInfoHead";
import Description from "./Description";
import Members from "./Members";
import Button from "@mui/material/Button";

import css from "/styles/css/Link.module.css";

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
        className={`${css.group__info__container} ${active ? `${css.active}` : ""}`}
      >
        <GroupInfoHead info={groupProps} menuBarToggle={menuBarToggle} />
        <Box className={css.info__card}>
          <Button
            className={css.delete__button}
            variant="outlined"
            color="error"
            onClick={deleteGroup}
          >
            Delete group
          </Button>
        </Box>

        <Description info={groupProps} />
        <Members info={groupProps} />
      </Box>
    </>
  );
}
