import { Avatar } from "@mui/material"
import css from "/styles/css/NavBar.module.css"
import UserItemMenu from "./UserMenu"

export default function UserItem() {

    return (
      <div className={css.userItem}>
          <Avatar sx={{bgColor: "#21BDC0"}}>JP</Avatar>
          <UserItemMenu></UserItemMenu>
      </div>
    )
  }