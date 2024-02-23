import React, { Component } from 'react'

export default class AppTer extends Component {
    state = {
        svalue: 123456
    }
  render() {
    return (
      <div>
        {this.state.svalue}
      </div>
    )
  }
}
