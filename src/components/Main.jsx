import React from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import BookingPage from "../BookingPage";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
