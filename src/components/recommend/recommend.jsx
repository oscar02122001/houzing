import React from "react";
import "./recommend.css";
import Card from "./card";

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
              imgUrl="https://picsum.photos/id/391/220"
              location="Quincy St, Brooklyn, NY, USA"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl="https://picsum.photos/id/381/220"
              location="Quincy St, Brooklyn, NY, USA"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl="https://picsum.photos/id/551/220"
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
