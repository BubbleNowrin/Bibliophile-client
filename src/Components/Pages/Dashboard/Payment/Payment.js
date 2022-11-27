import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const bookingDetails = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
    }

    return (
        <div>
            <Helmet>
                <title>Bibliophile - Payment</title>
            </Helmet>
            <h3 className="text-3xl font-serif ml-2">Payment for {bookingDetails.bookName}</h3>
            <p className='text-xl'>Please Pay ${bookingDetails.resalePrice}</p>
            <div className='w-96 border p-10 border-slate-900 border-dashed my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookingDetails={bookingDetails}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;