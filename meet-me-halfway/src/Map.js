import React, { Component } from 'react';

// export default class Map extends Component {
// render(){
// return(
// <html>
//   <head>
//     <title>Simple Map</title>
//     <meta name="viewport" content="initial-scale=1.0" />
//     <meta charset="utf-8" />
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//     </style>
//   </head>
//   <body>
//     <div id="map"></div>
//     <script>
//       let map;
//       function initMap() {
//         map = new google.maps.map(document.getElementById('map'), {
//           center: {lat: 40.739897, lng: -73.990142},
//           zoom: 10
//         })
//       }
//     </script>
//     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuJ7B4ZyI2pXgYOlbsvI_9Ys4oFkJetzk&callback=initMap"
//     async defer></script>
//   </body>
// </html>
// )}}



export default class Map extends Component {
  componentDidUpdate(prevProps, prevState){
    if(prevProps.google != this.props.google) {
      this.loadMap();
  }

  loadMap(){

  }

  render(){

  // let mapview =
  // return(
  //         function initMap() {
  //           map = new google.maps.map(document.getElementById('map'), {
  //             center: {lat: 40.739897, lng: -73.990142},
  //             zoom: 10
  //           })
  //         }
  //   )

  return(
  <div ref='map'>
  Loading map...
  </div>
    )}}
