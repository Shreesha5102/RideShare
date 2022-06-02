import React, { Component } from 'react'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='container fluid'>
        <div className='row'>
          <div className="jumbotron text-center">
                <h1>Welcome to Rideshare</h1>
                <p className="splash-subhead">
                    Look for Rides around the World, and pay with your favorite Cryptocurreny <strong>"Ethereum"</strong>
                </p>
                <p>
                <a href="/dashboard" className="btn btn-primary">login</a>
                <a href="/signup" className="btn btn-primary">signup</a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div class="col-sm-8">
            <h2>About Company Page</h2><br></br>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br></br><button class="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
    </div>
      
      
    )
  }
}

export default Landing
