import React, { Component } from 'react'

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Welcome to BMSCE RideShare</h1>
            <h3>
              <p>
                Developed by Shreesha Bhat, Shashank J V, Swaroop Kumar A <br></br>
                Under the guidance of Dr. Sandeep Varma N
              </p>
            </h3>         
          </div>
        </div>
      </main>
    )
  }
}

export default Landing
