import React from 'react'
import ReactDOM from 'react-dom'
import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-text">
            Created by Willie Rendek
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
