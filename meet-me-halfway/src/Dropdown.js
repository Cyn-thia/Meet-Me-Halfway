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
         <div className="button"
              onClick={() => this.toggle()}
          >
            Type of place
          </div>

          { this.state.displayMenu &&
          <ul>
             <li
                onClick={() => this.props.onClick('cafe')}
             >Cafe</li>
             <li>Restaurant</li>
             <li>Bar</li>
             <li></li>
          </ul>
        }

       </div>

    );
  }
}
