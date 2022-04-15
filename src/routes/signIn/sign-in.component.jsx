import React from "react";
import {signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/signup/signup.comoponent";

export const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <SignUpForm />
        </div>
    );
}