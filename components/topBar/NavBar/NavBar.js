import css from "/styles/css/NavBar.module.css";
import NavBarItem from "./NavBarItem";
import SuggestedIcon from "/styles/resources/svg/suggestedIcon";
import HomeIcon from "/styles/resources/svg/homeIcon";
import SharedIcon from "/styles/resources/svg/sharedIcon";

export default function NavBar({homeOnClick, suggestedOnClick, sharedOnClick, isActive}) {

  return (
    <div className={css.navBar}>
        <NavBarItem isActive={isActive[0]} onClick={homeOnClick} svgIcon={<HomeIcon/>}></NavBarItem>
        <NavBarItem isActive={isActive[1]} onClick={suggestedOnClick} svgIcon={<SuggestedIcon/>}></NavBarItem>
        <NavBarItem isActive={isActive[2]} onClick={sharedOnClick} svgIcon={<SharedIcon/>}></NavBarItem>
    </div>
  )
}
