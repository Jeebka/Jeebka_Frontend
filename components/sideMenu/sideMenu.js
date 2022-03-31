import css from "/styles/css/SideMenu.module.css"
import MenuItem from "/components/Commons/menuItem"
import SuggestedIcon from "/styles/resources/svg/suggestedIcon"
import HomeIcon from "/styles/resources/svg/homeIcon"
import SharedIcon from "/styles/resources/svg/sharedIcon"
import GroupIcon from "/styles/resources/svg/groupIcon"


export default function SideMenu({children}) {

  return (
    <div className={css.sideMenu}>
      <div className={css.sideMenuContent}>
        <MenuItem svgIcon={<HomeIcon/>} text={"Home"}></MenuItem>
        <MenuItem svgIcon={<SuggestedIcon/>} text={"Suggested"}></MenuItem>
        <MenuItem svgIcon={<SharedIcon/>} text={"Shared"}></MenuItem>
        <hr></hr>
        <MenuItem svgIcon={<GroupIcon/>} text={"Line ups de sova"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"Animes"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"Musica chida"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"SGBD Oracle"}></MenuItem>
      </div>
    </div>
  )
}
