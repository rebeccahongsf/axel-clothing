import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishedKey = 'pk_test_OJGOzz2iXwLJX4gwkhsc365H'

  return (
    <StripeCheckout />
  )
};

export default StripeCheckoutButton;