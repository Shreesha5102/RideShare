import React, { Component } from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.css'
import img1 from "../../img/prop1.jpg";
import '../../App.css';

// import LoginButtonContainer from '../../user/ui/loginbutton/LoginButtonContainer'
// import LogoutButtonContainer from '../../user/ui/logoutbutton/LogoutButtonContainer'


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
                <p className='row'>
                    <div className='col'></div>
                    <div className='col-4' id="landform">
                        <a href="/signup" className="btn btn-primary">signup</a>
                    </div>
                    <div className='col'></div>
                </p>
          </div>
        </div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">E-Commerce</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Web Security</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
    
        <p>



        </p>

        <div className='row'>
          <div className="col-sm-6">
            <h2>Why Choose Us?</h2><br></br>
            <h6>Ride sharing services have emerged as an alternative transportation service that allows people to use personal cars efficiently.We here by propose a Smart transport system by implementing peer to peer Decentralized Ride-Sharing Application based on smart contracts on the Ethereum Blockchain</h6><br></br>
            <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h6 className="mb-0">Fully Licensed</h6>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h6 className="mb-0">Online Tracking</h6>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h6 className="mb-0">Afordable Fee</h6>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary me-3">
                                    <i className="fa fa-check text-white"></i>
                                </div>
                                <h6 className="mb-0">Best Trainers</h6>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
            
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
