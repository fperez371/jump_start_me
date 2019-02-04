import React from 'react';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn" type="button" onClick={() => this.showDropdownMenu()}>Choose a Category</button>
        {this.state.displayMenu ? (
          <ul>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Arts">Arts</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Comics&Illustration">Comics&Illustration</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Design&Tech">Design&Tech</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Film">Film</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Food&Craft">Food&Craft</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Games">Games</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Music">Music</button></li>
            <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Publishing">Publishing</button></li>
          </ul>
          ):
          (
            null
          )
        }

        </div>

      );
    }
}

export default Dropdown;