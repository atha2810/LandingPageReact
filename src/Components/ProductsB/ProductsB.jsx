import React from 'react'
import "./ProductsB.css"
import r11 from './../../Images/r11.png'
import r12 from './../../Images/r12.png'
import r13 from './../../Images/r13.png'
import r21 from './../../Images/r21.png'
import r22 from './../../Images/r22.png'
import r23 from './../../Images/r13.png'

const ProductsB = () => {
  return (
    <div className='productsB'>
        <div className='rowFirst'>
          
      <img className='r11' src={r11} alt=''></img>
      <div className='title11'>Streetwear Collections</div>

      <img className='r12' src={r12} alt=''></img>
      <div className='title12'>Striped T-Shirts</div>

      <img className='r13' src={r13} alt=''></img>
      <div className='title13'>Round Neck T-Shirts</div>
            </div>
      
        <div className='rowSecond'>
      <img className='r21' src={r21} alt=''></img>
      <div className='title21'>Round Neck T-Shirts</div>

      <img className='r22' src={r22} alt=''></img>
      <div className='title22'>Oversized T-Shirts</div>
      
      <img className='r23' src={r23} alt=''></img>
      <div className='title23'>Round Neck T-Shirts</div>
        </div>

    </div>
  )
}

export default ProductsB
