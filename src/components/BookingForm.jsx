import React, { useState } from "react";

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    occasion: "Birthday",
  });
  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'guests' && !Number(value)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "date") {
      onDateChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time, guests, occasion } = formData;
    const errors = new Set();
    if(!date) {
      errors.add({
        field: "date",
        validations: [
          {
            rule: "required",
            message: "Date field is required."
          }
        ]
      })
    }
    if(!time) {
      errors.add({
        field: "time",
        validations: [
          {
            rule: "required",
            message: "Time field is required."
          }
        ]
      })
    }
    if(!guests) {
      errors.add({
        field: "guests",
        validations: [
          {
            rule: "required",
            message: "Date field is required."
          }
        ]
      })
    }
    if(!occasion) {
      errors.add({
        field: "occasion",
        validations: [
          {
            rule: "required",
            message: "Occasion field is required."
          }
        ]
      })
    }
    if(errors.size > 0) {
      setErrors(errors);
      return;
    }
    onSubmit(formData);
  };

  return (
    <>
    <h1>Book Now</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time} (Available)
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Book"
          className="submit-btn"
        />
      </form>
    </>
  );
};

export default BookingForm;
