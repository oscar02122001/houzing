import React from "react";
import { Container, Title, Discription } from "./category.js";
import Slides from "../intro/slide.jsx";
import { Slider, Next, Prev } from "../intro/intro-style";

export default class Category extends React.Component {
  render() {
    return (
      <Container className="container flexCentre">
        <Title>Category</Title>
        <Discription>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Discription>
        <Slider>
          <Next />
          <Prev />
        </Slider>
      </Container>
    );
  }
}
