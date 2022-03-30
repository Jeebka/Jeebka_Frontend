import { SvgIcon } from "@mui/material"
import css from "../../styles/NavBar.module.css"

export default function NavBarItem({svgIcon}) {

  return (
    <div className={css.navBarItem}>
        <div className={css.navBarItemContent}>
            <SvgIcon fontSize='large'>
            {svgIcon}
            </SvgIcon>
        </div>
    </div>
  )
}
