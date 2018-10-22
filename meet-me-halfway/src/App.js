import React, { Component } from 'react';
import StartLocations from './StartLocations'
import './App.css'
// import Maps from './Map'
// import ResultsList from './ResultsList'
import MapContainer from './MapContainer'
// import Dropdown from './Dropdown'
// import LocationSearchInput from './LocationSearchInput'




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      markers: [{className: "marker1",
          name:'You!',
          position:{lat: 40.758849, lng: -73.985136}},

        {className: "marker2",
         name:'Your friend!',
         position: {lat: 40.739897, lng: -73.990142}}],

      // startMarkers:[],

      // startMarkers1:[],

      // startLocations:[

      // ],

      placetypes: [
        {
          type:"Cafe",
          name:'Starbucks',
          position: {lat: 40.748047, lng:  -73.989220}
        },

        {
          type:"Bar",
          name:"The Watering Hole",
          position: {lat: 40.748509, lng: -73.986975}
        },

        {
          type:"Restaurant",
          name:'Eataly',
          position: {lat: 40.748321, lng: -73.988603}
        },
      ],
      value:'',
      activePlaceType:'Select Type of Place...',
      displayMenu: true
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
    // this.setTheState = this.setTheState.bind(this);
    // this.handleLoc = this.handleLoc.bind(this);
  }


  handleClick(e){
    console.log('click', e.target.innerText)
    const meetup = this.state.placetypes.filter(d => d.type == e.target.innerText)
    // console.log(meetup)
    const tempMarkers = this.state.markers.slice()
    if (tempMarkers.length = 2 ){
        tempMarkers.push(meetup[0])
        this.setState({ markers: tempMarkers,
        activePlaceType: e.target.innerText,
        displayMenu: !this.state.displayMenu })
        console.log('true')
    } else {
        tempMarkers.pop()
        tempMarkers.push(meetup[0])
        this.setState({ markers: tempMarkers,
        activePlaceType: e.target.innerText,
        displayMenu: !this.state.displayMenu })
        console.log('false')
    }
  }

//   handleLoc(){
//     console.log('start locations: ', this.state.startLocations)
//     const start1= this.state.startLocations[0]
//     const tempMarkers = this.state.startMarkers.slice()
//     tempMarkers.push(start1)
//     this.setState({
//       startMarkers: tempMarkers
//   })
//   }

// handleLoc1(){
//     // const start2= this.state.startLocations[1]
//     const tempMarkers = this.state.startMarkers1.slice()
//     tempMarkers.push(this.state.startLocations[1])
//     this.setState({
//       startMarkers1: tempMarkers
//   })
//   }

  // handleInputChange(e){
  //   this.setState({
  //     startloc1: e.target.value,
  //   })
  // }

  // setTheState(obj) {
  //   this.setState( obj )
  // }

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
        <div className="render-container">
            {/*<LocationSearchInput />*/}
            <StartLocations
              handleInputChange={this.handleInputChange}
              onClick={this.handleClick}
              activePlaceType={this.state.activePlaceType}
              displayMenu={this.state.displayMenu}
              handleLoc={this.handleLoc}
              handleLoc1={this.handleLoc1}
            />
            {/*<ResultsList />*/}
            <MapContainer
              startMarkers={this.state.startMarkers}
              markers={this.state.markers}
              placetypes={this.state.placetypes}
              setAppState={ this.setTheState }
              pushType={this.pushtype}
              startMarkers1={this.state.startMarkers1}

            />
        </div>
      </div>
    );
  }
}

export default App;
