import React, { Component } from 'react';
import Map from "./map"
import ResultsItems from './ResultsItems'

export default class ResultsList extends Component{

 // state ={
 //  view: "listview"
 // }

handleViewClick (view){
  console.log("setting filter to " + view)
  this.setstate({mapview})
}

  render(){
    const results = view.map(() => {
    return(
      <div className="results-List">
        ResultsList
        {results}
        <button className="toggle-view">list/map</button>
      </div>
      )
  })
  }
}
