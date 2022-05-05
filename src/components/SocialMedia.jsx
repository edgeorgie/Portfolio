import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <FaGithub />
      </div>
    </div>
  )
}
