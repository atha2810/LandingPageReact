import React from 'react'
import "./List.css"
import l1 from './../../Images/l1.jpg'
import l2 from './../../Images/l2.jpg'
import l3 from './../../Images/l3.jpg'
import l4 from './../../Images/l4.jpg'
import share from './../../Images/share.png'
import like from './../../Images/like.png'
import car from './../../Images/car.png'


const List = () => {
  return (
    <div className='list'>
        <div className='card'>
            <img className='mainImg' src={l1} alt=''></img>
                <div className='iconList'>
                <img className='icon' src={share} alt=''></img>
                <img className='icon' src={like} alt=''></img>
                <img className='icon' src={car} alt=''></img>
                </div>
                <div className='ptitle'><span>Men Henley Neck
Full Sleeve Red Wine</span></div>
              <div className='price'>
                      <span>₹399</span>
                      <span style={{textDecorationLine:'line-through',color:"red",fontSize:"15px",marginLeft:"7px"}}>₹1299</span>
                    </div>
                    <div className='size'>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                      <button>XL</button>
                      <button>XXL</button>
                    </div>
                  </div>
      <div className='card'>
            <img className='mainImg' src={l2} alt=''></img>
                <div className='iconList'>
                <img className='icon' src={share} alt=''></img>
                <img className='icon' src={like} alt=''></img>
                <img className='icon' src={car} alt=''></img>
                </div>
                <div className='ptitle'><span>Men Henley Neck
                    Full Sleeve Red Wine</span></div>
                    <div className='price'>
                      <span>₹399</span>
                      <span style={{textDecorationLine:'line-through',color:"red",fontSize:"15px",marginLeft:"7px"}}>₹1299</span>
                    </div>
                    <div className='size'>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                      <button>XL</button>
                      <button>XXL</button>
                    </div>

                
      </div>
      <div className='card'>
            <img className='mainImg' src={l3} alt=''></img>
                <div className='iconList'>
                <img className='icon' src={share} alt=''></img>
                <img className='icon' src={like} alt=''></img>
                <img className='icon' src={car} alt=''></img>
                </div>
                <div className='ptitle'><span>Men Henley Neck
Full Sleeve Red Wine</span></div>
<div className='price'>
                      <span>₹399</span>
                      <span style={{textDecorationLine:'line-through',color:"red",fontSize:"15px",marginLeft:"7px"}}>₹1299</span>
                    </div>
                    <div className='size'>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                      <button>XL</button>
                      <button>XXL</button>
                    </div>
      </div>
      <div className='card'>
            <img className='mainImg' src={l4} alt=''></img>
                <div className='iconList'>
                <img className='icon' src={share} alt=''></img>
                <img className='icon' src={like} alt=''></img>
                <img className='icon' src={car} alt=''></img>
                </div>
                <div className='ptitle'><span>Men Henley Neck
Full Sleeve Red Wine</span></div>
<div className='price'>
                      <span>₹399</span>
                      <span style={{textDecorationLine:'line-through',color:"red",fontSize:"15px",marginLeft:"7px"}}>₹1299</span>
                    </div>
                    <div className='size'>
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                      <button>XL</button>
                      <button>XXL</button>
                    </div>
      </div>
    </div>
  )
}

export default List
