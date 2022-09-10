import React from 'react'
import { FaFacebook, FaInstagram, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa'
import logo from '../src/images-1/footer1.png'

const Footer = () => {
const current = new Date()
  const date = `${current.getFullYear()}`
  return (
    <div className='footer'>
      <div className='footer-container'>
        <article>
          <img src={logo} alt='' className='logo-footer' />
        </article>
        <article className='footer-info'>
          <p>
            Le couturier adore les voyages, les découvertes et la nature. Ses
            collections s’inspirent en partie de ses périples et de ses
            rencontres. Très à l’écoute de ses clientes, il se complait à les
            surprendre en présentant des créations en accord avec ses
            convictions : des confections élaborées avec des tissus nobles,
            issus de matières naturelles souvent retravaillées et brodées.
          </p>
        </article>
        <article className='footer-links-nav'>
          <ul className='nav-links-footer'>
            <li>
              <a href='/'>home</a>
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
        </article>
        <article>
          <ul className='links-social'>
            <li>
              <a href='https://www.facebook.com/pacowefor'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href='/'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href='https://wa.me/221779258508'>
                <FaWhatsapp />
              </a>
            </li>
          </ul>
          <div className='footer-socials'>
            <h3>
              {' '}
              <span>(+221)</span>77-925-85-08
            </h3>
            <h3>
              {' '}
              <span>(+221)</span>76-255-54-87
            </h3>
            <h3>dieufdieul@gmail.com</h3>
          </div>
        </article>
      </div>
      <h3 className='date'>
        &copy; {date}
        <span> adamadiouf2017@gmail.com </span>all rights reserved
      </h3>
    </div>
  )
}

export default Footer