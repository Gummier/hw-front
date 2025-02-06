import React, { useRef, useEffect, useState } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "./CustomCalendar.css";
import "../index.css";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const MyCalendar = () => {
  const calendarRef = useRef(null);
  const navigate = useNavigate();
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
        const selectedDate = `${day}/${month + 1}/${year}`;
        navigate(`/detail`);

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