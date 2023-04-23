import React from "react";
import { Container, Discription,HomeIcon} from "./style-choose";

export default class ServiceCard extends React.Component {
  render() {
    
    console.log(this.props);
    return <Container>
      {/* <img src={HomeIcon} alt="" />  */}
       <img src={this.props.imgg} alt="" />
    </Container>;
  }
}
