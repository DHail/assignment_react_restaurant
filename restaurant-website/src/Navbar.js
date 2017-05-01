import React from "react";

const Navbar = () => {
  return (
    <ul className="list-inline" id="navbar-custom">
      <li><a href="#"><h4 className="navbar-custom-links">Menu</h4></a></li>
      <li>
        <a href="#"><h4 className="navbar-custom-links">Reservations</h4></a>
      </li>
    </ul>
  );
};

export default Navbar;
