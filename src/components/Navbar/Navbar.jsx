import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Styles.scss'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.logo} alt='Logo' />
      </div> */}
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills & Experience', 'Testimonials', 'Contact'].map(
          (item, index) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
              <div />
            </li>
          )
        )}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt3 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'About', 'Work', 'Skills & Experience', 'Testimonials', 'Contact'].map(
                (item, index) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
