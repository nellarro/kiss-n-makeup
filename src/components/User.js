import React, { Component } from 'react'
import Footer from '../components/Footer.js'
import '../styles/user.sass'
import { Link, browserHistory } from 'react-router'
import firebase from '../firebase/firebase.js'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      products: []
    }
  }

  componentDidMount () {
    let user = firebase.auth().currentUser
    this.firebaseRef = firebase.syncState(`${user.uid}/products`, {
      context: this,
      state: 'products',
      asArray: true
    })
  }

  addAPic = (newPicture) => {
    this.setState({
      products: this.state.products.concat([{url: newPicture}])
    })
  }

  _handleClick = () => {
    browserHistory.push('/log')
  }

  uploadFile = () => {
    let file = this.refs.upload.files[0]
    let storageRef = firebase.storage().ref()
    let imgRef = storageRef.child(file.name)
    imgRef.put(file).then((snapshot) => {
      console.log('Ding! File done')
      imgRef.getDownloadURL().then((url) => {
        this.setState({ url })
        this.addAPic(url)
      })
    })
  }

  getUserImage = () => {
    let user = firebase.auth().currentUser
    let userImage = user.providerData[0].photoURL
    let newUserImage = userImage.replace(/normal/, '400x400')
    return newUserImage
  }

  render () {
    return (
      <div className='userPage'>
        <header className='userHeader'>
          <Link to='/log'><img src={this.getUserImage()} className='avatarImg' key=""/></Link>
          <nav>
            <ul>
              <li><Link to='/MyCollection' className='collection'>My Collection</Link></li>
              <li><a href='#'>Browse</a></li>
              <li><a href='#'>Favorites</a></li>
            </ul>
          </nav>
        </header>
        <div className='gallery'>
          <div className='galleryContainer'>
            <div className='container-border'>
              {this.state.products.map((product, index) => {
                return <Link to={`/pickles/${index}`} ><img src={product.url} key={index} alt={index} height='250' width='250' /></Link>})}
              <input type='file' ref='upload' id='files' accept='image/*' onChange={this.uploadFile.bind(this)} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
  ) }
}

export default User
