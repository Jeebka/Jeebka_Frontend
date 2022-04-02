import css from "/styles/css/SideMenu.module.css"
import MenuItem from "/components/Commons/menuItem"
import SuggestedIcon from "/styles/resources/svg/suggestedIcon"
import HomeIcon from "/styles/resources/svg/homeIcon"
import SharedIcon from "/styles/resources/svg/sharedIcon"
import GroupIcon from "/styles/resources/svg/groupIcon"
import GroupMiniature from "../Groups/GroupMiniature";


export default function SideMenu({sharedOnClick, suggestedOnClick, groups, changeGroup, homeOnClick}) {

  let selectGroups = () => {
    let selectedGroups = []
    for (let group in groups) {
      if(selectedGroups.length === 4) break;
      selectedGroups.push(groups[group]);
    }
    console.log(groups)
    return selectedGroups;
  }

  return (
    <div className={css.sideMenu}>
      <div className={css.sideMenuContent}>
        <MenuItem svgIcon={<HomeIcon/>} onClick={homeOnClick} text={"Home"}></MenuItem>
        <MenuItem svgIcon={<SuggestedIcon/>} onClick={suggestedOnClick} text={"Suggested"}></MenuItem>
        <MenuItem svgIcon={<SharedIcon/>} onClick={sharedOnClick} text={"Shared"}></MenuItem>
        <hr></hr>
        {
          selectGroups().map((group) => {
            console.log(group)
            return <MenuItem svgIcon={<GroupIcon/>} text={group.name} onClick={() => {changeGroup(group.name)}}/>
          })
        }
      </div>
    </div>
  )
}
