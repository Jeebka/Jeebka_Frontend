import SvgIcon from "@material-ui/core/SvgIcon";
import css from "../../styles/SideMenu.module.css";

export default function MenuItem({svgIcon, text}) {

  return (
    <div className={css.menuItem}>
        <SvgIcon>
          {svgIcon}
        </SvgIcon>
        <span>
          {text}
        </span>
    </div>
  )
}
