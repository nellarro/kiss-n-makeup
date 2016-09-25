import React, { Component } from 'react'
import Avatar from '../stock_user_image.jpg'
import '../styles/user.sass'

class User extends Component {

  render () {
    return (
      <div>
        <header className='userHeader'>
          <button className='userAvatar'><img src={Avatar} className='avatarImg' /></button>
          <nav>
            <ul>
              <li><a className='collection' href='#'>My Collection</a></li>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
      </div>
  ) }
}

export default User
