import Box from "@mui/material/Box";
import GroupHead from "/components/Links/GroupHead";
import LinkList from "/components/Links/LinkList";

import css from "/styles/css/Link.module.css";
import {useEffect, useState} from "react";
import {GetUserGroup} from "../../lib/jeebka/jeebka.services";
import {changeAddOptions} from "../../lib/redux/actions";
import store from "../../lib/redux";

export default function GroupExtended({groupProps, handleDeleteLink, reloadViewContent}) {

    const [links,setLinks] = useState([]);
    const [displayedLinks, setDisplayedLinks] = useState(links);

    const search = (name, tagsFilters) => {
        let newLinks = links.filter((link) => {
            return !tagsFilters.map((tag) => {return link.tags.includes(tag)}).includes(false);
        });
        //if(name != null || name != "") newLinks.filter((link) => link.name)
        setDisplayedLinks(newLinks);
    }
    const loadLinks = () => {
        GetUserGroup(groupProps.name, (data) => {
            setLinks(data.links);
            setDisplayedLinks(links);
            let addOptions = store.getState().addOptions;
            let newTags = data.linksTags.map((tag) => {return {name: tag}});
            newTags = newTags.filter(tag => !addOptions.tags.map((oldTag) => {return oldTag.name}).includes(tag.name));
            addOptions.tags = [...addOptions.tags, ...newTags];
            store.dispatch(changeAddOptions(addOptions));
        })
    }

    const reload = () => {
        reloadViewContent();
        loadLinks();
    }

    const deleteLink = (linkId) => {
        handleDeleteLink(linkId, () => {
            reload();
        });
    }

    useEffect(() => {
        loadLinks();
    },[])

  return (
      <>
          <Box className={css.group_extended_container}>
              <GroupHead info={groupProps} search={search} reloadViewContent={loadLinks}/>
              <LinkList links={displayedLinks} handleDeleteLink={deleteLink}/>
          </Box>
      </>

  );
}
