import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    class: "",
    room: "",
    instructor: "",
    duration: "",
    beginTime: "",
    endTime: "",
    date: "",
    type: "",
    repeatEvery: "",
    repeatEndDate: "",
    createdBy: "",
    lastUpdated: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create booking");
      }

      const result = await response.json();
      console.log("Booking created successfully:", result);
      alert("Booking created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating booking!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block text-gray-700 font-medium">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={formData.class}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="room"
              placeholder="Room"
              value={formData.room}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={formData.instructor}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />

            {/* Begin Time Picker */}
            <div className="relative mt-2">
              <label className="block text-gray-700 font-medium">Begin</label>
              <input
                type="time"
                name="beginTime"
                value={formData.beginTime}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <label className="block text-gray-700 font-medium">
              Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
            />

            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="repeatEvery"
              placeholder="Repeat every"
              value={formData.repeatEvery}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="repeatEndDate"
              placeholder="Repeat end date"
              value={formData.repeatEndDate}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="createdBy"
              placeholder="Created by"
              value={formData.createdBy}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />
            <input
              type="text"
              name="lastUpdated"
              placeholder="Last updated"
              value={formData.lastUpdated}
              onChange={handleInputChange}
              className="w-full border rounded-md p-2 mt-2"
            />

            {/* End Time Picker */}
            <div className="relative mt-2">
              <label className="block text-gray-700 font-medium">End</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
