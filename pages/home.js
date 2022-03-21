import ProtectedRoute from "../components/auth/protectedRoute"
import { logOut } from "../lib/auth/auth.services";

export default function home() {

  const handleLogOut = () => {
    logOut(() => {});
  }

  return (
      <ProtectedRoute redirectRoute="/"
        child={
            <div>
                home
                <button onClick={handleLogOut}>Log out</button>
            </div>
        } >
      </ProtectedRoute>
  )
}
