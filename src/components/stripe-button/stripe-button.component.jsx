import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IfQ2YHJqKDI0h9zkNBM0jM8RsVlY6FwG43rp5HKmSkLXCr3LpY38sBBEZOvsBi8YxMSCSqQuXpeVIU4ZuRORlnZ00UckKz08B'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is R$ ${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  )
}

export default StripeCheckoutButton
