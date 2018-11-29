import React, {Component} from 'react'
import Form from '../components/forms'

class LoginView extends Component{


    state = {

        formInfos:{
          title: "Login",
          method: "GET",
          action: "/login",
          button: "Login",
          inputs: [
            {label: "Username", name:"username"},
            {label: "Password", type:"password", name:"pass"},
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

export default LoginView