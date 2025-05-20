// components/HeroSection.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaLaptopCode, FaCertificate } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Carousel Background */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={5000}
      >
        <div>
          <img
            src="/images/bg1.jpg" // replace with your carousel images
            alt="slide1"
            className="object-cover h-[90vh] w-full"
          />
        </div>
        <div>
          <img
            src="/images/bg2.jpg"
            alt="slide2"
            className="object-cover h-[90vh] w-full"
          />
        </div>
      </Carousel>

      {/* Fixed Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40 px-4">
        <p className="text-sm font-semibold">Join Us Today</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">Better Education for World.</h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg">
          Help today because tomorrow you may be the one who needs helping!
          <br />
          Forget what you can get and see what you can give.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded">
            JOIN WITH US
          </button>
          <button className="bg-white hover:bg-gray-100 text-yellow-600 font-bold px-6 py-2 rounded">
            OUR CLASSES
          </button>
        </div>
      </div>

      {/* Bottom Feature Boxes */}
      <div className="absolute bottom-0 left-0 w-full bg-yellow-500 grid grid-cols-1 sm:grid-cols-3 text-white text-left z-10">
        <div className="p-6 flex gap-4 items-start">
          <FaLaptopCode className="text-4xl" />
          <div>
            <h3 className="font-bold text-lg">Apply Online</h3>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the ed industry.</p>
            <a href="#" className="text-white underline text-sm mt-2 inline-block">Learn More</a>
          </div>
        </div>
        <div className="p-6 flex gap-4 items-start">
          <GiProgression className="text-4xl" />
          <div>
            <h3 className="font-bold text-lg">Prospects</h3>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the ed industry.</p>
            <a href="#" className="text-white underline text-sm mt-2 inline-block">Learn More</a>
          </div>
        </div>
        <div className="p-6 flex gap-4 items-start">
          <FaCertificate className="text-4xl" />
          <div>
            <h3 className="font-bold text-lg">Certification</h3>
            <p className="text-sm">Lorem Ipsum is simply dummy text of the ed industry.</p>
            <a href="#" className="text-white underline text-sm mt-2 inline-block">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
