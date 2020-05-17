import React, { Component } from 'react'
import Home from './components/Home/Home';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        App
        <Home />
      </div>
    )
  }
}
