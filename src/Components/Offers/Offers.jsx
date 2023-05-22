import React from 'react'
import "./Offers.css"
import offer1 from './../../Images/offer1.png'
import offer2 from './../../Images/offer2.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='leftOffer'>
        <img src={offer1} alt=''></img>
      </div>
      <div className='rightOffer'>
        <img src={offer2} alt=''></img>

      </div>
    </div>
  )
}

export default Offers
