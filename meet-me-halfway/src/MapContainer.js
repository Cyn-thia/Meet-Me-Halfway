import React, { Component } from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';



// Container Component is responsible for loading the Google Api
export class MapContainer extends Component {

fetchPlaces(mapProps, map) {
  const {google} = mapProps;
  const service = new google.maps.places.PlacesService(map);
}

  render(){
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    // must set height and width of map container or map wont show
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return(
      <Map google={this.props.google}
           initialCenter={{
              lat: 40.739897,
              lng: -73.990142
           }}
           onReady={this.fetchPlaces}
           visible={true}
      >
        <Marker
          title={'TITLE: my home'}
          name={'MY HOME'}
          position={{lat: 40.723501, lng: -73.980910}}
          />
{/*          <Marker
          title={'title: time square'}
          name={'name: Time Square'}
          position={{lat: 40.758849, lng: -73.985136}}
          />*/}
      </Map>
      )
  }
}


// reponsible for passing "loaded" prop
export default GoogleApiWrapper({
  apiKey: "AIzaSyDuJ7B4ZyI2pXgYOlbsvI_9Ys4oFkJetzk"
})(MapContainer)
