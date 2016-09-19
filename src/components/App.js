import React, { Component } from 'react'
import '../styles/landing.sass'

class App extends Component {

  render () {
    return <div className='Landing'>
      <h1>Kiss 'n' Makeup</h1>
      <footer>
        <p>Keeping makeup organization simple</p>
        <div className='Buttons'>
          <button className='sign'>Sign Up</button>
          <button className='log'>Log In</button>
        </div>
      </footer>
    </div>
  }
}

export default App
