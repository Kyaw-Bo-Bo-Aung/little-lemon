import React, { useEffect, useReducer } from "react";
import BookingForm from "./components/BookingForm";
import BookingSlot from "./components/BookingSlot";
import { Slide, toast, ToastContainer } from "react-toastify";
import BookingSuccess from "./components/BookingSuccess";

const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const generateRandomTimes = () => {
  const allTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const randomCount = Math.floor(Math.random() * allTimes.length) + 1;
  const availableTimes = allTimes
    .sort(() => 0.5 - Math.random())
    .slice(0, randomCount);
  const unavailableTimes = allTimes.filter(
    (time) => !availableTimes.includes(time)
  );
  return { availableTimes, unavailableTimes };
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      const { availableTimes, unavailableTimes } = generateRandomTimes();
      return { ...state, date: action.date, availableTimes, unavailableTimes };
    case "FORM_SUBMITTED":
      return { ...state, submitSuccessful: true, formData: action.payload };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [state, dispatch] = useReducer(bookingReducer, {
    date: "",
    availableTimes: [],
    unavailableTimes: [],
    submitSuccessful: false,
    formData: {},
  });

  useEffect(() => {
    if (state.submitSuccessful) {
      toast.success("Your booking is successful!");
    }
  }, [state.submitSuccessful]);

  return (
    <div className="root">
      {state.submitSuccessful ? <BookingSuccess reservation={state.formData} /> : <div className="booking-container">
        <h2>Reserve a Table</h2>
        <BookingForm
          availableTimes={state.availableTimes}
          onDateChange={(date) => dispatch({ type: "SET_DATE", date })}
          onSubmit={(formData) =>
            dispatch({ type: "FORM_SUBMITTED", payload: formData })
          }
        />
        <h3>Standard Reservation Time</h3>
        <div className="slots-container">
          {!state.date &&
            defaultTimes.map((time) => (
              <BookingSlot key={time} time={time} status="default" />
            ))}
          {state.date &&
            state.availableTimes.map((time) => (
              <BookingSlot key={time} time={time} status="available" />
            ))}
          {state.date &&
            state.unavailableTimes.map((time) => (
              <BookingSlot key={time} time={time} status="unavailable" />
            ))}
        </div>
      </div>}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default BookingPage;
