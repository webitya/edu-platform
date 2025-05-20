import React from 'react';
// import studentImg from '../assets/student.png'; 

const HomeWelcomeSection = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-yellow-500">Unimax</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>We are creative.</li>
            <li>Provide best education services.</li>
            <li>We are always improving.</li>
          </ul>
          <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
            OUR COURSES
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="" alt="Student" className="max-w-sm w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HomeWelcomeSection;
