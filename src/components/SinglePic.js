import React, { Component } from 'react'
import Image from '../stock_user_image.jpg'
import { Link, browserHistory } from 'react-router'
import '../styles/singlepic.sass'
import firebase from '../firebase/firebase.js'

class SinglePic extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  componentDidMount () {
    let user = firebase.auth().currentUser
    this.firebaseRef = firebase.syncState(`${user.uid}/pictures`, {
      context: this,
      state: 'pictures',
      asArray: true
    })
  }

  render () {
    return (
      <div className='userPage'>
        <header className='userHeader'>
          <Link to='/log'><img src={Image} className='avatarImg' /></Link>
          <nav>
            <ul>
              <Link to='/MyCollection'><li><a className='collection' href='#'>My Collection</a></li></Link>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
        <div className='SinglePicContainer'>
          <img src={this.state.pictures[0]} height='400' width='400' />
        </div>
        <div className='Stats'>
          <input type='text' placeholder='Batch Code'/>
          <input type='text' placeholder='Color'/>
          <input type='text' placeholder='Expiration'/>
          <input type='text' placeholder='Location' />
        </div>
      </div>
    )
  }
}

export default SinglePic
