import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const CheckoutForm = ({ bookingDetails }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { logOut } = useContext(AuthContext);

    const stripe = useStripe();
    const elements = useElements();

    const { resalePrice, userName, email, _id, bookId } = bookingDetails;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice, logOut]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            //store payment info in database
            const payment = {
                resalePrice: resalePrice,
                transactionId: paymentIntent.id,
                email: email,
                bookingId: _id,
                bookId: bookId
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('Token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Payment Successful');
                        setTransactionId(paymentIntent.id);
                    }
                })

        }
        setProcessing(false);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
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
                />
                <button className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your TransactionId : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;