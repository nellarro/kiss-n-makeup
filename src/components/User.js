import React, { Component } from 'react'
import Image from '../stock_user_image.jpg'
import '../styles/user.sass'
import { Link, hashHistory } from 'react-router'
import firebase from '../firebase/firebase.js'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  _handleClick = () => {
    hashHistory.push('/log')
  }

  uploadFile = () => {
    let file = this.refs.upload.files[0]
    let storageRef = firebase.storage().ref()
    let imgRef = storageRef.child(file.name)
    imgRef.put(file).then(function(snapshot) {
      console.log('file uploaded')
      imgRef.getDownloadURL().then((url) => {
        this.setState({ url })
      })
    })
  }

  render () {
    return (
      <div className='userPage'>
        <header className='userHeader'>
          <img src={Image} onClick={this._handleClick} className='avatarImg' />
          <nav>
            <ul>
              <Link to='/MyCollection'><li><a className='collection' href='#'>My Collection</a></li></Link>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
        <div className='gallery'>
          <div className='galleryContainer'>
            <div className='container-border'>
              <img src={Image} height='250' width='250' alt='1' />
              <img src={Image} height='250' width='250' alt='2' />
              <input type='file' ref= 'upload' id='files' accept='image/*' onChange={this.uploadFile.bind(this)} />
              <img src={this.state.url} height='250' width='250'/>
            </div>
          </div>
        </div>
      </div>
  ) }
}

export default User
