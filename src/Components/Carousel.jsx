import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/aws.png";
import image1 from "../assets/blender.png";
import image2 from "../assets/java.png";
import image3 from "../assets/view1.png";

const Carousel = ({ items, direction }) => {
  const settings = {
    infinite: true,
    speed: 5000, // adjust for scroll speed
    // slidesToShow: 4, // default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: direction === "right", // right direction for the second row
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 4, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768, // Small screens (phones)
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <div className="bg-white shadow-md rounded-lg flex items-center justify-center h-24 w-48">
            <img src={item} alt={item} className="max-h-12" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

const PlatformsCarousel = () => {
  const platformsRow1 = [image, image1, image2, image3];
  const platformsRow2 = [image, image1, image2, image3];

  return (
    <div className="py-12">
      <h2 className="text-center text-2xl font-bold mb-8">
        Platforms We Work With
      </h2>
      <div className="space-y-4">
        <Carousel items={platformsRow1} direction="left" />
        <Carousel items={platformsRow2} direction="right" />
      </div>
    </div>
  );
};

export default PlatformsCarousel;
