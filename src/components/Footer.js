import React from 'react'


  const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="social">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
          <div className="contact-info">
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="address">
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;

