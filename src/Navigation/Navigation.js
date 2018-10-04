import React from 'react'
import ReactDOM from 'react-dom'
import './Navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="nav-bar">
        <span className="nav-bar-title">BrewDog Searchabrew</span>
      </div>
    )
  }
}

export default Navigation;
