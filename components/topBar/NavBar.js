import css from "../../styles/NavBar.module.css";
import NavBarItem from "./NavBarItem";
import SuggestedIcon from "../../styles/resources/svg/suggestedIcon";
import HomeIcon from "../../styles/resources/svg/homeIcon";
import SharedIcon from "../../styles/resources/svg/sharedIcon";

export default function NavBar() {

  return (
    <div className={css.navBar}>
        <NavBarItem svgIcon={<HomeIcon/>}></NavBarItem>
        <NavBarItem svgIcon={<SuggestedIcon/>}></NavBarItem>
        <NavBarItem svgIcon={<SharedIcon/>}></NavBarItem>
    </div>
  )
}
