import React, { useState, useEffect } from "react";
import ProtectedRoute from "../components/auth/protectedRoute";
import { logOut } from "../lib/auth/auth.services";
import SearchBar from "../components/links/SearchBar";
import AddLink from "../components/links/AddLink";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsContainer from "../components/groups/groupsContainer";
import AddLinkIcon from "@mui/icons-material/AddLink";
import CloseIcon from "@mui/icons-material/Close";

export default function home() {
  const handleLogOut = () => {
    logOut(() => {});
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log("show: ", show);
  };

  return (
    <ProtectedRoute
      redirectRoute="/"
      child={
        <div>
          <header>
            <IconButton onClick={handleLogOut}>
              <AccountCircleIcon sx={{ width: 30, height: 30 }} />
            </IconButton>
          </header>
          <section>
            <SearchBar />
          </section>
          <IconButton className="AddLinkButton" onClick={handleClick}>
            {show ? (
              <CloseIcon sx={{ width: 30, height: 30 }} />
            ) : (
              <AddLinkIcon sx={{ width: 30, height: 30 }} />
            )}
          </IconButton>
          <section>
            <AddLink show={show} clickButton={() => handleClick()} />
          </section>
        </div>
      }
    ></ProtectedRoute>
  );
}
