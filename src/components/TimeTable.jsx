import React from "react";

const TimeTable = ({ bookings }) => {



  const timeSlots = [
    "8:30", "9:00", "9:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
    "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
    "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00"
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-y-auto max-h-[500px] rounded-lg">
  <table className="w-full border-collapse border-spacing-y-2">
    <thead className="table-header-group">
      <tr className="bg-gray-100 text-center">
        <th className="border    py-2">เวลา</th>
        <th className="border py-2">Status</th>
      </tr>
    </thead>

    <tbody className="table-row-group">
      {timeSlots.map((time, index) => {
        const booking = bookings[time];
        return (
          <tr key={index} className="border bg-white">
            <td className="border w-20 py-2 text-center">{time}</td>
            <td className={`border px-4 py-2 ${booking?.color || ""}`}>
              {booking?.text || ""}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

  );
};

export default TimeTable;