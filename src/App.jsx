import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCalendar from './components/MyCalendar'
import Nav from './components/Semantic/Nav.jsx'
import Section from './components/Semantic/Section.jsx'
import Footer from './components/Semantic/Footer.jsx'
import DetailHeader from './components/DetailHeader.jsx'
import TimeTable from './components/TimeTable.jsx'
import BookingDetail from './components/Bookings/BookingDetail.jsx'
import BookingForm from './components/Bookings/BookingForm.jsx'
function App() {
  const [count, setCount] = useState(0)
  const exampleBookings = {
    "12:00": { text: "SIT119 Hello World", color: "bg-red-200 text-black" },
    "15:30": { text: "Meeting", color: "bg-gray-300 text-black" },
  };
  return (
    <div>
      
  </div>
  )
}

export default App
