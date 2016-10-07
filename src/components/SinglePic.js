import React, { Component } from 'react'
import User from '../components/User.js'
import Footer from '../components/Footer.js'
import { Link, browserHistory } from 'react-router'
import '../styles/singlepic.sass'
import firebase from '../firebase/firebase.js'

class SinglePic extends Component {

  constructor (props) {
    super(props)
    this.state = {
      pictures: [],
      picture: ''
    }
  }

  getUserImage = () => {
    let user = firebase.auth().currentUser
    let userImage = user.photoURL
    return userImage
  }

  componentDidMount () {
    let user = firebase.auth().currentUser
    this.firebaseRef = firebase.fetch(`${user.uid}/pictures`, {
      context: this,
      state: 'pictures',
      asArray: true
    }).then((pictures) => {
      let pic = pictures[this.props.params.index]
      this.setState({ picture: pic })
    })
  }

  render () {
    return (
      <div className='userPage'>
        <header className='userHeader'>
          <Link to='/log'><img src={this.getUserImage()} className='avatarImg' /></Link>
          <nav>
            <ul>
              <li><Link to='/MyCollection' className='collection'>My Collection</Link></li>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
        <div className='SinglePicContainer'>
          <img src={this.state.picture} height='400' width='400' />
        </div>
        <div className='Stats'>
          <input type='text' placeholder='Batch Code'/>
          <input type='text' placeholder='Color'/>
          <input type='text' placeholder='Expiration'/>
          <input type='text' placeholder='Location' />
        </div>
        <Footer />
      </div>
    )
  }
}

export default SinglePic
