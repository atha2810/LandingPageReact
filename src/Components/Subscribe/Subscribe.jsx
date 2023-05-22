import React from 'react'
import "./Subscribe.css"
import subscribe from "./../../Images/subscribe.png"



const Subscribe = () => {
  return (
  
    <div className='subscribe'>
      <img src={subscribe} alt=''></img>
   
        <input className='enter' type='text'></input>
      
    </div>
  )
}

export default Subscribe
