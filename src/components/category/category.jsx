import React from "react";
import {
  Container,
  Slide,
  Title,
  Discription,
  HouseIcon,
  ApartmentIcon,
  OfficeIcon,
  VillaIcon,
} from "./category.js";
import { Slider, Next, Prev } from "../intro/intro-style";
import Slides from "./slides-category";
import Homes from "./imgs/villa.jpg";
import Apartment from "./imgs/apartment.jpg";
import Villa from "./imgs/villa.jpg";
import Office from "./imgs/office.jpg";

export default class Category extends React.Component {
  render() {
    return (
      <Container className="container flexCentre">
        <Title>Category</Title>
        <Discription>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Discription>
        <Slider className="category_slider">
          <Next className="category-btn category-next" />
          <Prev className="category-btn category-prev" />
          <Slide>
            <Slides
              icon={<HouseIcon />}
              data={{ title: "House", background: Homes }}
            />
          </Slide>
          <Slide>
            <Slides
              icon={<ApartmentIcon />}
              data={{ title: "Apartment", background: Apartment }}
            />
          </Slide>
          <Slide>
            <Slides
              icon={<OfficeIcon />}
              data={{ title: "Office", background: Office }}
            />
          </Slide>
          <Slide>
            <Slides
              icon={<VillaIcon />}
              data={{ title: "Villa", background: Villa }}
            />
          </Slide>
        </Slider>
      </Container>
    );
  }
}
