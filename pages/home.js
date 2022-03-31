import SideMenu from "/components/SideMenu/SideMenu";
import ProtectedRoute from "/components/Auth/ProtectedRoute";
import HomeContent from "/components/HomeContainer/HomeContainer";
import GroupsContainer from "/components/Groups/GroupsContainer";
import TopBar from "/components/TopBar/TopBar";

import {createRef, useState} from "react";
import {logOut} from "/lib/auth/auth.services";

import css from "/styles/css/Page.module.css"


export default function Home() {
  const [isActive, setIsActive] = useState([true, false, false]);
  const container = createRef();

  const handleTabChange = (tab) => {
    if (tab==0 && !isActive[0]){
      setIsActive([true, false, false])
    }
    else if (tab==1 && !isActive[1]){
      setIsActive([false, true, false]);
    }
    else if (tab==2 && !isActive[2]){
      setIsActive([false, false, true]);
    }
  }

  const handleLogOut = () => {
    logOut(() => {});
  }

  let groups = [];
  if(isActive[0]) groups = [{name: 'Matematicas', href: 'www.link.com'},{name: 'Animes', href: 'www.link.com'},{name: 'Line ups de sova', href: 'www.link.com'},{name: 'SGBD Oracle', href: 'www.link.com'},{name: 'SGBD Firebase', href: 'www.link.com'},{name: 'Musica chida', href: 'www.link.com'}];
  if(isActive[1]) groups = [{name: 'Matematicas discretas', href: 'www.link.com'},{name: 'Animes 2022', href: 'www.link.com'},{name: 'Series 2022', href: 'www.link.com'},{name: 'Valorant tutoriales', href: 'www.link.com'}];  
  if(isActive[2]) groups = [{name: 'FDGP proyecto', href: 'www.link.com'},{name: 'SGBD', href: 'www.link.com'},{name: 'IETI Frontend', href: 'www.link.com'}];

  return (
      <ProtectedRoute redirectRoute="/"
        child={
            <div className={css.homePage} ref={container}>
              <HomeContent shouldRenderAddButton={isActive[0]}>
                <GroupsContainer groups={groups}></GroupsContainer>
              </HomeContent>
              <TopBar tabsState={isActive}
                homeOnClick={() => {handleTabChange(0);}}
                sharedOnClick={() => {handleTabChange(1);}}
                suggestedOnClick={() => {handleTabChange(2);}}>
              </TopBar>
              <SideMenu></SideMenu>
            </div>
        } >
      </ProtectedRoute>
  )
}