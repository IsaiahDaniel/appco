import React from 'react';
import Logo from '../../assets/logo.webp';
import { TbSend } from "react-icons/tb";

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer mt-3">
      <div className="container grid-4">
        <div>
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            inventore. Tenetur quisquam incidunt sed accusamus!
          </p>
        </div>

        <ul>
          <li>
            <h3>Quick Links</h3>
          </li>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Download</li>
          <li>Reviews</li>
        </ul>

        <ul>
          <li>
            <h3>Support</h3>
            <li>Report A bug</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>SiteMap</li>
            <li>FAQs</li>
          </li>
        </ul>

        <ul>
          <li>
            <h3>NewsLetter</h3>
          </li>
          <li>
            Heaven fruitful doesn't over lesser in days. Appear
          </li>
          <form action="#">
            <input type="text" className='footer__input' placeholder="Enter Email" />
            <button type='submit' className='footer__inputBtn'>
                <TbSend />
            </button>
          </form>
        </ul>
      </div>
    </div>
  )
}

export default Footer
