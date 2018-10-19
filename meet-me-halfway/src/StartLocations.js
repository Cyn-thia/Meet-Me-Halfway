import React, { Component } from 'react';
import Dropdown from './Dropdown'


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
               placeholder="Starting Location 1"
               onChange={(e) => this.props.handleInputChange(e)}
               value={this.props.startloc1}
        />
        <input className="input2"
               placeholder="Starting Location 2"
        />
        {/*<input className="place-type"
               placeholder="type of place"/>*/}

          <Dropdown
            onClick={this.props.onClick}
          />


      </div>
      )
  }
}
