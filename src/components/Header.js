import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img src='/assets/logo.jpg' />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservation</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
