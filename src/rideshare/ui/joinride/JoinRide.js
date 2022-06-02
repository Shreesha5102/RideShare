import React, { Component } from 'react'

class JoinRide extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    this.props.onJoinRideFormSubmit(this.props.ride_number, this.props.payment);
  }

  render() {
    return(
      <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Confirm Passenger</button>
    )
  }
}

export default JoinRide
