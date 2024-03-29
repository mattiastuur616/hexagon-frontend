import React from 'react';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//const PUBLIC_KEY = "pk_test_51OsQ3BRutb7C2p18CWHd0T9ykuIxHf3mOLbIJJJBv8Lm91YKFlmAVktVEjKrcKBOleNPMnIRPYvETrtvQH2Rtv7W00wF9TfFd3" // Test Mode
const PUBLIC_KEY = "pk_live_51OsQ3BRutb7C2p18bfIQncf5MUBhG4OAPwbk3ZJdEAOGPSKqxviGzmB5sznOUHcmqOGFYBfQSGIVUQUIgSWAkEPg00PnSI1DH6" // Real Mode

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    function CheckStatus() {
        if (localStorage.getItem("user") === null) {
            return (
                <div className='hex__sign-up-navbar-header'>
                    <h1>No access, user has not logged in</h1>
                </div>
            )
        } else if (localStorage.getItem("chapter") === null) {
            return (
                <div className='hex__sign-up-navbar-header'>
                    <h1>No book has chosen for purchase</h1>
                </div>
            )
        } else {
            return (
                <Elements stripe={stripeTestPromise}>
                    <PaymentForm />
                </Elements>
            )
        }
    }
    
  return (
    <div>
        <CheckStatus />
    </div>
  )
}
