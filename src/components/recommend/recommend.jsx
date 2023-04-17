import React from "react";
import "./recommend.css";
import Card from "./card";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import user1 from './img/user1.svg';
import user2 from "./img/user2.svg";
import user3 from "./img/user3.svg";


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
              userImg={user1}
              location="Quincy St, Brooklyn, NY, USA"
              bed="4"
              bath=" 5"
              g="1"
              s="1200"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl={img2}
              userImg={user2}
              location="Quincy St, Brooklyn, NY, USA"
              bed="4"
              bath="5"
              g="1"
              s="1200"
              price="$7,500/mo"
            />

            <Card
              title="New Apartment Nice Wiew"
              imgUrl={img3}
              userImg={user3}
              location="Quincy St, Brooklyn, NY, USA"
              bed="4"
              bath="5"
              g="1"
              s="1200"
              price="$7,500/mo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
