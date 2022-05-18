import css from "/styles/css/NavBar.module.css"
import NavBar from "./NavBar/NavBar"
import SearchBar from "./SearchBar"
import UserBar from "./UserBar/UserBar"

export default function TopBar({homeOnClick, suggestedOnClick, sharedOnClick, tabsState, tags}) {

  return (
    <div className={css.topBar}>
      <SearchBar tags={tags}/>
      <NavBar homeOnClick={homeOnClick} sharedOnClick={sharedOnClick} suggestedOnClick={suggestedOnClick} isActive={tabsState}/>
      <UserBar/>
    </div>
  )
}
