import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppTer extends Component {
    state = {
        svalue: 123456
    }
  render() {
    return (
      <div>
        {this.state.svalue}

        <Link to={{ pathname: '/navigate', state: { svalue: this.state.svalue } }}>
            <button>Submit</button>
        </Link>

        {/* <Link to='/navigate' sval={this.state.svalue}>
            <button>Submit</button>
        </Link> */}
      </div>
    )
  }
}
