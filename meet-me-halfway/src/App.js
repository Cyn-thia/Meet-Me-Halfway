import React, { Component } from 'react';
import StartLocations from './StartLocations'
import './App.css'
// import Maps from './Map'
import ResultsList from './ResultsList'
import MapContainer from './MapContainer'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     view:""
  //   }


  // takes in each letter when typing address
  // handleChange

  // fetching api
  // onClick(){
  // const apiKey = AIzaSyDuJ7B4ZyI2pXgYOlbsvI_9Ys4oFkJetzk
  // fetch (`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`)
  //   .then (res => res.json())
  //   .then (res => {
  //     console.log('res');
  //   })


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Half-Waze
        </header>
        <StartLocations />
        <ResultsList />
        <MapContainer />
        view={this.state} />
      </div>
    );
  }
}

export default App;
