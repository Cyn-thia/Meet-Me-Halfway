import React, { Component } from 'react';

export default class Dropdown extends Component {

  state = {
    green: false,
  }

  toggle(){
    this.setState({
      displayMenu: !this.state.displayMenu,
      green: !this.state.green,
    })
  }

  // changeColor(){
  //   this.setState({
  //     green: !this.state.green
  //   })
  // }

  render() {
    let borderColor = this.state.green ? "green-border" : "dropdown"

    return (

        <div  className={borderColor} >
         <div className="dropdown-header"
              onClick={() => this.toggle()}
          >
            {this.props.activePlaceType}
          </div>

          { this.state.displayMenu &&
          <ul>
             <li
                onClick={(e) => this.props.onClick(e)}
                >Cafe</li>
             <li
                 onClick={(e) => this.props.onClick(e)}
                 >Restaurant</li>
             <li
               onClick={(e) => this.props.onClick(e)}
               >Bar</li>
          </ul>
        }

       </div>

    );
  }
}

