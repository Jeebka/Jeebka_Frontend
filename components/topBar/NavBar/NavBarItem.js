import { SvgIcon } from "@mui/material"
import css from "/styles/css/NavBar.module.css"

export default function NavBarItem({svgIcon, isActive, onClick}) {

  return (
    <div className={`${css.navBarItem} ${isActive ? css.active : ""}`} onClick={onClick}>
        <div className={css.navBarItemContent}>
            <SvgIcon fontSize='large'>
              {svgIcon}
            </SvgIcon>
        </div>
    </div>
  )
}
