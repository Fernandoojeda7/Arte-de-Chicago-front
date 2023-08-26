import React from "react";
import { Carousel, Image } from "react-bootstrap";

const items = [
  {
    src: require("../assets/imagenes/obra7.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra6.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra5.jpg"),
    altText: "",
    caption: "",
  },
];

const Carrusel = () => {
  return (
    <Carousel>
      {items.map((item) => {
        return (
          <Carousel.Item key={item.src}>
            <Image
              src={item.src}
              alt={item.altText}
              style={{ width: "100%", height: "65vh" }}
            />
            <Carousel.Caption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Carrusel;
