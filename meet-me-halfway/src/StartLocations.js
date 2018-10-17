import React, { Component } from 'react';

export default class StartLocations extends Component {
  render(){
    return(
      <div className="input-container">
        <input className="input1"
               placeholder="Starting Location 1"
        />
        <input className="input2"
               placeholder="Starting Location 2"
        />
        <button className="meet-me">Meet Me</button>
      </div>
      )
  }
}
