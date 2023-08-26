import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";

const items = [
  {
    src: require("../assets/imagenes/obra1.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra2.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra.jpg"),
    altText: "",
    caption: "",
  },
  {
    src: require("../assets/imagenes/obra4.jpg"),
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
              style={{ objectFit: "cover", width: "100%", height: "50vh" }}
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
