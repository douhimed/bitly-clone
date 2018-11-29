import React, {Component} from 'react'
import './input.css'

export default (props) => {

    const {label, type, name, ...rest} = props

    return (
       <div>
            <label>{label}</label>
           <input type={type === undefined ? "text" : type} name={name} placeholder={label} {...rest} />
       </div>
    )

}