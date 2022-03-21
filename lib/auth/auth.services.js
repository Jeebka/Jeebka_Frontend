import { Auth } from "../firebase/firebase.config";
import * as auth from "firebase/auth";

export function signUp(email, password, callback) {
    auth.createUserWithEmailAndPassword(Auth, email, password).then(() => {
        if (callback != null) callback();
    }).catch((error) => {
        console.log(error)
    });
}

export function logIn(email, password, callback) {
    auth.signInWithEmailAndPassword(Auth, email, password).then(() => {
        if (callback != null) callback();
    }).catch((error) => {
        console.log(error)
    });
}

export function logOut(callback){
    console.log("saliendo")
    auth.signOut(Auth).then(() => {
        if (callback != null) callback();
    }).catch((error) => {
        console.log(error);
    })
}

export function onAuthStateChanged(callback){
    auth.onAuthStateChanged(Auth, (user) => {
        callback(user);
    })
}

