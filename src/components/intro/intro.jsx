import React from "react";
import "./style";
// import "../../../src/index.css";
import background from "./skyper.jpg";
import { Container, Slider, Next, Prev } from "./style";
import Slides from "./slide";

class Intro extends React.Component {
  render() {
    return (
      <Container className="flexCentre">
        <Slider className="flexCentre">
          <Next />
          <Prev />
          <Slides
            data={{
              background: background,
              title: "Skyper Pool Partment",
              text: "112 Glenwood Ave Hyde Park, Boston, MA",
              bed: 4,
              bath: 5,
              g: 1,
              s: 1200,
              price:5.250,
            }}
          />
        </Slider>
      </Container>
    );
  }
}

export default Intro;
