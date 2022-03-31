import css from "/styles/css/NavBar.module.css"
import UserItem from "./UserItem"

export default function UserBar() {

    return (
      <div className={css.userBar}>
          <UserItem></UserItem>
      </div>
    )
  }