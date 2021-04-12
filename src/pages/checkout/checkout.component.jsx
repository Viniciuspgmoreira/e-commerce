import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './checkout.styles.scss'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}

    <div className="total">
      <span>TOTAL: R$ {total.toFixed(2)}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card of payments
      <br></br>
      4242-4242-4242-4242 - Exp: 12/2021 - CVV: 123
    </div>
    <StripeCheckoutButton price={total}></StripeCheckoutButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckOutPage)
