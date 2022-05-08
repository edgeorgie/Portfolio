import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Styles.scss'

const NormalSkills = () => {
  const [skills, setSkills] = useState([])
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const queryExperiences = '*[_type == "experiences"]'
    const querySkills = '*[_type == "skills"]'

    client.fetch(queryExperiences).then(res => {
      setExperience(res)
    })

    client.fetch(querySkills).then(res => {
      setSkills(res)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container app__flex'>
        <motion.div className='app__skills-list app__flex'>
          {skills?.map((skill) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience?.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <span className='p-text'>{work.company}</span>
                      <p className='p-text'>
                        {work.desc}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export const Skills = AppWrap(
  MotionWrap(NormalSkills, 'app__skills'),
  'skills',
  'app__whitebg'
)
