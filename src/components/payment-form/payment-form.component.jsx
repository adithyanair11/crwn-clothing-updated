import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';

import {PaymentFormContainer,FormContainer} from './payment-form.styles';

import { Button, BUTTON_TYPES_CLASSES} from '../custom-button/custom-button.component';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);


    const paymentHandler = async(e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then((res) => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: currentUser ? currentUser.displayName : 'Guest'
            }
        }});
        setIsProcessingPayment(false);
        if(paymentResult.error){
            alert(paymentResult.error)
        }else if(paymentResult.paymentIntent.status === 'succeeded'){
            alert('payment successful')
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button disabled={isProcessingPayment}buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}