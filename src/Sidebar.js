import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ showNav, closeSidebar }) => {
  return (
    <aside className={`${showNav ? 'sidebar showNavbar' : 'sidebar'}`}>
      <div>
        <button className='btn-close' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='nav-sidebar'>
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
    </aside>
  )
}

export default Sidebar