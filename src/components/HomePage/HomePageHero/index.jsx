import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaLaptopCode, FaCertificate } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] mb-5 font-sans bg-black">
      {/* Carousel Background */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full text-white"
            >
              <FaChevronLeft size={20} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full text-white"
            >
              <FaChevronRight size={20} />
            </button>
          )
        }
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1350&q=80"
            alt="Courtroom Advocacy"
            className="object-cover h-[90vh] w-full"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1350&q=80"
            alt="Legal Education"
            className="object-cover h-[90vh] w-full"
          />
        </div>
      </Carousel>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 md:px-20 z-10">
        <p className="text-sm font-semibold uppercase">Join Us Today</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
          LAW LEARNING BENCH
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg">
          India’s Premier Advocacy Skill Development Platform — transforming legal knowledge into courtroom expertise.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded shadow">
            JOIN WITH US
          </button>
          <button className="bg-white hover:bg-gray-100 text-yellow-600 font-bold px-6 py-2 rounded shadow">
            OUR PROGRAMS
          </button>
        </div>
      </div>

      {/* Bottom Yellow Info Cards */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90vw] md:w-[70vw] grid grid-cols-1 sm:grid-cols-3 bg-yellow-500 text-white z-20 rounded-md overflow-hidden shadow-lg">
        <div className="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-yellow-400">
          <FaLaptopCode className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">Apply Online</h3>
            <p className="text-sm mt-1">Enroll in our Courtroom Advocacy Mastery Program launching June 15, 2025.</p>
            <a href="#" className="inline-block mt-2 underline text-sm">Start Application</a>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 border-b sm:border-b-0 sm:border-r border-yellow-400">
          <GiProgression className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">Download Prospectus</h3>
            <p className="text-sm mt-1">Get details on modules, schedule, and mentor lineup.</p>
            <a href="#" className="inline-block mt-2 underline text-sm">Download Now</a>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6">
          <FaCertificate className="text-4xl" />
          <div>
            <h3 className="text-lg font-bold">Explore Courses</h3>
            <p className="text-sm mt-1">From courtroom practice to legal drafting—find your path.</p>
            <a href="#" className="inline-block mt-2 underline text-sm">View Courses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
