import React from 'react'
import ReactDOM from 'react-dom'
import './BeerCard.css'

class BeerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: props.beer
    }
  }

  render() {
    return (
      <div className="beer-card">
        <img className="beer-card-image" src={this.state.beer.image_url}/>
        <div className="beer-card-name">{this.state.beer.name}</div>
        <div className="beer-card-info">ABV: {this.state.beer.abv}</div>
        <div className="beer-card-info">IBU: {this.state.beer.ibu}</div>
        <div className="beer-card-info">Yeast: {this.state.beer.ingredients.yeast}</div>
      </div>
    )
  }
}

export default BeerCard;
