import React from "react";
import { Container, Image, Wrapper, Title, Button } from "./popular.js";
import Background from "./imgs/background.jpg";

export default class Popular extends React.Component {
  render() {
    return (
      <Container>
        <Image src={Background} />
        <Wrapper className="flexCentre">
          <Title>
            Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </Title>
          <Button>Read more</Button>
        </Wrapper>
      </Container>
    );
  }
}
