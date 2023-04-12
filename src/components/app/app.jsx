import React from "react";
import "./app.css";
import Intro from "../intro/intro.jsx";
import Headerrr from "../header/header.jsx";
import ModalAdvanced from "../header/advanced";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Headerrr />
        <Intro />
        <ModalAdvanced />
      </div>
    );
  }
}

export default App;
