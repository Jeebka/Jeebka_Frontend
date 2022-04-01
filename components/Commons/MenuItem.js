import css from "/styles/css/SideMenu.module.css";
import { SvgIcon } from "@mui/material";

export default function MenuItem({svgIcon, text, onClick, iconSize}) {

  return (
    <div className={css.menuItem} onClick={onClick}>
        <SvgIcon fontSize={iconSize}> {svgIcon} </SvgIcon>
        <span> {text} </span>
    </div>
  );
  
}
