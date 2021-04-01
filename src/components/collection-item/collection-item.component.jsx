import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="name">R$: {price.toFixed(2)}</span>
    </div>
  </div>
)

export default CollectionItem
