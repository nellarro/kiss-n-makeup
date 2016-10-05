import React, { Component } from 'react'
import Logo from '../kisslogo.gif'

class Footer extends Component {

  render () {
    return(
    <footer className='PageFooter'>
      <div className='footer'>
        <ul>
          <li><img src={Logo} /></li>
          <li><p> &copy; 2016 Copyright Jenell Pizarro. ARR.</p></li>
          <li><a href='https://github.com/nellarro/v2-kiss-n-makeup'><i className="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  )}
}

export default Footer
