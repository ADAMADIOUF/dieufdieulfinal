import React,{useState} from 'react'
import logo from '../src/images-1/dieufdieul-logo.jpg';

import {FaBars} from "react-icons/fa"
import Sidebar from './Sidebar';
import Typed from './Typed';
import { Link} from 'react-router-dom';
const Navbar = () => {
const [showNav, setShowNav] = useState(false)
const openSidebar = () => {
  setShowNav(true)
}
const closeSidebar = () => {
  setShowNav(false)
}

  return (
    <>
      <>
        <Typed />

        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <div className='logo'>
                <Link to={`/`}>
                  <img src={logo} alt='' />
                </Link>
              </div>
              <button className='btn-toggle' onClick={openSidebar}>
                <FaBars />
              </button>
            </div>
            <ul className='nav-links'>
              <li>
                <a href='/'>accueil</a>
              </li>

              <li>
                <a href='/tenu'>tenue</a>
              </li>
              <li>
                <a href='/about'>A propos</a>
              </li>
              <li>
                <a href='/contact'>contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <Sidebar showNav={showNav} closeSidebar={closeSidebar} />
      </>
    </>
  )

}

export default Navbar