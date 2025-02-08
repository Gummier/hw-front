import React, { useRef, useEffect, useState } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./CustomCalendar.css";
import "../index.css";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useBooking } from './BookingContext';

const MyCalendar = () => {  
  const calendarRef = useRef(null);
  const navigate = useNavigate();
  const { label, subLabel } = useBooking();
  const buildingRef = useRef(label); // Create a ref for the building label
  const roomRef = useRef(subLabel); 
  

  useEffect(() => {
    buildingRef.current = label; // Update ref whenever label changes
    roomRef.current = subLabel;  // Update ref whenever subLabel changes
  }, [label, subLabel]);

  const handleClick = (selectedDate, building, room) => {
    navigate("/detail", {
       state: {
          selectedDate,
            building: buildingRef.current, // Use ref for the most up-to-date value
            room: roomRef.current,
    },
    });
  };
  const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1); // Set the month (0-indexed in JavaScript)
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  };
  useEffect(() => { 
    if (!calendarRef.current) {
      calendarRef.current = new Calendar("#calendar", {
        defaultView: "month",
        usageStatistics: false,
        isReadOnly: false,
        useDetailPopup: true,
      });

      calendarRef.current.on("selectDateTime", (event) => {
        const day = event.start.getDate();
        const month = event.start.getMonth();
        const year = event.start.getFullYear();
        const selectedDate = `${day} ${getMonthName(month+1)} ${year}`;
        setTimeout(() => {
          handleClick(selectedDate, label, subLabel); // Use latest values of label and subLabel
        }, 0);
        
        calendarRef.current.clearGridSelections();
      });

      calendarRef.current.createEvents([
        {
          id: "1",
          calendarId: "1",
          title: "Meeting with Team",
          start: new Date().toISOString(),
          end: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
          category: "time",
        },
      ]);

      window.MyCalendar = calendarRef.current;

      
    }
    
  }, []);


  return (
    <div>
      <div id="calendar" style={{ height: "600px"}} className="py-5 w-full max-w-5xl mx-auto px-4 md:px-8 "/>
    </div>
  );
};

export default MyCalendar;