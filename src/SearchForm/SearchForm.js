import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import BeerCard from '../BeerCard/BeerCard'
import './SearchForm.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
    this.searchBeer = this.searchBeer.bind(this);
  }

  searchBeer() {
    axios
    .get("https://api.punkapi.com/v2/beers?per_page=10")
      .then(response =>
        response.data.map(beer => ({
          name: beer.name,
          img: beer.image_url
        }))
      )
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const listItems = this.state.beers.map((beer, index) =>
      <BeerCard key={index} name={beer.name} img={beer.img}/>);

    return (
        <div>
          <div className="search-form-container">
            <div className="search-form-header">
              Search Here
            </div>
            <div className="search-form">
              <input className="search-form-input" type="text"/>
              <button className="search-form-button" onClick={this.searchBeer}>Search</button>
            </div>
            <div>
              <ul>
                {listItems}
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default SearchForm;
