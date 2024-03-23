import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Image from './ECOMgroww.webp.webp'; // Import your image file
import whatsapp from "./images.jpg"
import './Navbar.css'; // Import your CSS file

function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const [isActive, setIsActive] = useState(null)

  const toggleNavBar = () => {
    navActive ? setNavActive(false) : setNavActive(true);
  }
  const handleItemClick = (index) => {
    setIsActive(index);
  };
  const navItems = [
    {
      id: 1,
      navName: "Home",
      linkTo: "/",
     
    },
    {
      id: 2,
      navName: "Services",
      linkTo: "/Services",
     
    },
    
  ]
 

  return (
    <header className='bg-[#5161ce] text-white'>
      <nav className="w-full h-16 border-b-2 border-[#3f4eaf] flex xl:text-[22px] lg:text-[20px] ">
        {/* logo cont */}
        <div className='w-auto my-auto ml-4 '>
              <img src={Image} alt="" className='w-36' />
        </div>
        {/*  nav items cont for laptop*/}
        <div className=' w-full hidden lg:block'>
            <ul className='flex justify-end items-center h-full mr-16 hover:text-decoration-none'>
                {
                  navItems.map((obj, index) => (
                    <Link to={obj.linkTo} onClick={() => handleItemClick(index)} className='hover:no-underline hover:text-white'>
                    <li key={obj.id} className='mx-4 hover:scale-125 ease-out duration-500  '>
                      {obj.navName}
                   {isActive === index && <div className={`rounded-lg w-12 border-b-4 mx-auto border-white`}></div>}
                
                    </li>
                    </Link>
                  ))
                }
            </ul>
        </div>
        {/* nav items cont for mobile & tab */}
        <div className='flex justify-end w-full h-full items-center lg:hidden '>
        <i className="fas fa-bars text-white text-[30px] mr-3 " onClick={() => toggleNavBar()}></i>
        </div>
       
      </nav>
      <div className={`mobile-nav w-full h-[15rem] text-[18px] ${navActive ? "block" : "hidden" } `}>
      <ul className='h-full hover:text-decoration-none text-center'>
                {
                  navItems.map((obj, index) => (
                    <NavLink to={obj.linkTo} className='hover:no-underline hover:text-white'>
                    <li key={obj.id} className='my-2 py-2 pl-8 w-full hover:bg-[#293bb4] hover:scale-125 ease-out duration-500  '>
                      {obj.navName}
                   {isActive === index && <div className={`rounded-lg w-12 border-b-4 mx-auto border-white`}></div>}
                    </li>
                    </NavLink>
                  ))
                }
            </ul>
      </div>
      <div className=' relative'>
        <p className='fixed top-[37rem] z-50 right-6 rounded-lg border border-black w-32 text-black text-center'>Chat with us</p>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      className=' fixed top-[31.3rem] z-50 right-8 w-4 rounded-full'
    >
      <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path
          d="M90 23.25c0-0.384-0.146-0.768-0.439-1.061c-0.586-0.586-1.535-0.586-2.121 0L45 64.629L2.561 22.189c-0.585-0.586-1.536-0.586-2.121 0c-0.586 0.586-0.586 1.535 0 2.121l43.5 43.5c0.585 0.586 1.536 0.586 2.121 0l43.5-43.5C89.854 24.018 90 23.634 90 23.25z"
          fill="rgb(29,29,27)"
        />
      </g>
    </svg>
    <a href="https://wa.me/+918130259381" target='_blank'>
        <img src={whatsapp} alt="" className=' fixed top-[40rem] z-50 right-3 w-16 rounded-full' />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
