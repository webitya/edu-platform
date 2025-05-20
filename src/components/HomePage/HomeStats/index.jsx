import React from "react";
import { FaUserGraduate, FaBookOpen, FaBookmark, FaCrown } from "react-icons/fa";

const HomeStatsSection = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-yellow-400 text-4xl mb-2" />,
      value: "95",
      label: "Instructors",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-yellow-400 text-4xl mb-2" />,
      value: "549",
      label: "Online Courses",
    },
    {
      id: 3,
      icon: <FaBookmark className="text-yellow-400 text-4xl mb-2" />,
      value: "204",
      label: "Year of History",
    },
    {
      id: 4,
      icon: <FaCrown className="text-yellow-400 text-4xl mb-2" />,
      value: "4950",
      label: "Active Students",
    },
  ];

  return (
    <section
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/your-background-image.jpg')", // Replace with your actual path
      }}
    >
      <div className="bg-black bg-opacity-70 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white px-4">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-md font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStatsSection;
