import React, { Component } from 'react'
import '../styles/sign.sass'

class Sign extends Component {

  render () {
    return (
      <div className='Sign'>
        <h1>Sign up</h1>
        <div className='buttons'>
          <button className='facebook'><i className="fa fa-facebook-square" aria-hidden="true"></i></button>
          <button className='twitter'><i className='fa fa-twitter' aria-hidden='true'></i></button>
          <button className='google'><i className='fa fa-google' aria-hidden='true'></i></button>
        </div>
      </div>)
  }
}

export default Sign
