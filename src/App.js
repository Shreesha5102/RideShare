import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="/profile" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="/driver" className="nav-link">Drive</a>
        </li>
        <LogoutButtonContainer />
      </ul>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/signup" className="nav-link">Sign Up</a>
        </li>
        <LoginButtonContainer />
      </ul>
    )

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">BMSCE RS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <OnlyGuestLinks />
              <OnlyAuthLinks />
            </div>  
          </div>       
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
