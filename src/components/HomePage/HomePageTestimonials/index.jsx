import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

// Dummy testimonials
const testimonials = [
  {
    name: "Jonathan Smith",
    company: "Wordpress Inc.",
    image: "/images/jonathan.jpg",
    review:
      "This should be used to tell a story and let your users know about your product or service.",
  },
  {
    name: "Angelina Rose",
    company: "Envato Inc.",
    image: "/images/angelina.jpg",
    review:
      "This should be used to tell a story and let your users know about your product or service.",
  },
  {
    name: "Michel Brown",
    company: "Google Inc.",
    image: "/images/michel.jpg",
    review:
      "This should be used to tell a story and let your users know about your product or service.",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">WHAT PEOPLE SAY</h2>
      <p className="text-gray-600 mb-10">
        Lorem Ipsum is simply dummy text of the printing and industry.
      </p>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              // Customize bullets with Tailwind classes inline
              return `
                <span class="${className} 
                  inline-block w-3 h-3 rounded-full 
                  bg-gray-300 opacity-100 
                  transition-colors duration-300
                  hover:bg-yellow-400
                  "></span>
              `;
            },
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 mx-2 rounded-lg shadow-md border bg-white hover:shadow-xl transition duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.company}</p>
                <p className="text-sm mt-4 mb-2 text-gray-700">{item.review}</p>
                <div className="flex justify-center gap-1 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        /* Active bullet override */
        .swiper-pagination-bullet-active {
          background-color: #ffc107 !important; /* yellow */
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
