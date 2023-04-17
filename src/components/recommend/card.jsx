import React from "react";
import {
  Wrapper,
  ImgWrap,
  ImageUser,
  Textwrap,
  Feature,
  Sale,
  Title,
  Disc,
  IconsWrap,
  IconWrap,
  Bath,
  Bed,
  Squar,
  Garage,
  OldPrice,
  Price,
  ButtonIcons,
  ResizeIcon,
  HeartIcon,
} from "./card-style.js";
class Card extends React.Component {
  render() {
    const data = this.props;

    return (
      <Wrapper>
        <ImgWrap>
          <Feature>Featured</Feature>
          <Sale>For Sale</Sale>
          <img className="card-img" src={data.imgUrl} alt="Photo" />
          <ImageUser src={data.userImg} alt="user img" />
        </ImgWrap>
        <Textwrap>
          <Title>{data.title}</Title>
          <Disc>{data.location}</Disc>
          <IconsWrap className="flexCentre">
            <IconWrap>
              <Bed />
              {data.bed} Beds
            </IconWrap>
            <IconWrap>
              <Bath />
              {data.bath} Baths
            </IconWrap>
            <IconWrap>
              <Garage />
              {data.g} Garage
            </IconWrap>
            <IconWrap>
              <Squar />
              {data.s} Sq St
            </IconWrap>
          </IconsWrap>
          <hr />
          <div className="card-price-wrap">
            <OldPrice className="old-price">$2,800/mo</OldPrice>
            <Price className="card-price">{data.price}</Price>
          </div>
          <ButtonIcons>
            <ResizeIcon />
            <HeartIcon />
          </ButtonIcons>
        </Textwrap>
      </Wrapper>
    );
  }
}

export default Card;
