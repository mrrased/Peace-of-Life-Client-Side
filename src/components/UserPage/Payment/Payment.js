import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';
import { CardElement } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');



const Payment = () => {
    return (
        <div>
            <h5>payment</h5>
            <Elements stripe={stripePromise}>
                {/* <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                /> */}
                <PaymentForm></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;