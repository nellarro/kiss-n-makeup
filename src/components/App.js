import React, { Component } from 'react'
import '../styles/landing.sass'
import '../styles/sign.sass'
import '../styles/log.sass'
import Landing from '../components/Landing.js'
import Sign from '../components/Sign.js'
import Log from '../components/Log.js'
import User from '../components/User.js'
import SinglePic from '../components/SinglePic.js'
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {

  render () {
    return (
    <Router history={ hashHistory }>
      <Route path='/' component= {Landing} />
      <Route path='/sign' component= {Sign} />
      <Route path='/log' component= {Log} />
      <Route path='/MyCollection' component= {User} />
      <Route path='/image' component= {SinglePic} />
    </Router>
  )}
}

export default App
