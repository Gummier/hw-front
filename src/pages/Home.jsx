import React from 'react'
import Nav from '../components/Nav'
import MyCalendar from '../components/MyCalendar'
import Section from '../components/Section'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Nav></Nav>
        <div className='w-screen h-80 bg-amber-600'></div>
        <Section/>
        <Footer/>
    </div>
  )
}

export default Home
