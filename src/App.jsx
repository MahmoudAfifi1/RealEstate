import React from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/contact'
import { Footer } from './components/Footer'
const App = () => {
  return (
    <div className='w-full min-h-screen bg-white overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
