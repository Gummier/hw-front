import React, { useEffect  } from 'react'
import Nav from '../components/Nav'
import MyCalendar from '../components/MyCalendar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from '../assets/banner_sit_hw.png';
const api = axios.create({
  baseURL: "http://localhost:3000/api/"
})
function Home() {

  

  useEffect(() => {
    api.get('/buildings').then(res => {
      console.log(res.data);
    })
  },[])
  return (  
    <div className>
        <Nav></Nav>
        <div className='้' style={{
          backgroundImage: `url(${Banner})`,
          height: '450px',
        }}> 
          <h1 className='text-white text-6xl p-28'> SIT Booking System</h1>
          <p className='text-white px-28 font-semibold'>All room reservation and service request should be made at least 24 hours in advance. If your request is urgent, please contact our helpdesk directly 0-2470-9820 or e-mail servicedesk@sit.kmutt.ac.th.Please note that if your request or reservation is outside the normal service hours, our staff may not be able to provide the service at the requested time.</p>
        </div>
        <Section/>
        <Footer/>
    </div>
    
  )
}

export default Home
