import React, {Component} from 'react'
import Form from '../components/forms'

class RegisterView extends Component{


    state = {

        formInfos:{
          title: "Register",
          method: "POST",
          action: "/register",
          button: "Register",
          inputs: [
            {label: "Username", type:"text", name:"username"},
            {label: "Email", type:"text", name:"email"},
            {label: "Password", type:"password", name:"pass"},
            {label: "Confirm your password", type:"password", name:"pass1"},
          ]
        },
      }

    render(){
        return (
            <div className="formDiv">
                <Form   title={this.state.formInfos.title} 
                        method={this.state.formInfos.method} 
                        action={this.state.formInfos.action} 
                        button={this.state.formInfos.button} 
                        inputs={this.state.formInfos.inputs}
                  />
            </div>
        );
    }

}

export default RegisterView