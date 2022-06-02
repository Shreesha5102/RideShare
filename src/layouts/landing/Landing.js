import React, { Component } from 'react'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
     
      <div className="splash-container">
        <div className="splash">
            <h1 className="splash-head">Welcome to Rideshare</h1>
            <p className="splash-subhead">
                Look for Rides around the World, and pay with your favorite Cryptocurreny <strong>"Ethereum"</strong>
            </p>
            <p>
            <a href="http://purecss.io" className="pure-button pure-button-primary">login</a>
        
            {/* <a href="http://purecss.io" className="pure-button pure-button-primary">signup</a> */}
        </p>
        </div>
      </div>
      
    )
  }
}

export default Landing
