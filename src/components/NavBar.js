import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const btnRef = useRef(null);

  const active = toggle
    ? 'only:absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
    : 'hidden';
  const handleClick = () => {
    setToggle((prev) => !prev);
    btnRef.current.classList.toggle('open');
  };

  const closeNavbar = () => {
    setToggle(false);
    btnRef.current.classList.toggle('open');
  };

  return (
    <div className="bg-gray-900 text-white shadow-md mb-10">
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:text-darkGrayishBlue">
            Cyclobold BlogSpot
          </Link>
          <div className="hidden space-x-6 md:flex">
            <Link to="/about" className="hover:text-darkGrayishBlue">
              About us
            </Link>
            <a href="https://cyclobold.com/#fulltime-parttime-id">Courses</a>
            <a href="https://cyclobold.com/contact-us">Contact</a>
          </div>
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-green-400 bg-brightRed rounded-full baseline hover:bg-darkGrayishBlue md:block"
          >
            Get Started
          </a>

          <button
            className="block hamburger md:hidden focus:outline-none"
            ref={btnRef}
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-md"></span>
            <span className="hamburger-bt"></span>
          </button>
        </div>
        <div className="md:hidden text-black">
          <div className={active}>
            <Link
              to="/about"
              className="hover:text-darkGrayishBlue"
              onClick={closeNavbar}
            >
              About us
            </Link>
            <a href="https://cyclobold.com/#fulltime-parttime-id">Courses</a>
            <a href="https://cyclobold.com/contact-us">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
