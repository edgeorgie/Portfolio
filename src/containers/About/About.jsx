import React, { useEffect, useState } from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
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

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then(data => (setAbouts(data)))
  }, [])

  return (
    <div className='app__about app__flex'>
      <h2 className='head-text'>
        My <span>efficient work in</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.article
              key={about.title + index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.055 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.article>
          ))
        }
      </div>
      <h2 className='head-text'>
        gives you <span>results and effective <u>work</u> </span>
      </h2>
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
    </div>
  )
}
