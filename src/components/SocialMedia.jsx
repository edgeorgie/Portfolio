import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://twitter.com/edgeorgie_' target='_blank' rel='noreferrer'><BsTwitter /></a>
      <a href='https://www.instagram.com/edgeorgie_/' target='_blank' rel='noreferrer'><BsInstagram /></a>
      <a href='https://github.com/edgeorgie' target='_blank' rel='noreferrer'><FaGithub /></a>
      <a href='https://www.linkedin.com/in/edgeorgie/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
    </div>
  )
}
