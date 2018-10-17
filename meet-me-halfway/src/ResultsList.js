import React, { Component } from 'react';
// import Map from "./Map"
// import ResultsItem from './ResultsItem'

export default class ResultsList extends Component{

 state ={
  view: "listview"
 }

handleViewClick (view){
  console.log("setting filter to " + view)
  this.setstate("mapview")
}

  render(){
    // const results = view.map(() => {
    return(
      <div className="results-List">

        <button className="toggle-view">Toggle list/map</button>
      </div>
      )
  // })
  }
}
