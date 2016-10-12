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
      products: [],
      product: {}
    }
  }

  getUserImage = () => {
    let user = firebase.auth().currentUser
    let userImage = user.photoURL
    return userImage
  }

  onChangeBC = (event) => {
    console.log(event.target.value)
    this.setState({ product: {...this.state.product, batchCode: event.target.value} })
  }

  onChangeColor = (event) => {
    this.setState({ product: {...this.state.product, color: event.target.value} })
  }

  onChangeExpiration = (event) => {
    this.setState({ product: {...this.state.product, expiration: event.target.value} })
  }

  onChangeLocation = (event) => {
    this.setState({ product: {...this.state.product, location: event.target.value} })
  }

  componentDidMount () {
    let user = firebase.auth().currentUser
    this.firebaseRef = firebase.syncState(`${user.uid}/products/${this.props.params.index}`, {
      context: this,
      state: 'product'
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
          <img src={this.state.product.url} height='400' width='400' />
        </div>
        <div className='Stats'>
          <input type='text' placeholder='Batch Code' ref='batchCode' onChange={this.onChangeBC} value={this.state.product.batchCode} />
          <input type='text' placeholder='color' ref='Color' onChange={this.onChangeColor} value={this.state.product.color} />
          <input type='text' placeholder='Expiration' ref='expiration' onChange={this.onChangeExpiration} value={this.state.product.expiration} />
          <input type='text' placeholder='Location' ref='location' onChange={this.onChangeLocation} value={this.state.product.location} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default SinglePic
