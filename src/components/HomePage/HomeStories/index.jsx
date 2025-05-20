import React from "react";
import { FaRegClock } from "react-icons/fa";

const HomeRecentStories = () => {
  const recentStories = [
    {
      id: 1,
      image: "/images/story1.jpg",
      date: "January 01, 2018",
      title: "Standard gallery post",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/story2.jpg",
      date: "January 01, 2018",
      title: "Blog post with couple photos",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/story3.jpg",
      date: "January 01, 2018",
      title: "Standard gallery post",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">RECENT STORIES</h2>
        <p className="text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and industry.
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
