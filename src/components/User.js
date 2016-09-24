import React, { Component } from 'react'
import Avatar from '../stock_user_image.jpg'
import '../styles/user.sass'

class User extends Component {

  render () {
    return (
      <div>
        <header className='userHeader'>
          <button className='userAvatar'><img src={Avatar} /></button>
        </header>
      </div>
  ) }
}

export default User
