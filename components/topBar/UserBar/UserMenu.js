import css from "/styles/css/NavBar.module.css"
import LogOutIcon from "/styles/resources/svg/LogOutIcon"
import MenuItem from "/components/Commons/MenuItem"

export default function UserItemMenu() {

    return (
        <div className={css.userItemMenu}>
            <MenuItem svgIcon={<LogOutIcon/>} text={"Log out"} onClick={()=>{console.log("Exit")}} iconSize="small"></MenuItem>
        </div>
    )
  }