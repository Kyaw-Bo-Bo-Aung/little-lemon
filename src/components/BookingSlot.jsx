import React from "react";

const BookingSlot = ({ time, status }) => {
  return (
    <button className={`booking-slot ${status}`} disabled={status === "unavailable"}>
      {time}
    </button>
  );
};

export default BookingSlot;
