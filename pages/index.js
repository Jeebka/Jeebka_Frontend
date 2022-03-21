import { logIn } from "../lib/auth/auth.services"
import { useRouter } from "next/router"
import Sign from "../components/sign/sign";

export default function index() {

  const router = useRouter();
  const handleLogIn = () => {
    router.push("/home");
  }
  const handleSignUp = () => {
    router.push("/home");
  }

  return (
    <Sign handleLogIn={handleLogIn} handleSignUp={handleSignUp}></Sign>
  )
}
