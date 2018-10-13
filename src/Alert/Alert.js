import React from 'react'
import './Alert.css'

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    var classesStr = "";
    for(var item of this.props.classes) {
      classesStr += (item + " ")
    }

    return (
      <div className={classesStr}>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Alert;
