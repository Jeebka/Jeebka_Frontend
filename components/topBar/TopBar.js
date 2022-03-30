import css from "../../styles/NavBar.module.css"
import NavBar from "./NavBar"

export default function TopBar() {

  return (
    <div className={css.topBar}>
        <div>1</div>
        <NavBar></NavBar>
        <div>2</div>
    </div>
  )
}
