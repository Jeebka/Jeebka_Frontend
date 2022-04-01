import Box from "@mui/material/Box";
import GroupHead from "/components/Links/GroupHead";
import LinkList from "/components/Links/LinkList";
import GroupInfo from "/components/Links/GroupInfo";
import { useState } from "react";

import css from "/styles/css/Link.module.css";

export default function GroupExtended({
  groupProps,
  handleDeleteLink,
  handleDeleteGroup,
}) {
  const [menuBarActive, setMenuBarActive] = useState(false);

  const menuBarToggle = () => {
    setMenuBarActive(!menuBarActive);
  };
  return (
    <Box className={css.group_extended_container}>
      <GroupHead info={groupProps} menuBarToggle={menuBarToggle} />
      <LinkList info={groupProps} handleDeleteLink={handleDeleteLink} />
      <GroupInfo
        groupProps={groupProps}
        active={menuBarActive}
        menuBarToggle={menuBarToggle}
        handleDeleteGroup={handleDeleteGroup}
      />
    </Box>
  );
}
