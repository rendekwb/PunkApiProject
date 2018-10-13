import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import BeerCardContainer from '../BeerCardContainer/BeerCardContainer'
import Alert from "../Alert/Alert";
import './SearchForm.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      searchString: '',
      alertObj: {
        show: false,
        message: ""
      }
    }
    this.searchBeer = this.searchBeer.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  updateSearchString(event) {
    this.setState({
      searchString: event.target.value
    });

  }

  searchBeer() {

    this.setState({beers:[],searchString: this.state.searchString});

    if(this.state.searchString) {
      axios
      .get("https://api.punkapi.com/v2/beers?beer_name=" + this.state.searchString)
        .then(response => {
          const beers = response.data;
          this.setState({ beers });
        })
      .catch(error => console.log(error));
    } else {
      this.setState({
        alertObj: {
          show: true,
          message: "Whoops, please enter some info before searching"
        }
      })
    }
  }

  render() {
    var classes = [];
    return (
        <div>
          <div className="search-form-container">
            <Alert message={this.state.alertObj.message} classes={classes} />
            <div className="search-form-header">
              Search Here
            </div>
            <div className="search-form">
              <input className="search-form-input" type="text" onChange={this.updateSearchString}/>
              <button className="search-form-button" onClick={this.searchBeer}>Search</button>
            </div>
          </div>
          <BeerCardContainer beers={this.state.beers} />
        </div>
    )
  }
}

export default SearchForm;
