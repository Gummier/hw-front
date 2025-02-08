import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PopupDetail from "./PopupDetail";
import axios from "axios";

const TimeTable = () => {
  const location = useLocation();
  const { selectedDate, building, room } = location.state || {};
  const [bookings, setBookings] = useState({});
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  console.log(building);
  const timeSlots = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00",
  ];
  const fetchBookings = async () => {
    try {
      const mockBookings = [
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
      ];
  
      const parsedDate = new Date(selectedDate);
      const selectedDateFormatted = parsedDate.toLocaleDateString("en-CA"); // Outputs in "yyyy-MM-dd" format

      // Filter bookings by date and room 
      const filteredBookings = mockBookings.filter((booking) => {
        const bookingDate = new Date(booking.startTime).toISOString().split("T")[0];
        return bookingDate === selectedDateFormatted && booking.room === room  && booking.building === building;

      });
      console.log(selectedDateFormatted)
      console.log(filteredBookings,"FILTER");
      // Map filtered bookings to time slots
      const mappedBookings = {};
      filteredBookings.forEach((booking) => {
        const startTime = new Date(booking.startTime).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // Use 24-hour time
        });
        mappedBookings[startTime] = {
          text: booking.bookingName,
          color: "bg-green-100",
          details: booking,
        };
      });
      console.log(mappedBookings,"MAPPED")
      setBookings(mappedBookings);
      // console.log("Mapped Bookings:", mappedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };
  useEffect(() => {
    console.log("Bookings updated:", bookings);
  }, [bookings]);

  useEffect(() => {
    if (selectedDate && building , room) {
      fetchBookings();
    } else {
      console.warn("Required data missing: selectedDate or building");
    }
  }, [selectedDate, building , room]);



  const fetchBookingDetail = async (bookingId) => { // TO POPUP DETIALS I SUSS
    try {
      // API CALL
      // const detailedInfo = await axios.get(`/api/bookings/${bookingId}`); 

      const mockData = [
        {
          bookingName: "Design Workshop",
          bookingDes: "oakdaskdoask daosdk aoskd aso kdasok doak dasok daosdkaos kdasodkaodk oaskdaoskdas kdaodkaso dkasodk asodk asodk asokd aoskdasodkasokasakd TY GG EZ PRO NO FAKE",
          repeatType: "Daily",
          startTime: "2025-02-11T14:00:00",
          endTime: "2025-02-11T15:00:00",
          building: "LX Building (10th Floor)",
          room: "Room 2",
          createdBy: "P'Game",
        },
      ]
      
      
      setSelectedBooking(mockData);
      setPopupOpen(true);
    } catch (error) {
      console.error("Error fetching booking details:", error.message);
    }
  };


  return (
    <div className="max-w-6xl mx-auto p-4 overflow-y-auto max-h-[500px] rounded-lg">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold">{selectedDate}</h2>
          <p>{building} - {room}</p>
        </div>
      </div>
      <table className="w-full border-collapse border-spacing-y-2">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border py-2">เวลา</th>
            <th className="border py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, index) => {
            const booking = bookings[time];
            return (
              <tr
                key={index}
                className="border bg-white"
                onClick={() => {
                  if (booking) {
                    setSelectedBooking(booking.details);
                    setPopupOpen(true);
                  }
                }}
              >
                <td className="border w-20 py-2 text-center">{time}</td>
                <td
                  className={`border px-4 py-2 ${booking ? "cursor-pointer hover:bg-blue-100" : ""} ${
                    booking?.color || ""
                  }`}
                >
                  {booking?.text || ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PopupDetail isOpen={isPopupOpen} bookingDetails={selectedBooking} onClose={() => setPopupOpen(false)} />
    </div>
  );
};

export default TimeTable;
