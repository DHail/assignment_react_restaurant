import React from "react";

const Menu = ({menuItems}) => {
  const items = menuItems.map(item => (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  ));

  return (
    <div className="container">
      <hr />
      <h2>Menu</h2>
      {items}
      <hr />
    </div>
  );
};

export default Menu;
