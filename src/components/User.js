import React, { Component } from 'react'
import Image from '../stock_user_image.jpg'
import Logo from '../kisslogo.gif'
import '../styles/user.sass'
import { Link, browserHistory } from 'react-router'
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
    browserHistory.push('/log')
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
          <Link to='/log'><img src={Image} className='avatarImg' /></Link>
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
              {this.state.pictures.map((picture, index) => {
                return <Link to='/image' ><img src={picture} key={index} alt={index} height='250' width='250' /></Link>})}
              <input type='file' ref= 'upload' id='files' accept='image/*' onChange={this.uploadFile.bind(this)} />
            </div>
          </div>
        </div>
        <footer className='PageFooter'>
          <div className='footer'>
            <ul>
              <li><img src={Logo} /></li>
              <li><p> &copy; 2016 Copyright Jenell Pizarro. ARR.</p></li>
              <li><a href='https://github.com/nellarro/v2-kiss-n-makeup'><i className="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
  ) }
}

export default User
