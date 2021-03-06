import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Cover from "./Cover";
import SignForm from "./SignForm";
import css from '/styles/css/Login.module.css'
import { useState } from "react";

export default function Sign({handleLogIn, handleSignUp}) {

  const [signInIsVisible, setSignInVisibility] = useState(true);
  const [signUpIsVisible, setSignUpVisibility] = useState(false);
  const [isSafeToSwitch, setIsSafeToSwitch] = useState(true);

  const switchForm = () => {
    if (isSafeToSwitch) {
      setIsSafeToSwitch(false);
      if(signInIsVisible) {
        setTimeout(() => {setSignUpVisibility(true)}, 200);
        setTimeout(() => {setSignInVisibility(false)}, 500);
      }else if(signUpIsVisible){
        setTimeout(() => {setSignInVisibility(true)}, 200);
        setTimeout(() => {setSignUpVisibility(false)}, 500);
      }
      setTimeout(() => { setIsSafeToSwitch(true);}, 750);
    }
    return isSafeToSwitch;
    
  }

  return (
    <div className={css.main}>
      <Container component="main" maxWidth="md">
        <div sx={{height: "75vh"}} className={css.forms_container}>
          <SignForm signInIsVisible={signInIsVisible} signUpIsVisible={signUpIsVisible} handleLogIn={handleLogIn}/>
          <Cover onClick={switchForm}/>
        </div>
      </Container>
    </div>
  )
}
