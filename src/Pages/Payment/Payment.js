import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { name, model, resalePrice } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl"> {name}</h3>
            <h3 className="text-3xl">Payment for {model}</h3>
            <p className="text-xl">Please pay <strong>${resalePrice}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;