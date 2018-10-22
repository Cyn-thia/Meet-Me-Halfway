import React, { Component } from 'react';
import Dropdown from './Dropdown'
import './App.css'


export default class StartLocations extends Component {

  // getData(){
  //   const apiKey = 'AIzaSyDuJ7B4ZyI2pXgYOlbsvI_9Ys4oFkJetzk'
  //   fetch (`https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=${apiKey}`)
  //     .then (res => res.json())
  //     .then (data => {
  //       console.log('res');
  //     })}



  render(){
    return(
      <div className="input-container">
        <input className="input1"
               type="search"
               placeholder="Your location"
               // onChange={(e) => this.props.handleInputChange(e)}
               value={this.props.startloc1}
               onChange={this.props.handleLoc}
        />
        <input
              type="search"
              className="input2"
              placeholder="Your friend's location"
              onChange={this.props.handleLoc1}
        />
          <Dropdown
            onClick={this.props.onClick}
            activePlaceType={this.props.activePlaceType}
            displayMenu={this.props.displayMenu}
          />
          <button
            className="meet-me"
          >
          Meet Me
          </button>
      </div>
      )
  }
}
