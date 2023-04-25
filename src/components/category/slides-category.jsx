// import { render } from "@testing-library/react";
import React from "react";
import { Wrapper, Image, Text, TextDisc } from "./category.js";

export default class Slides extends React.Component {
  render() {
    let { data } = this.props;
    return (
      <Wrapper>
        <Image src={data.background} />
        <Text>
          {this.props.icon}
          <TextDisc>{data.title}</TextDisc>
        </Text>
      </Wrapper>
    );
  }
}
