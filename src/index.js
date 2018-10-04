import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import SearchForm from './SearchForm/SearchForm'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation/>
        <SearchForm/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
