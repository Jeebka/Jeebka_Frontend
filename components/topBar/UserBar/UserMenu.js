import css from "/styles/css/NavBar.module.css"
import LogOutIcon from "/styles/resources/svg/LogOutIcon"
import MenuItem from "/components/Commons/MenuItem"
import {logOut} from "../../../lib/auth/auth.services";

export default function UserItemMenu() {

    const handleLogOut = () => {
        logOut(() => {});
    }
    return (
        <div className={css.userItemMenu}>
            <MenuItem svgIcon={<LogOutIcon/>} text={"Log out"} onClick={handleLogOut} iconSize="small"></MenuItem>
        </div>
    )
  }