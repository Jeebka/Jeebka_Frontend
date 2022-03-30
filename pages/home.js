import ProtectedRoute from "../components/auth/protectedRoute";
import GroupsContainer from "../components/groups/groupsContainer";
import HomeContent from "../components/homeContainer/homeContainer";
import TopBar from "../components/topBar/TopBar";
import SideMenu from "../components/sideMenu/sideMenu";
import { logOut } from "../lib/auth/auth.services";

export default function home() {

  const handleLogOut = () => {
    logOut(() => {});
  }

  var group = {name: "group", href: "www.link.com"}
  var groups = [];
  for (let index = 0; index < 32; index++) {
    groups.push(group);
  }

  return (
      <ProtectedRoute redirectRoute="/"
        child={
            <div>
                <HomeContent 
                  child={
                    <GroupsContainer groups={groups}></GroupsContainer>
                  }>
                </HomeContent>
                <TopBar></TopBar>
                <SideMenu></SideMenu>
            </div>
        } >
      </ProtectedRoute>
  )
}
