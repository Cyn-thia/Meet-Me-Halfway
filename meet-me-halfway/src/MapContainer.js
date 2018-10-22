import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';



// Container Component is responsible for loading the Google Api
export class MapContainer extends Component {

  state = {
    showingInfoWindow:true,  //hides/shows infowindow
    activeMarker: {},       //shows active marker upon click
    selectedPlace: {},
    // meetingpoint: false,
  }


  onMarkerClick = (props, marker, e) => {
    console.log('onMarkerClick properties ', props, marker, e)
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        startloc1: this.props.startloc1
     })
  };

  // toggle(){
  //   this.setState({
  //     meetingpoint: !this.state.meetingpoint
  //   })
  // }


  // filterType(){
  // const meetup = this.props.placetypes.filter(d => {
  //     return (
  //       d.type == this.props.selectedplace
  //     );
  //   })
  //   console.log(this.props.selectedplace)
  //   console.log(meetup)
  //   this.props.setAppState({
  //     typeobj: meetup
  // }


  render(){
    let temp = this.props.markers.slice();
    // temp = temp.filter(d => d !== undefined)
    console.log(temp)
    let markers = temp.map((d,i) => {
      // console.log('running', i)
      return(
          <Marker
            key={i}
            onClick = {this.onMarkerClick}
            name={d.name}
            position={d.position}
          />
        )
    })

//     let startTemp = this.props.startMarkers.slice();
//     // temp = temp.filter(d => d !== undefined)
//     console.log('startTemp: ',startTemp)
//     let startMarkers = startTemp.map((d,i) => {
//       // console.log('running', i)
//       return(
//           <Marker
//             key={i}
//             onClick = {this.onMarkerClick}
//             name={d.name}
//             position={d.position}
//           />
//         )
//     })

// let startTemp1 = this.props.startMarkers1.slice();
//     // temp = temp.filter(d => d !== undefined)
//     console.log('startTemp: ',startTemp)
//     let startMarkers1 = startTemp1.map((d,i) => {
//       // console.log('running', i)
//       return(
//           <Marker
//             key={i}
//             onClick = {this.onMarkerClick}
//             name={d.name}
//             position={d.position}
//           />
//         )
//     })
  // console.log(markers)



  if (!this.props.loaded) {
    return <div>Loading...</div>
  }


    // must set height and width of map container or map wont show
  const style = {
    width: '86%',
    height: '510px',
    border: '10px solid white',
  }


  return(
    <div className="map-container">

    <Map google={this.props.google}
         initialCenter={{
            lat: 40.750418,
            lng: -73.989326
         }}
         onReady={this.fetchPlaces}
         visible={true}
         style={style}
    >
      { markers }
{/*      { startMarkers }
      { startMarkers1 }*/}
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
    </div>
    )
  }
}


  // reponsible for passing "loaded" prop
  export default GoogleApiWrapper({
  apiKey: "AIzaSyDuJ7B4ZyI2pXgYOlbsvI_9Ys4oFkJetzk"
  })(MapContainer)
