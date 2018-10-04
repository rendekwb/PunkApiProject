import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
