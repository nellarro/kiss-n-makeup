import React, { Component } from 'react'
import '../styles/log.sass'
import AvatarImage from '../stock_user_image.jpg'
import { Link } from 'react-router'
import User from '../components/User.js'
import Landing from '../components/Landing.js'
import firebase from '../firebase/firebase.js'

class Log extends Component {

  render () {
    return (
      <div className='Log'>
        <Link to='/'><button className='exit'>X</button></Link>
        <h1>Log In</h1>
        <div className='userbutton'>
          <Link to='/MyCollection'><button className='logAvatar'><img src={AvatarImage} />
          </button></Link>
        </div>
      </div>
    )
  }
}

export default Log
