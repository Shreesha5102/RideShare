import React, { Component } from 'react';
// import '../../css/bootstrap.min.css'
// import '../../css/style.css'
import img1 from "../../img/prop1.jpg";
import '../../App.css';

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='container fluid'>
        <div className='row1'>
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
          <div className="col-sm-6">
            <h2>About Company Page</h2><br></br>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br></br><button className="btn btn-primary btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-6">
             <img id="img1" src={img1} className='rounded mx-auto d-block' alt="no image"/>
          </div>
        </div>

        <div className='row'>
          <div className="about-section">
           <h1 id="contact-us">Contact US!</h1>
            <p>.</p>
           <p>Resize the browser window to see that this page is responsive by the way.</p>
          </div>
       </div>

     
        

    </div>
      
      
    )
  }
}

export default Landing
