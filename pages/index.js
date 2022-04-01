import { useRouter } from "next/router"
import Sign from "/components/Sign/Sign";
import { onAuthStateChanged } from '/lib/auth/auth.services';

export default function Index() {

  const router = useRouter();

  const handleLogIn = () => {
    router.push("/home");
  }
  const handleSignUp = () => {
    router.push("/home");
  }

  let toRender = null;

  const authStateChangeCallback = (user) => {
    if (user) {
      router.push("/home");
    }else {
      toRender = <Sign handleLogIn={handleLogIn} handleSignUp={handleSignUp}></Sign>
    }
  }

  onAuthStateChanged(authStateChangeCallback);

  return (
    <>
      <Sign handleLogIn={handleLogIn} handleSignUp={handleSignUp}></Sign>
    </>
  )
}
