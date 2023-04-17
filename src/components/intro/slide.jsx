import React from "react";
import "./intro";
import "../../../src/index.css";
import {
  Image,
  Wrapper,
  Title,
  MinTitle,
  Price,
  Text,
  Button,
  WrapIcon,
  IconBath,
  IconBed,
  IconGarage,
  IconSquar,
} from "./intro-style";
class Slides extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper className="flexCentre">
        <Image src={data.background} />
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
        <WrapIcon>
          <div className="icon-wrap">
            <IconBed />
            <Text>{data.bed} Beds</Text>
          </div>
          <div className="icon-wrap">
            <IconBath />
            <Text>{data.bath} Baths</Text>
          </div>
          <div className="icon-wrap">
            <IconGarage />
            <Text>{data.g} Garage</Text>
          </div>
          <div className="icon-wrap">
            <IconSquar />
            <Text>{data.s} Sq Ft</Text>
          </div>
        </WrapIcon>
        <Price>${data.price}/mo</Price>
        <Button>Read more</Button>
      </Wrapper>
    );
  }
}

export default Slides;
