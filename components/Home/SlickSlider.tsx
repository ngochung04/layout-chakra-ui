import Slider from "react-slick";
import CardItem from "./CardItem";
import { FC } from "react";
interface Data {
  name: string;
  description: string;
  method: string;
}

interface Item {
  id: number;
  name: string;
  content: string;
  image: string;
  percent: number;
  time: number;
  timeAgo: string;
  core: number;
  price: string;
  type: string;
  data: Data[];
}
interface Props {
  data: Item[];
  showIcon?: boolean;
}

const SlickSlider: FC<Props> = ({ data, showIcon }) => {
  const settings = {
    dots: false,
    infinite: false,
    
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
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
        <CardItem item={item} key={item.id} showIcon={showIcon} />
      ))}
    </Slider>
  );
};

export default SlickSlider;
