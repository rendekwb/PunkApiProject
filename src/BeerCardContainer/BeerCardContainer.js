import React from 'react'
import ReactDOM from 'react-dom'
import BeerCard from '../BeerCard/BeerCard'
import './BeerCardContainer.css'

class BeerCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: props.beers
    }
  }

  render() {
    const listItems = this.props.beers.map((beer, index) =>
      <BeerCard key={index} beer={beer} onClick={this.showModal}/>);

    return (
      <div>
        <ul className="beer-card-container">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default BeerCardContainer;
