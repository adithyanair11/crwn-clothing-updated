import React from "react";
import { SignUpForm } from "../../components/signup/signup.comoponent";
import { SignInForm } from "../../components/signin/signin.component";
import './sign-in.styles.css';

export const SignIn = () => {
    return(
        <div className="signin-page-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}