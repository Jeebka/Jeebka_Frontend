import SideMenu from "/components/SideMenu/SideMenu";
import ProtectedRoute from "/components/Auth/ProtectedRoute";
import HomeContent from "/components/HomeContainer/HomeContainer";
import GroupsContainer from "/components/Groups/GroupsContainer";
import TopBar from "/components/TopBar/TopBar";
import {createRef, useState} from "react";
import {logOut} from "/lib/auth/auth.services";
import store from "/lib/redux";
import {changeContainer} from "../lib/redux/actions";
import css from "/styles/css/Page.module.css";
import GroupExtended from "../components/Links/GroupExtended";
import Button from "@mui/material/Button";
import {LogInApi} from "../lib/jeebka/jeebka.services";


const groupFeik = {
  id: "123",
  name: "GROUP_NAME",
  description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et turpis molestie, aliquam nulla ut, elementum ipsum. Praesent eget dignissim arcu. Sed dignissim vestibulum enim, quis malesuada nunc pharetra sed. Phasellus id sem et ipsum posuere aliquam non efficitur elit. In euismod ex vitae massa eleifend, rhoncus viverra augue ultricies. Phasellus vitae ex ornare, porta nibh vitae, porttitor felis. Etiam sit amet tristique arcu. Aenean viverra, erat eget semper tristique, felis quam interdum purus, non tempus neque neque nec orci. Sed elementum lorem nec nibh ultricies suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam interdum lectus ut ipsum cursus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla interdum eleifend ultrices.",
  public: true,
  tags: ["tag1", "tag2"],
  members: ["ElPepe", "dam"],
  links: [
    {
      id: 1,
      name: "facebook",
      url: "https://web.facebook.com",
      tags: [
        "addred",
        "red social",
        "interesting ",
        "gafas",
        "tag5",
        "tag6",
        "tag7",
        "tag8",
        "tag9",
        "tag0",
      ],
    },
    {
      id: 2,
      name: "link2",
      url: "www.urlsuperlargaparatestearlavisualizacion2.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 3,
      name: "link1",
      url: "www.url1.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 4,
      name: "link2",
      url: "www.url2.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 5,
      name: "link1",
      url: "www.url1.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 6,
      name: "link2",
      url: "www.url2.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 7,
      name: "link1",
      url: "www.url1.com",
      tags: ["tag1", "tag2"],
    },
    {
      id: 8,
      name: "link2",
      url: "www.url2.com",
      tags: ["tag1", "tag2"],
    },
  ],
};


export default function Home() {
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const containerRef = createRef();
  const [group, setGroup] = useState(null);
  const [groups, setGroups] = useState([]);

  const handleTabChange = (tab) => {
    switch (tab) {
      case 0:
        if(!isActive[0]) setIsActive([true, false, false, false]);
        break;
      case 1:
        if(!isActive[1]) setIsActive([false, true, false, false]);
        break;
      case 2:
        if(!isActive[2]) setIsActive([false, false, true, false]);
        break;
    }
  }

  const handleGroupOnClick = () => {
    setIsActive([false, false, false, true]);
    setGroup(groupFeik);
  }

  const handleLogOut = () => {
    logOut(() => {});
  }

  store.dispatch(changeContainer(containerRef));
  LogInApi('j382@mail.com','test1234');
  console.log(store.getState().auth);

  return (
      <ProtectedRoute redirectRoute="/">
        <div className={css.pageContent} ref={containerRef}>
          <HomeContent shouldRenderAddButton={isActive[0]} isRenderAGroup={isActive[3]}>
            {!isActive[3] ? <GroupsContainer groups={groups}/> : null}
            {isActive[3] ? <GroupExtended groupProps={group}/> : null}
          </HomeContent>
          <TopBar tabsState={isActive}
                  homeOnClick={() => {handleTabChange(0);}}
                  sharedOnClick={() => {handleTabChange(2);}}
                  suggestedOnClick={() => {handleTabChange(1);}}>
          </TopBar>
          <SideMenu></SideMenu>
          <Button onClick={handleGroupOnClick}>Mostrar grupo</Button>
        </div>
      </ProtectedRoute>
  )
}