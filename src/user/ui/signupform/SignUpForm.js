import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onSignUpFormSubmit(this.state.name)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label'>Name</label>
            <input id="name" type="text" className='form-control' value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Name" required/>

          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
