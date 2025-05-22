import React from 'react';
// import studentImg from '../assets/student.png'; 

const HomeWelcomeSection = () => {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-yellow-500">Law Learning Bench</span>
          </h2>
          <p className="text-gray-600 mb-4">
            We are India’s leading advocacy training platform committed to bridging the gap between legal education and real courtroom practice. At Law Learning Bench, we nurture the next generation of litigators with practical, skill-based legal training.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Mentorship from seasoned legal professionals.</li>
            <li>Hands-on modules in litigation, drafting & mooting.</li>
            <li>Focus on courtroom advocacy & real-life legal scenarios.</li>
          </ul>
          <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
            OUR COURSES
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s" 
            alt="Student learning law" 
            className="max-w-sm w-full object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default HomeWelcomeSection;
