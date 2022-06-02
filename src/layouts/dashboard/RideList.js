import React, { Component } from 'react'
import RideshareContract from '../../../build/contracts/Rideshare.json'
import store from '../../store'
import JoinRideContainer from '../../rideshare/ui/joinride/JoinRideContainer'
import { Link } from 'react-router'

const contract = require('truffle-contract')

class RideList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rideshares: [],
      passengers: [],
      rideshareLoading: true
    };
    this.getRides = this.getRides.bind(this);
    this.rideshareButton = this.rideshareButton.bind(this);
  }

  componentDidMount() {
    this.getRides();
  }

  getRides() {
    let web3 = store.getState().web3.web3Instance

    const rideshare = contract(RideshareContract)
    rideshare.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var rideshareInstance

    var _this = this;

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      rideshare.deployed().then(function(instance) {
        rideshareInstance = instance

        rideshareInstance.getRideCount.call()
        .then(function(result) {
          console.log('get rideshare count')
          console.log(result)
          let rideshareCount = result["c"][0];

          for (let i = 0; i < rideshareCount; i++) {
            rideshareInstance.getRide.call(i)
            .then(function(result) {
              // If no error, login user.
              console.log('getridesharecount')
              console.log(result)
              var tempArr = _this.state.rideshares;
              let tempRideshares = tempArr.concat([result]);
              _this.setState({rideshares: tempRideshares})
              console.log('test2');
              console.log(_this.state.rideshares);
              // debugger
              // return result;
              // return dispatch(loginUser())
            })
            rideshareInstance.getPassengers.call(i)
            .then(function(result) {
              var tempArr = _this.state.passengers;
              let tempPassengers = tempArr.concat([result]);
              _this.setState({passengers: tempPassengers})
            })
            // Attempt to sign up user.
            .catch(function(result) {
              // If error...
            })
          }
          _this.setState({rideshareLoading: false})
        })
      })
    })
  }

  rideshareButton(condition, bigNum,i) {
    let web3 = store.getState().web3.web3Instance
    console.log('passengers');
    console.log(this.state.passengers);
    if (condition) {
      return (
        <button className='btn btn-primary' disabled>Ride Picked Up</button>
      )
    } else {
      return (
        <JoinRideContainer ride_number={i} payment={web3.fromWei(bigNum, "ether" ).toNumber()}/>
      )
    }
  }

  render() {
    let web3 = store.getState().web3.web3Instance

    if (this.state.rideshareLoading) {
      return (
        <p>Loading</p>
      )
    } else {
      return(
        <div className="container fluid">
          <div className="row">
            <div className="col">
              <p>
                <h2>Current Ride</h2>
                <div className='row'>
                  <div className='col'>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Account Address</div>
                          {this.state.rideshares.at(-1)[0]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Cost</div>
                          {web3.fromWei(this.state.rideshares.at(-1)[1], "ether" ).toNumber()}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Capacity</div>
                          {this.state.rideshares.at(-1)[2]["c"][0]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">From</div>
                          {this.state.rideshares.at(-1)[3]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">To</div>
                          {this.state.rideshares.at(-1)[4]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold"></div>
                          {this.rideshareButton(this.state.passengers[this.state.passengers.length-1].indexOf(web3.eth.accounts[0]) > -1, this.state.rideshares.at(-1)[1],this.state.rideshares.length-1)}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="row">
                <div className='col'>
                  <h3>History</h3>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Account Address</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.rideshares.map((ride, i) => {
                      return(
                        <tr>
                        <td>{i}</td>
                        <td>{ride[0]}</td>
                        <td>{web3.fromWei(ride[1], "ether" ).toNumber()}</td>
                        <td>{ride[2]["c"][0]}</td>
                        <td>{ride[3]}</td>
                        <td>{ride[4]}</td>
                        {/* <td>{this.rideshareButton(this.state.passengers[i].indexOf(web3.eth.accounts[0]) > -1, ride[1],i)}</td> */}
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default RideList
