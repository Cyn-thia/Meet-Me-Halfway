import React, { Component } from 'react';
import StartLocations from './StartLocations'
import './App.css'
// import Maps from './Map'
// import ResultsList from './ResultsList'
import MapContainer from './MapContainer'
// import Dropdown from './Dropdown'




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      markers: [
        {className: "marker1",
          name:'Me!',
          position:{lat: 40.758849, lng: -73.985136}},

        {className: "marker2",
         name:'My friend',
         position: {lat: 40.739897, lng: -73.990142}}
      ],

      placetypes: [
        {
          type:"cafe",
          name:'Starbucks',
          position: {lat: 40.748047, lng:  -73.989220}
        },

        {
          type:"bar",
          name:"The Watering Hole",
          position: {lat: 40.748509, lng: -73.986975}
        },

        {
          type:"restaurant",
          name:'Eataly',
          position: {lat: 40.748321, lng: -73.988603}
        },
      ],
      typeobj: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.setTheState = this.setTheState.bind(this);
  }

  handleClick(e){
    console.log('click', e.target.innerText)
    const meetup = this.state.placetypes.filter(d => d.type == e.target.innerText.toLowerCase())
    console.log(meetup)
    const tempMarkers = this.state.markers.slice()

    console.log("legnth of tempmarkers" , tempMarkers.length)

    if (tempMarkers.length = 2 ){
      tempMarkers.push(meetup[0])
      this.setState({ markers: tempMarkers })
      console.log('true')
    } else {
      tempMarkers.pop()
      tempMarkers.push(meetup[0])
      this.setState({ markers: tempMarkers })
      console.log('false')
    }
    console.log("legnth of tempmarkers" , tempMarkers.length)

  }

  // pushType(){
  //   this.state.markers.push(meetup)
  //   console.log(this.state.markers)
  // }


  handleInputChange(e){
    this.setState({
      startloc1: e.target.value,
    })
  }

  setTheState(obj) {
    this.setState( obj )
  }

  // filterType(location){
  //   const meetup = this.state.placetypes.filter(d => {
  //       return (
  //         d.type == location
  //       );
  //   })
  //   console.log(meetup)
  //   // this.props.setAppState({
  //     this.setState({
  //       typeobj: meetup
  //     })
  // }

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
          placetypes={this.state.placetypes}
          selectedplace={this.state.selectedplace}
          setAppState={ this.setTheState }
          pushType={this.pushtype}
        />

      </div>
    );
  }
}

export default App;
