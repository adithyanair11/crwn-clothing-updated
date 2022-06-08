import './signin.styles.css';

import { FormInput } from '../form-input/from-input.component';
import { useState } from 'react';
import { Button } from '../custom-button/custom-button.component';
import {signInWithGooglePopUp,
signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
    email: '',
    password: ''
}

export const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);

    const {email,password} = formFields;

    
    const resetFormFeilds = () => {
        setFormFields(defaultFormFields)
    }

    const logGoogleUser = async() => {
        await signInWithGooglePopUp();
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            

            resetFormFeilds();
            }catch(err){
                if(err.code === 'auth/wrong-password'){
                    alert('incorrect password');
                }
            }
    }
    return(
        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
            <FormInput 
                type="email" 
                required
                label="email"
                onChange={handleChange}
                value={email}
                name="email"
                />
                <FormInput 
                type="password" 
                required
                label="Confirm Password"
                onChange={handleChange}
                value={password}
                name="password"
                />
                <div className='buttons-container'>
                    <Button type="submit">Sign in</Button>
                    
                    <Button onClick={logGoogleUser} buttonType="google">Google sign in</Button>
                </div>
            </form>
        </div>
    )
}