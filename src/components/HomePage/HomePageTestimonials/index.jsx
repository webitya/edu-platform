import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Aman Raj",
    company: "Judiciary Aspirant",
    image: "https://i.ibb.co/yRfKP5f/male-avatar.jpg",
    review:
      "Law Learning Bench is the best online platform for Judiciary coaching. The mentors here simplify even the toughest legal concepts with great clarity.",
  },
  {
    name: "Priya Sharma",
    company: "Civil Judge (Jr Division)",
    image: "https://i.ibb.co/8BsdqZw/female-avatar.jpg",
    review:
      "The structure and syllabus coverage at Law Learning Bench helped me clear the exam in one attempt. Immense gratitude to the entire team!",
  },
  {
    name: "Ravi Kishore",
    company: "CLAT Aspirant",
    image: "https://i.ibb.co/yRfKP5f/male-avatar.jpg",
    review:
      "Their approach to legal aptitude and reasoning is unmatched. The mock tests and doubt sessions helped boost my confidence immensely.",
  },
  {
    name: "Sneha Das",
    company: "LLB Final Year Student",
    image: "https://i.ibb.co/8BsdqZw/female-avatar.jpg",
    review:
      "Not only Judiciary, but their content is also great for semester exams and internships. The mentors are really supportive and highly experienced.",
  },
  {
    name: "Vikram Singh",
    company: "Law Intern, Ranchi HC",
    image: "https://i.ibb.co/yRfKP5f/male-avatar.jpg",
    review:
      "Joining LLB was the best decision I made in my prep journey. They focus on conceptual understanding, not just mugging up laws.",
  },
  {
    name: "Anjali Mehta",
    company: "UP PCS-J Aspirant",
    image: "https://i.ibb.co/8BsdqZw/female-avatar.jpg",
    review:
      "Detailed lectures, regular practice, and honest feedback—LLB has it all. I recommend it to every serious law aspirant.",
  },
];

const getSlidesPerView = () => {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const timeoutRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragTranslateX = useRef(0);
  const sliderRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDragging) return;
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      const maxIndex = testimonials.length - slidesPerView;
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => resetTimeout();
  }, [currentIndex, slidesPerView, isDragging]);

  const slideWidthPercentage = 100 / slidesPerView;
  const dotsCount = testimonials.length - slidesPerView + 1;

  const onPointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX || e.touches?.[0]?.clientX || 0;
    dragTranslateX.current = 0;
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.cursor = "grabbing";
    }
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
    dragTranslateX.current = currentX - dragStartX.current;

    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const translatePercent = (dragTranslateX.current / containerWidth) * 100;
      const baseTranslate = currentIndex * (100 / testimonials.length);
      sliderRef.current.style.transform = `translateX(calc(-${baseTranslate}% + ${translatePercent}%))`;
    }
  };

  const onPointerUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.cursor = "grab";
    }

    const containerWidth = sliderRef.current?.offsetWidth || 1;
    const dragPercent = (dragTranslateX.current / containerWidth) * 100;
    const threshold = 20;

    if (dragPercent > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      dragPercent < -threshold &&
      currentIndex < testimonials.length - slidesPerView
    ) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (sliderRef.current) {
        const baseTranslate = currentIndex * (100 / testimonials.length);
        sliderRef.current.style.transform = `translateX(-${baseTranslate}%)`;
      }
    }
  };

  return (
    <section className="py-16 bg-white text-center max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2">Student Experiences</h2>
      <p className="text-gray-600 mb-10">
        Hear what our successful candidates and learners have to say about their journey with Law Learning Bench.
      </p>

      <div className="overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out cursor-grab select-none"
          style={{
            width: `${(testimonials.length * 100) / slidesPerView}%`,
            transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUpOrLeave}
          onPointerCancel={onPointerUpOrLeave}
          onPointerLeave={onPointerUpOrLeave}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={onPointerUpOrLeave}
          onTouchCancel={onPointerUpOrLeave}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{ width: `${slideWidthPercentage}%` }}
              className="p-6 mx-2 rounded-lg bg-white shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
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
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === i ? "bg-yellow-400" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
