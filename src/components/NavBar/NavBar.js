import React from 'react';
import './NavBar.css'; 
const NavBar = () => {
  return (
    <header className="header">
         <a href="/" className='logo'>Logo</a>
         <nav className='navbar'>
            <a href="/">Home</a>
            <a href="/">Gallary</a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
         </nav>
    </header>
  )
}

export default NavBar;
