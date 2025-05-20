import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  {
    id: 1,
    date: '15',
    month: 'JANUARY',
    title: 'How to start a blog site using wordpress.',
    time: '5:00 AM - 9:00 PM',
    location: 'INTER CONTINENTAL GARDEN, DHAKA.',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. The industry’s standard dummy text ever scramble.',
    image: '/images/event1.jpg', // Replace with your actual image path
    ticketLink: '#'
  },
    {
    id: 1,
    date: '15',
    month: 'JANUARY',
    title: 'How to start a blog site using wordpress.',
    time: '5:00 AM - 9:00 PM',
    location: 'INTER CONTINENTAL GARDEN, DHAKA.',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. The industry’s standard dummy text ever scramble.',
    image: '/images/event1.jpg', // Replace with your actual image path
    ticketLink: '#'
  },
  // Add more event objects as needed
];

const EventCard = ({ event }) => (
  <div className="border border-dashed border-gray-300 p-6 rounded-md bg-white flex flex-col md:flex-row gap-6 items-center">
    <div className="flex flex-col items-center justify-center">
      <div className="bg-yellow-500 text-white font-bold text-2xl px-6 py-4">
        {event.date}
      </div>
      <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-1">
        {event.month}
      </div>
      <a
        href={event.ticketLink}
        className="bg-yellow-500 text-white font-semibold text-sm mt-2 px-4 py-2 hover:bg-yellow-600 transition rounded"
      >
        PURCHASE TICKET
      </a>
    </div>

    <div className="flex-1">
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
        <span className="flex items-center gap-1">
          <FaClock className="text-yellow-500" /> {event.time}
        </span>
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-yellow-500" /> {event.location}
        </span>
      </div>
      <p className="text-gray-700">{event.description}</p>
    </div>

    <img
      src={event.image}
      alt="Event"
      className="w-48 h-auto object-cover rounded shadow-md hidden md:block"
    />
  </div>
);

const HomeUpcomingEvents = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase">Upcoming Events</h2>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
      </div>
      <div className="space-y-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default HomeUpcomingEvents;