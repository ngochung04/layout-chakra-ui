import Slider from "react-slick";
import "react-multi-carousel/lib/styles.css";
import CardItem from "./CardItem";
import { FC } from "react";
import { Item } from "../models/CardItem";

interface Props {
  data: Item[];
}

const SlickSlider: FC<Props> = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-3">
      {data.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
      
    </Slider>
    
  );
};

export default SlickSlider;
