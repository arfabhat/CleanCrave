import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>At CleanCrave, our mission is to make nutritious eating effortless and enjoyable, with a menu crafted from the freshest, locally-sourced ingredients. Whether you're looking to maintain a balanced diet, explore new flavors, or simply enjoy wholesome meals without the hassle of cooking, Clean Crave has you covered.
               Join our community of health-conscious food lovers and experience the convenience of eating well. For any inquiries or support, please contact us at support@cleancrave.com or call us at (+91) 9134567890. Let's crave clean, together!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91) 9134567890</li>
                <li>support@cleancrave.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CleanCrave.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
