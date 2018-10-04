import React from 'react'
import ReactDOM from 'react-dom'
import './SearchForm.css'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
              <button className="search-form-button">Search</button>
            </div>
          </div>
        </div>
    )
  }
}

export default SearchForm;
