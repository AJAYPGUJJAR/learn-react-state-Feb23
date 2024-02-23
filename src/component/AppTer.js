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
        <Link to='/navigate'>
            <button>Submit</button>
        </Link>
      </div>
    )
  }
}
