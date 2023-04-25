import React from "react";
import ServiceCard from "./service-card";
import Sms from "./imgs/sms.svg";
import Home from "./imgs/home.svg";
import Phone from "./imgs/phone.svg";
import Map from "./imgs/map.svg";
import {
  Container,
  Wrapper,
  Title,
  Discription,
  CardsContainer,
  CardsWrap,
} from "./style-choose";

class Chose extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper className="container chose-wrap flexCentre">
          <Title>Why Choose Us?</Title>
          <Discription className="top-disc">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </Discription>
          <CardsContainer>
            <CardsWrap>
              <ServiceCard
                img={Sms}
                title="Trusted By Thousands"
                disc="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
              />
            </CardsWrap>
            <CardsWrap>
              <ServiceCard
                img={Home}
                title="Wide Renge Of Properties"
                disc="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
              />
            </CardsWrap>
            <CardsWrap>
              <ServiceCard
                img={Phone}
                title="Financing Made Easy"
                disc="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
              />
            </CardsWrap>
            <CardsWrap>
              <ServiceCard
                img={Map}
                title="See Neighborhoods"
                disc="With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home."
              />
            </CardsWrap>
          </CardsContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Chose;
