import React, { Component } from 'react'
import Image from '../stock_user_image.jpg'
import '../styles/user.sass'
import { Link, hashHistory } from 'react-router'
import firebase from '../firebase/firebase.js'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
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

  addAPic = (newPicture) => {
    this.setState({
      pictures: this.state.pictures.concat([newPicture])
    })
  }

  downloadFile = () => {
    let file = this.refs.upload.files[0]
    let storage = firebase.storage()
    let pathReference = storage.ref(file)
  }

  _handleClick = () => {
    hashHistory.push('/log')
  }

  uploadFile = () => {
    let file = this.refs.upload.files[0]
    let storageRef = firebase.storage().ref()
    let imgRef = storageRef.child(file.name)
    imgRef.put(file).then((snapshot) => {
      console.log('file uploaded')
      imgRef.getDownloadURL().then((url) => {
        this.setState({ url })
        this.addAPic(url)
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
              <img src={this.state.pictures.map} height='250' width='250'/>
              <input type='file' ref= 'upload' id='files' accept='image/*' onChange={this.uploadFile.bind(this)} />
            </div>
          </div>
        </div>
      </div>
  ) }
}

export default User
