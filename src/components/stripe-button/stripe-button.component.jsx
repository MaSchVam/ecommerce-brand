import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_pY07wMMEOAlL5WJaTp5X7aYI00NR0E1HWQ';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Brandinavian Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;