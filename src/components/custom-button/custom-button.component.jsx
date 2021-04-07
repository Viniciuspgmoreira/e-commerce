import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ google, children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      google ? 'custom-button-google' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
