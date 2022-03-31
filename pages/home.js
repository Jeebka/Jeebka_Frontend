import ProtectedRoute from "../components/auth/protectedRoute";
import GroupsContainer from "../components/groups/groupsContainer";
import HomeContent from "../components/homeContainer/homeContainer";
import TopBar from "../components/topBar/TopBar";
import SideMenu from "../components/sideMenu/sideMenu";
import { logOut } from "../lib/auth/auth.services";
import GroupExtended from "../components/GroupInfo";

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

export default function home() {
  const handleLogOut = () => {
    logOut(() => {});
  };

  var group = { name: "group", href: "www.link.com" };
  var groups = [];
  for (let index = 0; index < 32; index++) {
    groups.push(group);
  }

  return (
    <ProtectedRoute
      redirectRoute="/"
      child={
        <div>
          <HomeContent
            child={
              /*<GroupsContainer groups={groups}></GroupsContainer>*/ <GroupExtended
                groupProps={groupFeik}
              ></GroupExtended>
            }
          ></HomeContent>
          <TopBar></TopBar>
          <SideMenu></SideMenu>
        </div>
      }
    ></ProtectedRoute>
  );
}
