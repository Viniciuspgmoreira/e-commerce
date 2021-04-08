import React from 'react'
import './checkout-item.styles.scss'

const checkoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">R$: {price.toFixed(2)}</span>
    <div className="remove-button">&#10006;</div>
  </div>
)

export default checkoutItem
