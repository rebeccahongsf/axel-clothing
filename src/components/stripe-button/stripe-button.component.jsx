import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = 'pk_test_OJGOzz2iXwLJX4gwkhsc365H';

  const onToken = (token) => {
    console.log(token);
    alert('payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Axel Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeCheckoutButton;
