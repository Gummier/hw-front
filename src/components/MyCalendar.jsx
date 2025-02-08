import React, { useRef, useEffect, useState } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./CustomCalendar.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useBooking } from './Bookings/BookingContext';
import axios from "axios";

const MyCalendar = () => {  
  const calendarRef = useRef(null);
  const navigate = useNavigate();
  const { label, subLabel } = useBooking();
  const buildingRef = useRef(label); // Create a ref for the building label
  const roomRef = useRef(subLabel); 
  

  useEffect(() => {
    fetchEvents();
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

  const fetchEvents = async () => {
    try {
      // Replace with your actual API endpoint
      // const response = await axios.get("/api/events", {
      //   params: {
      //     building: label,
      //     room: subLabel,
      //   },    //API BACKEND
      // });

  
      
      const mockData = [
        {
          bookingName: "Team Meeting",
          startTime: "2025-02-02T08:30:00",
          endTime: "2025-02-02T09:30:00",
          building: "LX Building (10th Floor)",
          room: "Room 1",
        },
        {
          bookingName: "Project Discussion",
          startTime: "2025-02-03T10:00:00",
          endTime: "2025-02-03T11:00:00",
          building: "LX Building (10th Floor)",
          room: "Room 2",
        },
        {
          bookingName: "Project Discussion",
          startTime: "2025-02-03T09:00:00",
          endTime: "2025-02-03T15:00:00",
          building: "LX Building (10th Floor)",
          room: "Room 2",
        },
        {
          bookingName: "Tester",
          startTime: "2025-02-11T08:30:00",
          endTime: "2025-02-11T09:30:00",
          building: "LX Building (10th Floor)",
          room: "Room 1",
        },
        {
          bookingName: "Project Discussion",
          startTime: "2025-02-11T10:00:00",
          endTime: "2025-02-11T11:00:00",
          building: "LX Building (10th Floor)",
          room: "Room 2",
        },
        {
          bookingName: "Design Workshop",
          startTime: "2025-02-11T14:00:00",
          endTime: "2025-02-11T15:00:00",
          building: "LX Building (10th Floor)",
          room: "Room 2",
        },
      ]
      const filteredEvents = mockData.filter(
        (event) => event.building === label && event.room === subLabel
      );

      const events = filteredEvents.map((event) => ({
        id: event.bookingId,
        calendarId: "1",
        title: event.bookingName,
        start: new Date(event.startTime).toISOString(),
        end: new Date(event.endTime).toISOString(),
        category: "time",
      }));

      // Clear existing events and add new ones
      calendarRef.current.clear();
      calendarRef.current.createEvents(events);
    } catch (error) {
      console.error("Failed to fetch events:", error.message);
    }
  };

  useEffect(() => { 
    if (!calendarRef.current) {
      calendarRef.current = new Calendar("#calendar", {
        defaultView: "month",
        usageStatistics: false,
        isReadOnly: false,
        useDetailPopup: false,
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

      

      window.MyCalendar = calendarRef.current;
      fetchEvents();
      
    }
    
  }, []);


  return (
    <div>
      <div id="calendar" style={{ height: "600px"}} className="py-5 w-full max-w-5xl mx-auto px-4 md:px-8 "/>
    </div>
  );
};

export default MyCalendar;