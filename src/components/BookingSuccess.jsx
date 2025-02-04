import React from 'react'
import { Link } from 'react-router-dom';

const BookingSuccess = ({reservation}) => {
  return (
    <div className="success-card">
      <h2>🎉 Reservation Confirmed!</h2>
      <p><strong>Date:</strong> {reservation.date}</p>
      <p><strong>Time:</strong> {reservation.time}</p>
      <p><strong>Guests:</strong> {reservation.guests}</p>
      <p><strong>Occasion:</strong> {reservation.occasion}</p>
      <div><Link to="/"><button>Back To Home</button></Link></div>
    </div>
  );

}

export default BookingSuccess