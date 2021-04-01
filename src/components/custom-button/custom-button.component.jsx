import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ google, children, ...otherProps }) => (
  <button
    className={`${google ? 'custom-button-google' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
