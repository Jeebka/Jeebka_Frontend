import ProtectedRoute from "../components/auth/protectedRoute";
import { logOut } from "../lib/auth/auth.services";
import SearchBar from "../components/links/SearchBar";
import AddLink from "../components/links/AddLink";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function home() {
  const handleLogOut = () => {
    logOut(() => {});
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
          <section>
            <AddLink />
          </section>
        </div>
      }
    ></ProtectedRoute>
  );
}
