import React, {Component} from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Reservation from "./Reservation";
import "./App.css";

const menuItems = [
  {
    name: "That's a Rack!",
    description: "text here",
    price: "$19.95"
  },
  {
    name: "Rack Jr.",
    description: "text here",
    price: "$12.95"
  },
  {
    name: "Pulled Pork",
    description: "text here",
    price: "$10.95"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Navbar />
        <Menu menuItems={menuItems} />
        <Reservation />
      </div>
    );
  }
}

export default App;
