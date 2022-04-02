import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth";
import credentials from "./firebase.credentials.json"

const App = firebase.apps[0] ?? firebase.initializeApp(credentials);
export const Auth = getAuth(App);