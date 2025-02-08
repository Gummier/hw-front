import React, {useEffect, useState } from 'react'
import MyCalendar from '../MyCalendar'
import Dropdown from '../Dropdown'
import Schedule from '../Schedule'
import { useNavigate } from 'react-router-dom'
import Banner from '../../assets/banner_sit_hw.png'
function Section() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/booking" , {state: {date , label , subLabel}})
    }
    useEffect(() => {
        updateDate()
    },[])
    const [date, setDate] = useState("");
    const [label, setLabel] = useState('Select Buildings');
    const [subLabel, setSubLabel] = useState('-');

    const updateDate = () => {
        const currentDate = window.MyCalendar.getDate();
        setDate(
          currentDate.toDate().toLocaleString("default", { month: "long", year: "numeric" })
        );
      };
      
      const goPrev = () => {
        window.MyCalendar.prev();
        updateDate();
      };
    
      const goNext = () => {
        window.MyCalendar.next();
        updateDate();
      };
  return (
    <section className='items-center min-h-screen bg-white'>
        <div className='bg-white h-28 items-center flex justify-between'  >
            <button className='mx-28' onClick={goPrev}>◀</button>
            <h1 className='text-primary text-4xl font-bold'>{date}</h1>
            <button className='mx-28' onClick={goNext}>▶</button>
        </div>
        <div className='h-[80vh] bg-gray-200'>
            <MyCalendar/>
            <div className='flex justify-center items-center'>
            <Dropdown items={[
                { label: "CB2", sub: ["Room 1","Room 2","Room 3"] },
                { label: "LX Building (10th Floor)", sub: ["Room 1","Room 2" , "Room 3"] },
                { label: "LX Building (11th Floor)", sub: ["Room 1","Room 2" , "Room 3"]},
                { label: "LX Building (12th Floor)", sub: ["Room 1","Room 2" , "Room 3"] },
                { label: "SIT Building (1st Floor)", sub: ["Room 1","Room 2" , "Room 3"] },
                { label: "SIT Building (3st Floor)", sub: ["Room 1","Room 2" , "Room 3"] },
                { label: "SIT Building (4st Floor)", sub: ["Room 1","Room 2" , "Room 3"] },
                ]} setLabel={setLabel}
                setSubLabel={setSubLabel}/>
            </div>
        </div>
        <div className='max-w-5xl bg-white mx-auto p-4'>
            <div className='flex justify-between items-center mb-4'> 
                <h1 className='font-black text-4xl'>Schedule</h1>
                
            </div>
            <Schedule/>
        </div>
    </section>
    )
}

export default Section
