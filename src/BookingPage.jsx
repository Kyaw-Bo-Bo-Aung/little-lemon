import React, { useEffect, useReducer } from "react";
import BookingForm from "./components/BookingForm";
import BookingSlot from "./components/BookingSlot";
import { Slide, toast, ToastContainer } from "react-toastify";
import BookingSuccess from "./components/BookingSuccess";
import { fetchAPI, submitAPI } from "./utils/fakeApi";

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      const availableTimes = fetchAPI(new Date(action.date));
      return { ...state, date: action.date, availableTimes };
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
        <BookingForm
          availableTimes={state.availableTimes}
          onDateChange={(date) => dispatch({ type: "SET_DATE", date })}
          onSubmit={(formData) => {
            const submit = submitAPI(formData);
            if(submit) {
              dispatch({ type: "FORM_SUBMITTED", payload: formData })
            }
          }
          }
        />
        <h3>Standard Reservation Time</h3>
        <div className="slots-container">
          {state.date &&
            state.availableTimes.map((time) => (
              <BookingSlot key={time} time={time} status="available" />
            ))}
          {/* {state.date &&
            state.unavailableTimes.map((time) => (
              <BookingSlot key={time} time={time} status="unavailable" />
            ))} */}
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
