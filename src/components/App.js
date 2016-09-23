import React, { Component } from 'react'
import '../styles/landing.sass'
import '../styles/sign.sass'
import '../styles/log.sass'
import Landing from '../components/Landing.js'
import Sign from '../components/Sign.js'
import Log from '../components/Log.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'Landing'
    }
  }
  navigateToPage = (scr) => {
    this.setState({currentScreen: scr})
  }
  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'Landing': screen = <Landing navigate={this.navigateToPage} />
        break
      case 'Sign': screen = <Sign navigate={this.navigateToPage} />
        break
      case 'Log': screen = <Log navigate={this.navigateToPage} />
        break
      default: screen = <Landing navigate={this.navigateToPage} />
    }
    return (
      <div>{screen}</div>
    )
  }
}

export default App
