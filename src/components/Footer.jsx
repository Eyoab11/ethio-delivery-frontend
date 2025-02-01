import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#323232] text-[#d9d9d9] py-20 px-[8vw] mt-24'>
      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full gap-20 flex-col md:flex-row">
          <div className="flex flex-col items-start gap-5 w-full md:w-2/5">
            <h2 className='font-extrabold text-orange-500 text-2xl'>EthioDelivery</h2>
            <p>This website offers delivery services for food, groceries, flowers, and more! It’s designed as part of a portfolio project and is not an operational service.</p>
            <div className="flex gap-4">
              <FaFacebookF className="w-8 h-8 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-orange-500" />
              <FaTwitter className="w-8 h-8 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-orange-500" />
              <FaLinkedinIn className="w-8 h-8 cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-orange-500" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 w-full md:w-1/5">
            <h2 className="text-white">COMPANY</h2>
            <ul>
              <li className="cursor-pointer mb-2"><a href="#home" className="hover:text-orange-500">Home</a></li>
              <li className="cursor-pointer mb-2"><a href="#about" className="hover:text-orange-500">About Us</a></li>
              <li className="cursor-pointer mb-2"><a href="#delivery" className="hover:text-orange-500">Delivery</a></li>
              <li className="cursor-pointer mb-2"><a href="#privacy-policy" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5 w-full md:w-1/5">
            <h2 className="text-white">SHOP BY CATEGORY</h2>
            <ul>
              <li className="cursor-pointer mb-2"><Link to="/food" className="hover:text-orange-500">Food</Link></li>
              <li className="cursor-pointer mb-2"><Link to="/groceries" className="hover:text-orange-500">Groceries</Link></li>
              <li className="cursor-pointer mb-2"><Link to="/flowers" className="hover:text-orange-500">Flowers</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5 w-full md:w-1/5">
            <h2 className="text-white">GET IN TOUCH</h2>
            <ul>
              <li className="cursor-pointer mb-2"><a href="tel:+2519249567890" className="hover:text-orange-500">+251-924-956-7890</a></li>
              <li className="cursor-pointer mb-2"><a href="mailto:contact@ethiodelivery.com" className="hover:text-orange-500">contact@ethiodelivery.com</a></li>
            </ul>
          </div>
        </div>

        <hr className="w-full h-[2px] my-6 bg-gray-600" />
        <p className='text-center'>Copyright 2024 © EthioDelivery - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
