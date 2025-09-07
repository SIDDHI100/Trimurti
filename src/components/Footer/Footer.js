import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-logo">WatchWorld</h3>
          <p>© {new Date().getFullYear()} WatchWorld. All rights reserved.</p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaEnvelope className="footer-icon" /> support@watchworld.com</p>
          <p><FaPhoneAlt className="footer-icon" /> +91 98765 43210</p>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
