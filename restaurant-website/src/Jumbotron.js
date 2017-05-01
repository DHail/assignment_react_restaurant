import React from "react";

const jumbotronWhite = {
  color: 'white',
  'font-weight': 900
};

const Jumbotron = () => {
  return (
    <div className="jumbotron innerContainer" style={jumbotronWhite}>
      <h1>Beyonce's BabyBack Ribs</h1>
      <p>Get you some.</p>

    </div>
  );
};

export default Jumbotron;
