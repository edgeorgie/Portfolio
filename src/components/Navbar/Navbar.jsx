import React from 'react'
import { images } from '../../constants'
import './Styles.scss'

export const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='Logo' />
      </div>
      <ul className='app__navbar-links'>
        {
          ['Home', 'About', 'Work', 'Skills', 'Testimonials', 'Contact'].map((item, index) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>)
          )
        }
      </ul>
    </nav>
  )
}
