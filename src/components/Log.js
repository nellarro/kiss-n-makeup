import React, { Component } from 'react'
import '../styles/log.sass'
import AvatarImage from '../stock_user_image.jpg'

class Log extends Component {
  changeToLand = () => {
    this.props.navigate('Landing')
  }
  changeToUser = () => {
    this.props.navigate('User')
  }

  render () {
    return (
      <div className='Log'>
        <button className='exit' onClick={this.changeToLand} >X</button>
        <h1>Log In</h1>
        <div className='userbutton'>
          <button className='logAvatar' onClick={this.changeToUser}><img src={AvatarImage} />
          </button>
        </div>
      </div>)
  }
}

export default Log
