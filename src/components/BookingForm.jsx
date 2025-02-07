import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const BookingForm = ({ availableTimes, onDateChange = () => {}, onSubmit }) => {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      date: "",
      time: "",
      guests: "1",
      occasion: "Birthday",
    },
  });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setValue("date", value);
    onDateChange(value);
  };

  const handleSubmitForm = (data, event) => {
    onSubmit(data);
  };

  return (
    <>
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="booking-form">
        <label htmlFor="date">Choose date</label>
        <input
          {...register("date", {
            required: { value: true, message: "Please select date." },
            onChange: handleDateChange,
          })}
          id="date"
          type="date"
          required
        />
        {errors.date && (
          <span className="error-msg">{errors.date.message}</span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          {...register("time", {
            required: { value: true, message: "Please select time." },
          })}
          required
        >
          <option>Select a time</option>
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time} (Available)
            </option>
          ))}
        </select>
        {errors.time && (
          <span className="error-msg">{errors.time.message}</span>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          {...register("guests", {
            required: { value: true, message: "Please fill guest field." },
            min: { value: 1, message: "Please choose at least 1 guest." },
            max: {
              value: 10,
              message: "Our guests limit is at most 10 people",
            },
            valueAsNumber: true,
          })}
        />
        {errors.guests && (
          <span className="error-msg">{errors.guests.message}</span>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          {...register("occasion", {
            required: { value: true, message: "Please select occasion." },
          })}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && (
          <span className="error-msg">{errors.occasion.message}</span>
        )}
        <input className="submit-btn" type="submit" value="Book" aria-label="On Click" />
      </form>
    </>
  );
};

export default BookingForm;
