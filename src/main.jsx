import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'
import Booking from './pages/Booking.jsx'
import Report from './pages/Report.jsx'
import RoomDetail from './pages/RoomDetail.jsx'
import { BookingProvider } from './components/BookingContext.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/booking",
    element: <Booking/>
  },
  {
    path: "/report",
    element: <Report/>
  },
  {
    path: "/detail",
    element: <Details/>
  },
  {
    path: "/room_detail",
    element: <RoomDetail/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      
      <RouterProvider router = {router}/>

    </BookingProvider>
  </StrictMode>,
)
