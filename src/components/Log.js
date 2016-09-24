import React, { Component } from 'react'
import '../styles/log.sass'

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
          <button className='avatar' onClick={this.changeToUser} />
        </div>
      </div>)
  }
}

export default Log
