import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { Divider } from '@mui/material';


const Header = () => {
  return (
   <header>
    <nav className='apple-nav'>
      <div className='logo'>Portfolio</div>
      <ul className="nav-list">
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://drive.google.com/file/d/1cLG3lMOh5EGEij2WzZf17b8jOSQ2J_Kg/view?usp=sharing" target='blank'>Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <HamburgerMenu/>
    <Divider/>
   </header>
  );
}

export default Header;
