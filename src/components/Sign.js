import React, { Component } from 'react'
import '../styles/sign.sass'

class Sign extends Component {
  changeToLand = () => {
    this.props.navigate('Landing')
  }

  render () {
    return (
      <div className='Sign'>
        <button onClick={this.changeToLand} className='exit'>X</button>
        <h1>Sign up</h1>
        <div className='firstrow'>
          <button className='facebook'><i className='fa fa-facebook-square' aria-hidden='true' /></button>
          <button className='twitter'><i className='fa fa-twitter' aria-hidden='true' /></button>
          <button className='instagram'><i className='fa fa-instagram' aria-hidden='true' /></button>
          <button className='snapchat'><i className='fa fa-snapchat-ghost' aria-hidden='true' /></button>
          <button className='google'><i className='fa fa-google' aria-hidden='true' /></button>
        </div>
      </div>)
  }
}

export default Sign
