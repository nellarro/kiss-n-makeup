import React, { Component } from 'react'
import '../styles/landing.sass'
import { Link } from 'react-router'
import Sign from '../components/Sign.js'
import Log from '../components/Log.js'

class Landing extends Component {

  render () {
    return <div className='Landing'>
      <h1>Kiss 'n' Makeup</h1>
      <footer>
        <p>Keeping makeup organization simple</p>
        <div className='Buttons'>
          <Link to='/sign'><button className='sign'>Sign Up</button></Link>
          <Link to='/log'><button className='log'>Log In</button></Link>
        </div>
      </footer>
    </div>
  }
}

export default Landing
