import React from 'react'
import "./Products.css"
import p1 from './../../Images/p1.png'
import p2 from './../../Images/p2.png'
import p3 from './../../Images/p3.png'
import p4 from './../../Images/p4.png'
import p5 from './../../Images/p5.png'
import p6 from './../../Images/p6.png'

const Products = () => {
  return (
    <div className='products'>
        <div className='p1'>
        <img src={p1} alt=''></img>
        <span>Men's T-shirt</span>
      </div>
      <div className='p2'>
        <img src={p2} alt=''></img>
        <span>Women’s Wear</span>
     </div>
      <div className='p3'>
        <img src={p3} alt=''></img>
        <span>Winter Collections</span>
        
        </div>
      <div className='p4'>
        <img src={p4} alt=''></img>
        <span>Hooded T-Shirts</span>
        </div>
      <div className='p5'>
        <img src={p5} alt=''></img>
        <span>Polo Neck T-Shirts</span>
        </div>
      <div className='p6'>
        <img src={p6} alt=''></img>
        <span>Full Sleeves T-Shirts</span>
       </div>
       
    </div>
  )
}

export default Products
