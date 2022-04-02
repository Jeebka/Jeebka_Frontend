import SideMenu from "/components/SideMenu/SideMenu";
import ProtectedRoute from "/components/Auth/ProtectedRoute";
import HomeContent from "/components/HomeContainer/HomeContainer";
import GroupsContainer from "/components/Groups/GroupsContainer";
import TopBar from "/components/TopBar/TopBar";
import {createRef, useEffect, useState} from "react";
import { logOut } from "/lib/auth/auth.services";
import css from "/styles/css/Page.module.css";
import GroupExtended from "../components/Links/GroupExtended";
import {GetUserGroups, GetUserSharedGroups, GetUserSuggestedGroups, LogInApi} from "../lib/jeebka/jeebka.services";

export default function Home() {
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const containerRef = createRef();
  const [group, setGroup] = useState(null);
  const [groups, setGroups] = useState([]);

  const changeCurrentDisplayedGroups = (fetchedGroups) => {
    setGroups(fetchedGroups && Object.keys(fetchedGroups).length === 0 ? [] : fetchedGroups);
  }
  const loadGroups = () => {
    if(isActive[0]) {
      GetUserGroups(changeCurrentDisplayedGroups);
    }
    else if(isActive[1]) {
      GetUserSuggestedGroups(changeCurrentDisplayedGroups)
    }
    else if(isActive[2]) {
      GetUserSharedGroups(changeCurrentDisplayedGroups)
    }
  }

  useEffect(() => {
      loadGroups();
  },[isActive])

  const handleTabChange = (tab) => {
    switch (tab) {
      case 0:
        if(!isActive[0]) {
          GetUserGroups(changeCurrentDisplayedGroups);
          setIsActive([true, false, false, false]);
        }
        break;
      case 1:
        if(!isActive[1]) {
          GetUserSuggestedGroups(changeCurrentDisplayedGroups)
          setIsActive([false, true, false, false]);
        }
        break;
      case 2:
        if(!isActive[2]) {
          GetUserSharedGroups(changeCurrentDisplayedGroups)
          setIsActive([false, false, true, false]);
        }
        break;
    }
  }

  const refreshContent = () => {

  }

  const changeGroup = (groupName) => {
    console.log("Changing to group "+groupName)
    let newGroup = groups.filter(group => group.name == groupName);
    console.log(newGroup);
    setGroup(newGroup[0]);
    setIsActive([false, false, false, true]);
  }

  const handleLogOut = () => {
    logOut(() => {});
  }

  return (
      <ProtectedRoute redirectRoute="/">
        <div className={css.pageContent} ref={containerRef}>
          <HomeContent shouldRenderAddButton={isActive[0]} isRenderAGroup={isActive[3]} reloadViewContent={loadGroups}>
            {!isActive[3] ? <GroupsContainer groups={groups} changeGroup={changeGroup}/> : null}
            {isActive[3] ? <GroupExtended groupProps={group}/> : null}
          </HomeContent>
          <TopBar tabsState={isActive}
                  homeOnClick={() => {handleTabChange(0);}}
                  sharedOnClick={() => {handleTabChange(2);}}
                  suggestedOnClick={() => {handleTabChange(1);}}>
          </TopBar>
          <SideMenu
              homeOnClick={() => {handleTabChange(0);}}
              sharedOnClick={() => {handleTabChange(2);}}
              suggestedOnClick={() => {handleTabChange(1);}}
              groups = {groups}
              changeGroup = {changeGroup}
          >
          </SideMenu>
        </div>
      </ProtectedRoute>
  )
}