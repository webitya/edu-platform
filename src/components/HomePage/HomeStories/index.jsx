import React from "react";
import { FaRegClock } from "react-icons/fa";

const HomeRecentStories = () => {
  const recentStories = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s", // Replace with your actual image URL
      date: "May 22, 2025",
      title: "About Law Learning Bench",
      description:
        "India’s premier advocacy skill development platform offering practical legal training, mentorship, and access to real-world courtroom expertise.",
      link: "https://www.lawlearningbench.com/about",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s", // Replace with your actual image URL
      date: "June 15, 2025",
      title: "Courtroom Advocacy Mastery Program",
      description:
        "A 12-week, practice-based certification designed to equip law students and young advocates with persuasive advocacy, drafting, and litigation skills.",
      link: "https://www.lawlearningbench.com/advocacy-program",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfGhGiDwfCXg3iwahhvQ-7S2tSRvdXSxEiA&s", // Replace with your actual image URL
      date: "May 2025",
      title: "Our Esteemed Advisory Board",
      description:
        "Guided by former Chief Justices and Senior Advocates, our board brings a wealth of experience and vision to mentor the next generation of legal professionals.",
      link: "https://www.lawlearningbench.com/advisory-board",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">RECENT STORIES</h2>
        <p className="text-gray-600 mb-10">
          Explore our latest initiatives and updates at Law Learning Bench.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recentStories.map((story) => (
            <div key={story.id} className="text-left">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover mb-4 rounded shadow-sm"
              />
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <FaRegClock className="mr-2" />
                {story.date}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{story.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{story.description}</p>
              <a
                href={story.link}
                className="text-black font-semibold text-sm hover:text-yellow-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecentStories;
