import React from "react";
import "./app.css";
import Recommend from "../recommend/recommend";
import Headerrr from "../header/header.jsx";
import Chose from "../choses/chose.jsx";
import Intro from "../intro/intro";
import Category from "../category/category.jsx";

class App extends React.Component {
  render() {
    return (
      <div className=" app">
        <Headerrr />
        <Intro />
        <Recommend />
        <Chose />
        <Category />
      </div>
    );
  }
}

export default App;
