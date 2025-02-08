import React, {useState , useEffect} from 'react'
import { useBooking } from './BookingContext'
function Schedule() {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const { bookings } = useBooking(); // Assume bookings come from context
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

  useEffect(() => {
    const now = new Date();

    // Process mockData into the format needed for rendering
    const sortedBookings = mockData
      .filter((booking) => new Date(booking.startTime) > now) // Only future bookings
      .sort((a, b) => new Date(a.startTime) - new Date(b.startTime)) // Sort by start time
      .slice(0, 15) // Limit to 15 bookings
      .map((booking) => {
        // Transform the booking object into the desired format
        const startDate = new Date(booking.startTime);
        const endDate = new Date(booking.endTime);

        return {
          date: startDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
          start: startDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          end: endDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          title: booking.bookingName,
          building: booking.building,
          room: booking.room,
        };
      });

    setUpcomingBookings(sortedBookings);
  }, []);
  
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Upcoming Schedule</h1>
      <div className="max-h-[500px] overflow-y-auto rounded-lg">
        {upcomingBookings.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg shadow-sm mb-4">
            <div className="flex flex-col items-center bg-gray-200 rounded-lg px-3 py-2 text-center font-semibold">
              {item.date.includes(" ") && <span className="text-xl text-secondary">{item.date.split(" ")[1]}</span>}
              <span className="text-xl text-secondary">{item.date.split(" ")[0]}</span>
            </div>
            <div>
              <p className="text-sm font-semibold">
                {item.start} - {item.end}
              {item.title && <p className="text-secondary text-sm ">{item.title}</p>}
              <p className='text-gray-400'>{item.building}</p>
              <p className='text-gray-400'>{item.room}</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
