import React, { Component } from 'react';
import StartLocations from './StartLocations'
import './App.css'
// import Maps from './Map'
import ResultsList from './ResultsList'
import MapContainer from './MapContainer'
import Dropdown from './Dropdown'




class App extends Component {

constructor(props){
super(props)
this.state = {
  startloc1:'',
  markers: [
    {className: "marker1",
      name:'Me!',
      position:{lat: 40.758849, lng: -73.985136}},

    {className: "marker2",
     name:'Me!',
     position: {lat: 40.739897, lng: -73.990142}},

    {className:"cafe",
      name:'Starbucks',
      position: {lat: 40.748241, lng: -73.989082}}
  ]
  }
this.handleInputChange = this.handleInputChange.bind(this)

}

  handleClick(location){
    console.log('click', location)
  }


  handleInputChange(e){
    this.setState({
      startloc1: e.target.value,
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          Meet Me Halfway
        </header>
        <StartLocations
          handleInputChange={this.handleInputChange}
          onClick={this.handleClick}
        />
        {/*<ResultsList />*/}
        <MapContainer
          startloc1={this.state.startloc1}
          markers={this.state.markers}
        />

      </div>
    );
  }
}

export default App;
