import React from "react";
import "./style";
import "../../../src/index.css";
import background from "./skyper.jpg";

import {
  Container,
  Wrapper,
  Title,
  MinTitle,
  Text,
  Button,
  WrapIcon,
  IconBath,
  IconBed,
  IconGarage,
  IconSquar,
} from "./style";

class Intro extends React.Component {
  render() {
    return (
      <Container
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Wrapper className="container flexCentre">
          <Title>Skyper Pool Partment</Title>
          <Text>112 Glenwood Ave Hyde Park, Boston, MA</Text>
          <WrapIcon>
            <div>
              <IconBed />
              <Text>4 beds</Text>
            </div>
            <div>
              <IconBath />
              <Text>4 beds</Text>
            </div>
            <div>
              <IconGarage />
              <Text>4 beds</Text>
            </div>
            <div>
              <IconSquar />
              <Text>4 beds</Text>
            </div>
          </WrapIcon>
          <MinTitle>$5,250/mo</MinTitle>
          <Button>Read more</Button>
        </Wrapper>
      </Container>
    );
  }
}

export default Intro;
