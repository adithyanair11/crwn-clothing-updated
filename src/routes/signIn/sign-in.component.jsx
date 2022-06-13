import React from "react";
import { SignUpForm } from "../../components/signup/signup.comoponent";
import { SignInForm } from "../../components/signin/signin.component";
import './sign-in.styles';
import { SignInPageContainer } from "./sign-in.styles";

export const SignIn = () => {
    return(
        <SignInPageContainer>
            <SignInForm />
            <SignUpForm />
        </SignInPageContainer>
    );
}