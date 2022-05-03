import React from 'react'
import { About, Footer, Header, Skills, Testimonials, Work } from './containers/imports'
import { Navbar } from './components/Navbar/Navbar'
import './App.scss'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}
