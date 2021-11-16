import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Jw25IDatKV8LDzS8WaLq4L20SUwVNKxaJngQ5LEVMgMDF8O2NqbIEmepD5bpw7UNIap46m6YXb2oPOisZG0Sbx00032YE4tae');

const Payment = () => {
    const { id } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`https://doctors-portal-21k-server.herokuapp.com/appointments/${id}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [id])
    return (
        <div>
            <h1>Payment Service Id No: {id}</h1>
            <h2>Amount: $ {appointment?.price}</h2>
            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;