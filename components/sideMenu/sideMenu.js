import css from "../../styles/SideMenu.module.css"
import MenuItem from "./menuItem"
import SuggestedIcon from "../../styles/resources/svg/suggestedIcon"
import HomeIcon from "../../styles/resources/svg/homeIcon"
import SharedIcon from "../../styles/resources/svg/sharedIcon"
import GroupIcon from "../../styles/resources/svg/groupIcon"


export default function SideMenu({children}) {

  return (
    <div className={css.sideMenu}>
      <div className={css.sideMenuContent}>
        <MenuItem svgIcon={<SuggestedIcon/>} text={"Suggested"}></MenuItem>
        <MenuItem svgIcon={<HomeIcon/>} text={"Home"}></MenuItem>
        <MenuItem svgIcon={<SharedIcon/>} text={"Shared"}></MenuItem>
        <hr></hr>
        <MenuItem svgIcon={<GroupIcon/>} text={"Group 1"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"Group 2"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"Group 3"}></MenuItem>
        <MenuItem svgIcon={<GroupIcon/>} text={"Group 4"}></MenuItem>
      </div>
    </div>
  )
}
