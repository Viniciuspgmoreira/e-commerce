import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ google, children, ...otherProps }) => (
  <button
    className={`${google === true ? 'custom-button-google' : 'custom-button'}`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
