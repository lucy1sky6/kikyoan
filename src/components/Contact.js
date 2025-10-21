import React from 'react';
import './Contact.css';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contact() {
  return (
    <div className="contact-container">
      <div className="logo-placeholders">
        <div className="logo-placeholder-contact">ロゴ予定地A</div>
        <div className="logo-placeholder-contact">ロゴ予定地B</div>
      </div>
      <p className="contact-address">
        〒927-0553 石川県鳳珠郡能登町小木10‐28
      </p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
}

export default Contact;