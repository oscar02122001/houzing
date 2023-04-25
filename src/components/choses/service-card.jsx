import React from "react";
import { Container, Discription, CardTitle } from "./style-choose";

export default class ServiceCard extends React.Component {
  render() {
    let data = this.props;
    return (
      <div>
        <img src={data.img} alt="" />
        <CardTitle>{data.title}</CardTitle>
        <Discription>{data.disc}</Discription>
      </div>
    );
  }
}
