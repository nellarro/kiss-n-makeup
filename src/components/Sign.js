import React, { Component } from 'react'
import '../styles/sign.sass'
import Rebase from 're-base'
<<<<<<< HEAD
import firebase from '../firebase/firebase.js'
=======
import info from '../config/base.js'
>>>>>>> 0d29a0a725f0839a7d6b5ba6c35d3b77ef4270aa

class Sign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
    this._handleClick = this._handleClick.bind(this)
    this._authHandleer = this._authHandler.bind(this)
  }
  _authHandler (error, user) {
    if (error) {
      console.log(error)
    } else {
      console.log(user)
      this.setState({user: user})
      console.log('is setState working', this.state)
      console.log(user.user.photoURL)
    }
  }
  _handleClick (event) {
    event.preventDefault()
    console.log('user logged in with facebook')
    firebase.authWithOAuthPopup('facebook', this._authHandler)
    firebase.authWithOAuthPopup('twitter', this._authHandler)
    firebase.authWithOAuthPopup('google', this._authHandler)
  }
  changeToLand = () => {
    this.props.navigate('Landing')
  }

  render () {
    return (
      <div className='Sign'>
        <button onClick={this.changeToLand} className='exit'>X</button>
        <h1>Sign up</h1>
        <div className='firstrow'>
          <button className='facebook' onClick={this._handleClick}><i className='fa fa-facebook-square' aria-hidden='true' /></button>
<<<<<<< HEAD
          <button className='twitter' onClick={this._handleClick}><i className='fa fa-twitter' aria-hidden='true' /></button>
=======
          <button className='twitter'><i className='fa fa-twitter' aria-hidden='true' /></button>
>>>>>>> 0d29a0a725f0839a7d6b5ba6c35d3b77ef4270aa
          <button className='instagram'><i className='fa fa-instagram' aria-hidden='true' /></button>
          <button className='snapchat'><i className='fa fa-snapchat-ghost' aria-hidden='true' /></button>
          <button className='google' onClick={this._handleClick}><i className='fa fa-google' aria-hidden='true' /></button>
        </div>
      </div>)
  }
}

export default Sign
