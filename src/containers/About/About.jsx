import React from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import './Styles.scss'

export const About = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[
          images.redux,
          images.react,
          images.node,
          images.sass,
          images.html,
          images.css,
          images.git
        ].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </>
  )
}
