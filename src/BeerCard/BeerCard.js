import React from 'react'
import ReactDOM from 'react-dom'
import './BeerCard.css'

class BeerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
      name: props.name
    }
  }

  render() {
    return (
      <div className="beer-card">
        <img className="beer-card-image" src={this.state.img}/>
        <div className="beer-card-name">{this.state.name}</div>
      </div>
    )
  }
}

export default BeerCard;
