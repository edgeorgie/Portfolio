import React, { useState } from 'react'
import { BsWhatsapp, BsCheck2Circle } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Styles.scss'

const NormalFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsSubmitted(true)
    }).catch((err) => {
      console.log('This is the error: ', err)
    })
  }

  return (
    <footer>
      <div className='app__footer-cards'>
        <h2 className='head-text'>Want to build great products?</h2>
        <h2 style={{ marginTop: 5, textDecoration: 'underline' }}>
          Let's get in touch
        </h2>
        <div className='app__footer-card'>
          <SiGmail style={{ color: '#DB4437' }} size={42} />
          <a
            href='mailto:ed.jorge1122@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='p-text'
          >
            ed.jorge1122@gmail.com
          </a>
        </div>

        <div
          className='app__footer-card'
          style={{ backgroundColor: '#d2f9e0' }}
        >
          <BsWhatsapp style={{ color: '#25D366' }} size={42} />
          <a
            href='https://wa.me/+573002813676/?text=Hello%20there!%20I%20am%20[YOUR%20NAME]%20and%20I%20want%20to%20work%20with%20you!'
            target='_blank'
            rel='noreferrer'
            className='p-text'
          >
            +57 (300) 281 3676
          </a>
        </div>
        <div
          className='app__footer-card'
          style={{ backgroundColor: '#d1ecf8' }}
        >
          <FaTelegramPlane style={{ color: '#229ED9' }} size={42} />
          <a
            href='https://t.me/EdwinJorge'
            target='_blank'
            rel='noreferrer'
            className='p-text'
          >
            +57 (300) 281 3676 | @EdwinJorge
          </a>
        </div>
      </div>
      <div className='app__footer-cards'>
        {!isSubmitted
          ? (
            <form onSubmit={handleSubmit} className='app__footer-form app__flex'>
              <label htmlFor='name'>Name</label>
              <div className='app__flex'>
                <input
                  className='p-text'
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={handleChangeInput}
                />
              </div>
              <label htmlFor='email'>Email</label>
              <div className='app__flex'>
                <input
                  className='p-text'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <label htmlFor='message'>Message</label>
              <div className='app__flex'>
                <textarea
                  className='p-text'
                  placeholder='Message'
                  name='message'
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <input
                className='app__footer-form-button'
                type='submit'
                value={loading ? 'Sending...' : 'Send message'}
              />
            </form>
            )
          : (
            <div style={{ textAlign: 'center', marginTop: 0 }}>
              <h2>Thank you, I'll be in touch soon</h2>
              <BsCheck2Circle
                style={{ marginTop: 15, color: '#313bac' }}
                size={42}
              />
            </div>
            )}
      </div>
    </footer>
  )
}

export const Footer = AppWrap(
  MotionWrap(NormalFooter),
  'Contact',
  'app__whitebg'
)
