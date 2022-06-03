import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <div className="fill-window">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div className= "signup">
            <h1>Sign Up</h1>
            <p>We've got your wallet information, simply input your name and your account is made!</p>
            <SignUpFormContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
