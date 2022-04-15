import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/from-input.component";
import './signup.styles.css';

import { Button } from "../custom-button/custom-button.component";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUpForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);

    const {displayName,email,password,confirmPassword} = formFields;

    const resetFormFeilds = () => {
        setFormFields(defaultFormFields)
    }
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            try{
                const {user} = await createAuthUserWithEmailAndPassword(email,password);
                await createUserDocumentFromAuth(user,{displayName});
                resetFormFeilds();
            }catch(err){
                if(err.code === 'auth/email-already-in-use'){
                    alert('email already in use');
                }else{
                    console.log(err);
                }
            }
        }else{
            alert('passwords do not match');
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" 
                label="Display Name"
                required 
                onChange={handleChange}
                name="displayName"
                value={displayName}/>

                <FormInput type="email" 
                label="Email"
                required 
                onChange={handleChange}
                name="email"
                value={email}/>

                <FormInput type="password" 
                label="Password"
                required 
                onChange={handleChange}
                name="password"
                value={password}/>

                
                <FormInput
                type="password" 
                required
                label="Confirm Password" 
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}