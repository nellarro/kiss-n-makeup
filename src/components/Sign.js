import React, { Component } from 'react'
import '../styles/sign.sass'

class Sign extends Component {

  render () {
    return (
      <div className='Sign'>
        <h1>Sign up</h1>
        <div className='buttons'>
          <button className='facebook'>Facebook</button>
          <button className='twitter'>Twitter</button>
          <button className='google'>Google</button>
        </div>
      </div>)
  }
}

export default Sign
