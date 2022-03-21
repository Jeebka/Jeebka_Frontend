import { Grid } from '@mui/material'
import { useState } from 'react'
import css from '../../styles/Login.module.css'
import SignInForm from './signInForm'
import SignUpForm from './signUpForm'

export default function SignForm({signInIsVisible, signUpIsVisible, handleLogIn, handleSignUp}) {

  return (
    <div className={`${css.sign_card}`}>
      <div className={`${css.sign_card_element} ${css.one}`}>
        {signUpIsVisible ? <SignUpForm handleSignUp={handleSignUp} className={`${css.sign_form} ${signInIsVisible ? css.fade_out: ""}`}></SignUpForm> : null}
      </div>
      <div className={`${css.sign_card_element} ${css.two}`}>
        {signInIsVisible ? <SignInForm handleLogIn={handleLogIn} className={`${css.sign_form} ${signUpIsVisible ? css.fade_out : ""}`}></SignInForm> : null}
      </div>
    </div>
  )
}