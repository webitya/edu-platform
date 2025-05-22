import React from 'react';
import { FaUsers, FaHeart } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'Foundation of Advocacy',
    description: 'Learn the core principles and courtroom strategies every advocate must master.',
    author: 'Adv. Rishabh Kapoor',
    image: 'https://img.freepik.com/free-photo/young-man-writing-notebook-study-session_23-2149285403.jpg',
    price: '₹1499',
    link: '#',
  },
  {
    id: 2,
    title: 'Drafting & Pleading Workshop',
    description: 'Hands-on training in drafting legal notices, plaints, and written statements.',
    author: 'Adv. Mehak Arora',
    image: 'https://img.freepik.com/free-photo/young-man-writing-notebook-study-session_23-2149285403.jpg',
    price: '₹1999',
    link: '#',
  },
  {
    id: 3,
    title: 'Mock Trial & Moot Court Training',
    description: 'Participate in simulated trials to build courtroom confidence and advocacy skills.',
    author: 'Adv. Nikhil Sharma',
    image: 'https://img.freepik.com/free-photo/young-man-writing-notebook-study-session_23-2149285403.jpg',
    price: '₹2499',
    link: '#',
  },
  {
    id: 4,
    title: 'Legal Research & Judgment Analysis',
    description: 'Master legal research tools and techniques to interpret and analyze case law.',
    author: 'Dr. Renu Bhatia',
    image: 'https://img.freepik.com/free-photo/young-man-writing-notebook-study-session_23-2149285403.jpg',
    price: '₹1299',
    link: '#',
  },
];

const CourseCard = ({ course }) => (
  <a href={course.link} className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs hover:shadow-lg transition block">
    <div className="relative">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2 bg-green-600 text-white text-sm px-3 py-1 rounded">Book Now +</div>
      <div className="absolute bottom-2 left-2 bg-yellow-500 text-white text-sm px-2 py-1 rounded">{course.author}</div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
      <div className="flex justify-between text-gray-600 text-sm mb-2">
        <div className="flex items-center gap-1"><FaUsers /> 763</div>
        <div className="flex items-center gap-1"><FaHeart /> 205</div>
      </div>
      <div className="text-right text-red-600 font-bold">{course.price}</div>
    </div>
  </a>
);

const PopularCourses = () => (
  <div className="py-12 px-4 bg-gray-100 min-h-screen text-center">
    <h2 className="text-3xl font-bold mb-2 text-gray-800">POPULAR COURSES</h2>
    <p className="text-gray-600 mb-10">
      Explore our top-rated legal training modules designed for aspiring litigators and law students.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
);

export default PopularCourses;
