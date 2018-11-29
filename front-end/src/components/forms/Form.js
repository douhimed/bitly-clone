import React, {Component} from 'react'
import {Input} from '../inputs'
import './form.css'

const Form = (props) => {

    /* form {
        action : GET/POST
        method: the action file
        inputs: [
            {label, type, name, ...rest},
            {label, type, name, ...rest}
        ]
    }*/


    const{title, action, method, inputs, button, ...rest } = props


    return(

        <div>
            <form action={action} method={method} >
            <span className="formTitle">{title}</span>

                { inputs.map( input => <Input key={input.inputName} type={input.type} name={input.name} label={input.label} {...rest} />) }

                <input  type="submit" value={button} />
            </form>
        </div>
    )

}

export default Form