import React from "react";
import ServiceCard from "./service-card";
import {
  Container,
  Title,
  Discription,
  CardsWrap,
  SmsIcon,
  HomeIcon,
  PhoneIcon,
} from "./style-choose";

class Chose extends React.Component {
  render() {
    return (
      <Container className="chose-wrap flexCentre">
        <Title>Why Choose Us?</Title>
        <Discription>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Discription>
        <CardsWrap>
          <ServiceCard imgg = {SmsIcon} />
          {/* <ServiceCard data={{ img: HomeIcon }} />
          <ServiceCard data={{ img: PhoneIcon }} /> */}
        </CardsWrap>
      </Container>
    );
  }
}

export default Chose;
