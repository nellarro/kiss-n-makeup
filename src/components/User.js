import React, { Component } from 'react'
import Image from '../stock_user_image.jpg'
import '../styles/user.sass'

class User extends Component {

  render () {
    return (
      <div className='userPage'>
        <header className='userHeader'>
          <img src={Image} className='avatarImg' />
          <nav>
            <ul>
              <li><a className='collection' href='#'>My Collection</a></li>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
        <div className='gallery'>
          <div className='galleryContainer'>
            <div className='container-border' />
            <img src={Image} height='250' width='250' alt='1' />
            <img src={Image} height='250' width='250' alt='2' />
            <img src={Image} height='250' width='250' alt='3' />
            <img src={Image} height='250' width='250' alt='4' />
            <input type='file' className='files' multiple />
          </div>
        </div>
      </div>
  ) }
}

export default User
