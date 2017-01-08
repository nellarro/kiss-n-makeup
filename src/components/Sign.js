import React, { Component } from 'react'
import '../styles/sign.sass'
import rebase from 're-base'
import firebase from '../firebase/firebase.js'
import Landing from '../components/Landing.js'
import { Link, browserHistory } from 'react-router'

class Sign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
    this._handleClickFB = this._handleClickFB.bind(this)
    this._handleClickTwitter = this._handleClickTwitter.bind(this)
    this._handleClickGoogle = this._handleClickGoogle.bind(this)
    this._authHandler = this._authHandler.bind(this)
  }

  _authHandler (error, user) {
    if (error) {
      console.log(error)
    } else {
      this.setState({user: user})
      console.log('is setState working', this.state)
      console.log(user.user.photoURL)
      browserHistory.push('/log')
    }
  }
  _handleClickFB (event) {
    event.preventDefault()
    console.log('user logged in with facebook')
    firebase.authWithOAuthPopup('facebook', this._authHandler)
  }
  _handleClickTwitter (event) {
    event.preventDefault()
    console.log('user logged in to twitter')
    firebase.authWithOAuthPopup('twitter', this._authHandler)
  }
  _handleClickGoogle (event) {
    event.preventDefault()
    console.log('user logged in with google')
    firebase.authWithOAuthPopup('google', this._authHandler)
  }

  render () {

    return (
      <div className='Sign'>
        <Link to='/'><button className='exit'>X</button></Link>
        <h1>Sign up</h1>
        <div className='firstrow'>
          <button className='facebook' onClick={this._handleClickFB}><i className='fa fa-facebook-square' aria-hidden='true' /></button>
          <button className='twitter' onClick={this._handleClickTwitter}><i className='fa fa-twitter' aria-hidden='true' /></button>
          {/* <button className='instagram'><i className='fa fa-instagram' aria-hidden='true' /></button> */}
          <button className='google' onClick={this._handleClickGoogle}><i className='fa fa-google' aria-hidden='true' /></button>
        </div>
      </div>)
  }
}

export default Sign
