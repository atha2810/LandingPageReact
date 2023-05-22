import React from 'react'
import "./Categories.css"
import image2 from './../../Images/image2.png'
import image3 from './../../Images/image3.png'
import image4 from './../../Images/image4.png'
import image5 from './../../Images/image5.png'
import image6 from './../../Images/image6.png'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='row1'>
        <img src={image2} alt=''></img>
        <img src={image3} alt=''></img>
      </div>
      <div className='row2'>
       <img src={image4} alt=''></img>
        <img src={image5} alt=''></img>
        <img src={image6} alt=''></img>
      </div>
    </div>
  )
}

export default Categories
