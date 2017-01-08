import React, { Component } from 'react'
import '../styles/log.sass'
import { Link } from 'react-router'
import User from '../components/User.js'
import Landing from '../components/Landing.js'
import firebase from '../firebase/firebase.js'

class Log extends Component {

  getUserImage = () => {
    let user = firebase.auth().currentUser
    let userImage = user.photoURL
    // let newUserImage = userImage.replace(/normal/, '400x400')
    return userImage
  }

  render () {
    return (
      <div className='Log'>
        <Link to='/'><button className='exit'>X</button></Link>
        <h1>Log In</h1>
        <div className='userbutton'>
          <Link to='/MyCollection'><button className='logAvatar'><img src={this.getUserImage()} />
          </button></Link>
        </div>
      </div>
    )
  }
}

export default Log
