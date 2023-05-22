import React from 'react'
import "./Footer.css"
import fb from './../../Images/facebook.png'
import twitter from './../../Images/twitter.png'
import insta from './../../Images/instagram.png'
import li from './../../Images/linkedin.png'
import pin from './../../Images/pinterest.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='up'>
        <div className='section1'>
            <div className='top'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....
            </div>
            <div className='bottom'>
                <img src={fb} alt='' style={{height:"46px",width:"46px"}}></img>
                <img src={twitter} alt='' style={{height:"46px",width:"46px"}}></img>
                <img src={insta} alt='' style={{height:"46px",width:"46px"}}></img>
                <img src={li} alt='' style={{height:"46px",width:"46px"}}></img>
                <img src={pin} alt='' style={{height:"46px",width:"46px"}}></img>
            </div>
        </div>
        <div className='section2'>
            <h3>ONLINE SHOPPING</h3>
            <span>
              Men’s T-Shirts<br/>
              Women’s Wear<br/>
              Winter Collections<br/>
              Streetwear Collections<br/>
         </span>
             </div>
        <div className='section3'>
        <h3>CUSTOMER POLICIES</h3>
            <span>About Us<br/>
                Terms & Conditions
                Shipping & Returns Policy
                Cancellation & Refund Policy
                Contact Us</span>
        </div>
        <div className='section4'>
            <h3>STORE INFORMATION</h3>
            <span>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. <br/>
Call Us: 1234567890<br/>
Email Us: info@yourmail.com</span>
        </div>
        </div>
      <div className='powered'>©2022-23 Powered By dummy team   </div>
    </div>
  )
}

export default Footer
