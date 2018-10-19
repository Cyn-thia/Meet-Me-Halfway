import React, { Component } from 'react';

export default class Dropdown extends Component {

  state = {
    displayMenu:false,
  }

  toggle(){
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true },
     //  () => {
     // document.addEventListener('click', this.hideDropdownMenu);
    );
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false },
      // () => {
      // document.removeEventListener('click', this.hideDropdownMenu);
    );
  }

  render() {
    return (

        <div  className="dropdown" >
         <div className="dropdown-header"
              onClick={() => this.toggle()}
          >
            Select type of place...
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
             <li></li>
          </ul>
        }

       </div>

    );
  }
}

