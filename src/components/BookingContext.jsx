import React, { createContext, useContext, useState } from 'react';

// Create the context
const BookingContext = createContext();

// Custom hook for easy access to the context
export const useBooking = () => useContext(BookingContext);

// Context provider component
export const BookingProvider = ({ children }) => {
  const [label, setLabel] = useState("Select Buildings");
  const [subLabel, setSubLabel] = useState("-");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <BookingContext.Provider
      value={{
        label,
        subLabel,
        setLabel,
        setSubLabel,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
