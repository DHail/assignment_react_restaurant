import React from "react";

const Navbar = () => {
  return (
    <ul className="list-inline" id="navbar-custom">
      <li><a href="#" className="navbar-custom-links"><h4>Menu</h4></a></li>
      <li>
        <a href="#reservations" className="navbar-custom-links"><h4>Reservations</h4></a>
      </li>
    </ul>
  );
};

export default Navbar;
