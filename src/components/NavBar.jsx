import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../assets/icons/grocery-store.png';
import MyOrders from '../assets/icons/clipboard.png';
import Menu from '../assets/icons/list.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold sm:text-lg text-orange-400">
          <Link to="/">EthioDelivery</Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-orange-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:bg-orange-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li className="p-3 hover:bg-orange-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="p-3 hover:bg-orange-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to="/others">Others</Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="xl:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={Menu} alt="Hamburger Menu" className="w-6 h-6 md:w-8 md:h-8" title="Menu" />
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg shadow-lg transform transition-transform duration-300 z-10 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <ul className="w-full flex flex-col items-center">
            <li className="list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer">
              <Link to="/restaurants" onClick={() => setIsMenuOpen(false)}>Restaurants</Link>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer">
              <Link to="/groceries" onClick={() => setIsMenuOpen(false)}>Groceries</Link>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer">
              <Link to="/others" onClick={() => setIsMenuOpen(false)}>Others</Link>
            </li>
            <li className="text-center p-4">
              <div className="cursor-pointer">
                <Link to="/cart">
                  <img src={Cart} alt="Cart" className="w-6 h-6 md:w-8 md:h-8" title="Cart" />
                </Link>
              </div>
            </li>
            <li className="text-center p-4">
              <div className="cursor-pointer">
                <Link to="/orders">
                  <img src={MyOrders} alt="My Orders" className="w-6 h-6 md:w-8 md:h-8" title="My Orders" />
                </Link>
              </div>
            </li>
            <li>
              <Link to="/sign-in">
                <button className="border border-orange-500 text-orange-500 font-bold px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all sm:text-sm sm:px-4 sm:py-1">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Icons and Sign In Button */}
        <div className="hidden xl:flex items-center gap-8 sm:gap-4">
          <div className="cursor-pointer">
            <Link to="/cart">
              <img src={Cart} alt="Cart" className="w-6 h-6 md:w-8 md:h-8" title="Cart" />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/my-orders">
              <img src={MyOrders} alt="My Orders" className="w-6 h-6 md:w-8 md:h-8" title="My Orders" />
            </Link>
          </div>
          {/* Sign In Button */}
          <Link to="/sign-in">
            <button className="border border-orange-500 text-orange-500 font-bold px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all sm:text-sm sm:px-4 sm:py-1">
              Sign In
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
