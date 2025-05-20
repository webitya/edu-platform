import React from "react";
import Slider from "react-slick";

const logos = [
  { id: 1, src: "/logos/logo1.png", alt: "COCO" },
  { id: 2, src: "/logos/logo2.png", alt: "Autoom" },
  { id: 3, src: "/logos/logo3.png", alt: "RACLE" },
  { id: 4, src: "/logos/logo4.png", alt: "Crypto" },
  { id: 5, src: "/logos/logo5.png", alt: "Bitcoin" },
  { id: 6, src: "/logos/logo6.png", alt: "PayBit" },
];

const HomeBrandsLogoSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBrandsLogoSlider;
