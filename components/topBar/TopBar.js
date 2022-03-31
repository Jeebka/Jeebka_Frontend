import css from "/styles/css/NavBar.module.css"
import NavBar from "./NavBar/NavBar"
import SearchBar from "./SearchBar"
import UserBar from "./UserBar/UserBar"

export default function TopBar({homeOnClick, suggestedOnClick, sharedOnClick, tabsState}) {

  return (
    <div className={css.topBar}>
      <SearchBar/>
      <NavBar homeOnClick={homeOnClick} sharedOnClick={sharedOnClick} suggestedOnClick={suggestedOnClick} isActive={tabsState}></NavBar>
      <UserBar></UserBar>
    </div>
  )
}
