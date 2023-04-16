import React from "react";
import "./recommend.css";
import Card from "./card";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

class Recommend extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="container intro-wrap">
          <h3 className="intro-title">Recommended</h3>
          <p className="intro-desc">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
          <div className="intro-cards">
            <Card
              title="New Apartment Nice Wiew"
              imgUrl={img1}
              location="Quincy St, Brooklyn, NY, USA"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl={img2}
              location="Quincy St, Brooklyn, NY, USA"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl={img3}
              location="Quincy St, Brooklyn, NY, USA"
              price="$7,500/mo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
