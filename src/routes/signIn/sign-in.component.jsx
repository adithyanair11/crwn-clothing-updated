import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
export const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user);
    }
    console.log(logGoogleUser);
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>SIGN IN</button>
        </div>
    );
}