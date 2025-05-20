import React from 'react';
import { FaUsers, FaHeart } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'Basic Wordpress Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
    author: 'Devid Cameroon',
    image: 'https://via.placeholder.com/300x200',
    price: '$499',
    link: '#',
  },
  {
    id: 2,
    title: 'Mastering Php Language',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
    author: 'Donal Trump',
    image: 'https://via.placeholder.com/300x200',
    price: '$149',
    link: '#',
  },
  {
    id: 3,
    title: 'Javascript Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
    author: 'Jone Smith',
    image: 'https://via.placeholder.com/300x200',
    price: '$239',
    link: '#',
  },
  {
    id: 4,
    title: 'Frontend Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and industry.',
    author: 'Angelina Rose',
    image: 'https://via.placeholder.com/300x200',
    price: '$849',
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
    <h2 className="text-3xl font-bold mb-2 text-gray-800">POPULER COURSES</h2>
    <p className="text-gray-600 mb-10">Lorem Ipsum is simply dummy text of the printing and industry.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
);

export default PopularCourses;