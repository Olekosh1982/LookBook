import React from 'react'
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'


  const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          
          <div className="contact-info">
            <p>Email:sweetdeli@gmail.com</p>
            <p>+1-2345-6789</p>
          </div>
          <div className="address">
            <p>123 Ave, New York, USA</p>
          
          </div>
          <div className="social">
            <a href="https://www.facebook.com"><img src={facebook} alt={'Result'}/></a>
            <a href="https://www.linkedin.com"><img src={linkedin} alt={'Result'}/></a>
            <a href="https://www.twitter.com"><img src={twitter} alt={'Result'}/></a>
            <a href="https://www.instagram.com"><img src={instagram} alt={'Result'}/></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

