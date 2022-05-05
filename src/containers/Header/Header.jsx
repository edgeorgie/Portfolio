import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Styles.scss'

export const Header = () => {
  return (
    <>
      <div id='home' className='app__header app_flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋🏽</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>Hello there, I am</p>
                <h1 className='head-text'>Edwin</h1>
              </div>
            </div>

            <div className='tag-cmp app__flex'>
              <p className='p-text'>Front-end Developer</p>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>UI/UX Designer</p>
              <p className='p-text'>Freelancer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChidlren: 0.5 }}
          className='app__header-img'
        >
          <img className='app__header-img--profile' src={images.profile} alt='Profile picture' />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            src={images.circle}
            alt='Profile circle'
            className='overlay-circle'
          />
        </motion.div>
      </div>
    </>
  )
}
