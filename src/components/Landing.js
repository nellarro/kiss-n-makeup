import React, { Component } from 'react'
import '../styles/landing.sass'

class Landing extends Component {
  changeToSign = () => {
    this.props.navigate('Sign')
  }
  changeToLog = () => {
    this.props.navigate('Log')
  }

  render () {
    return <div className='Landing'>
      <h1>Kiss 'n' Makeup</h1>
      <footer>
        <p>Keeping makeup organization simple</p>
        <div className='Buttons'>
          <button onClick={this.changeToSign} className='sign'>Sign Up</button>
          <button onClick={this.changeToLog} className='log'>Log In</button>
        </div>
      </footer>
    </div>
  }
}

export default Landing
