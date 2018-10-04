import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './SearchForm.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.searchBeer = this.searchBeer.bind(this);
  }

  searchBeer() {
    axios
    .get("https://api.punkapi.com/v2/beers")
      .then(response =>
        console.log(response.data)
      )
      .catch(error => console.log("error"));
  }

  render() {
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
          </div>
        </div>
    )
  }
}

export default SearchForm;
