import React from 'react'
import './buttons.css'

export default (props) => {
  const { to, icon, alt, ...rest} = props
  return (
    <button onClick={props.onClick} className="logo__button" to={to} {...rest}>
      <img src={icon} alt={alt} />
    </button>
  )
}
