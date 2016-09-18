import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  render () {
    return <div className='Landing'>
      <h1 className='hone'>Kiss 'n' Makeup</h1>
      <p>Keeping makeup organization simple</p>
      <button className='sign'>Sign Up</button>
      <button className='log'>Log In</button>
    </div>
  }
}

export default App
