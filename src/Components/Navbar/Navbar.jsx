import React from 'react'
import "./Navbar.css"
import logo from './../../Images/logo.png'
import search from './../../Images/search.png'
import heart from './../../Images/heart.png'
import cart from './../../Images/cart.png'
import person from './../../Images/person.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nleft'>
          <img src={logo} alt="" style={{cursor:"pointer"}}/>
        </div>
      <div className='ncenter' style={{cursor:"pointer"}}>
        Logo Here
      </div>
      <div className='nright'>
        <img src={search}alt='' style={{marginRight:"30px",cursor:"pointer"}}></img>
          <img src={heart} alt='' style={{marginRight:"30px",cursor:"pointer"}}></img>
          <img src={cart} alt='' style={{marginRight:"30px",cursor:"pointer"}}></img>
          <img src={person} alt='' style={{cursor:"pointer"}}></img>
      </div>
    </div>
  )
}

export default Navbar
