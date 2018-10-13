import React from 'react'
import ReactDOM from 'react-dom'
import './Alert.css'

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="alert">
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Alert;
