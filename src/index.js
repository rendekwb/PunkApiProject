import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>Main</div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
