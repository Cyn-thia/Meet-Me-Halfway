import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';



// Container Component is responsible for loading the Google Api
export class MapContainer extends Component {

  state = {
    showingInfoWindow:true,
    activeMarker: {},
    selectedPlace: {},
    meetingpoint: false,
  }


  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e)
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        startloc1: this.props.startloc1
     })
  };

  toggle(){
    this.setState({
      meetingpoint: !this.state.meetingpoint
    })
  }


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

  console.log(markers)



  if (!this.props.loaded) {
    return <div>Loading...</div>
  }


    // must set height and width of map container or map wont show
  const style = {
    width: '100vw',
    height: '500px'

  }

  return(
    <div className="map-container">
    <button
        className="meet-me"
        onClick={() => this.toggle()}
      >Meet Me</button>

    <Map google={this.props.google}
         initialCenter={{
            lat: 40.739897,
            lng: -73.990142
         }}
         onReady={this.fetchPlaces}
         visible={true}
    >
      { markers }
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
