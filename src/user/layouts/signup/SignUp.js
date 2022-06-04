import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <div className="container fluid" id="signup">
        <div className="row">
          <div className="col">
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
