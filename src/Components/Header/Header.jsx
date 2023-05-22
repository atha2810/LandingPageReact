import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'
import Call from './../../Images/call.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='hleft'>
      Welcome to Our Store Hiscraves
      </div>
      <div className='hright'>
      <img className='call' src={Call} alt=''></img>Call Us: 1234567890
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
