import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import './Styles.scss'

export const NormalHeader = () => {
  return (
    <>
      <header className='app__header app_flex'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋🏽</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>Hello there, my name is</p>
                <h1 className='head-text'>Edwin</h1>
                <p className='p-text'>And I'm from Colombia</p>
              </div>
            </div>

            <div className='tag-cmp app__flex'>
              <p className='p-text'>
                <strong>Frontend Developer</strong>
              </p>
              <p className='p-text'>
                <strong>UI/UX Designer</strong>
              </p>
              <p className='p-text'>
                <strong>Freelancer</strong>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChidlren: 0.5 }}
          className='app__header-img'
        >
          <motion.img
            className='app__header-img--profile'
            src={images.profile}
            alt='Profile picture'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            src={images.circle}
            alt='Profile circle'
            className='overlay-circle'
          />
        </motion.div>
      </header>
    </>
  )
}

export const Header = AppWrap(NormalHeader, 'Home')
