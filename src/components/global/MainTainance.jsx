import React from 'react';
import { FiTool, FiMail } from 'react-icons/fi';

const MaintenancePage = () => {
  return (
 <>
 
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white px-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10 max-w-md text-center shadow-lg">
        <FiTool className="mx-auto text-6xl mb-6 animate-pulse text-yellow-400" />
        <h1 className="text-4xl  text-gray-800 font-extrabold mb-4 tracking-wide">We'll be back soon!</h1>
        <p className="mb-6 text-lg text-gray-800">
          Sorry for the inconvenience — we're performing some maintenance at the moment. 
          We'll be back online shortly!
        </p>
        <div className="flex items-center justify-center space-x-2 text-yellow-300">
          <FiMail className="text-2xl" />
          <a
            href="mailto:support@example.com"
            className="underline hover:text-yellow-400 transition"
          >
            Contact Support
          </a>
          <br></br>
          <a href='/'>
            <button className='bg-blue-500 text-white'>
                GO TO HOME PAGE
            </button>
          </a>
        </div>
        

      </div>
      <footer className="mt-12 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
    
 </>
  );
};

export default MaintenancePage;
