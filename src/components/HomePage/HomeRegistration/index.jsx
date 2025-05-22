import React from 'react';

const HomeRegistrationSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/02/55/22/68/360_F_255226859_Rhqr5hflr2esVXHQE1sS1bWxmZxs0gWI.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        {/* Left Side */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-yellow-400 text-5xl font-bold">4,950+</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Students Registered</h2>
          <p className="text-md mt-4 font-medium leading-relaxed">
            Join thousands of law aspirants and legal professionals already enrolled in our expert-led online programs.
            Limited seats available—register now to unlock free access to top-rated legal courses!
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-md w-full">
          <div className="bg-yellow-500 text-center py-4 rounded-t-lg -mt-6 mb-6 shadow-md">
            <h3 className="text-xl font-bold text-white">FREE REGISTRATION</h3>
            <p className="text-white text-sm">Get access to premium law courses</p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition"
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeRegistrationSection;
