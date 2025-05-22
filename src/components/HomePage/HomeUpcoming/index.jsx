import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  {
    id: 1,
    date: '12',
    month: 'JUNE',
    title: 'Legal Drafting & Moot Court Bootcamp',
    time: '10:00 AM - 1:00 PM',
    location: 'Online (Google Meet)',
    description:
      'Learn essential legal drafting skills and how to present arguments in moot court competitions. Ideal for law students & early professionals.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    ticketLink: '#',
  },
  {
    id: 2,
    date: '18',
    month: 'JUNE',
    title: 'Understanding IPC, CrPC & Evidence Law',
    time: '3:00 PM - 6:00 PM',
    location: 'Delhi Law Centre Auditorium',
    description:
      'An in-depth seminar on the Indian Penal Code, Criminal Procedure Code, and Indian Evidence Act, explained by senior advocates and legal scholars.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    ticketLink: '#',
  },
  {
    id: 3,
    date: '24',
    month: 'JUNE',
    title: 'Career in Corporate Law: Internship to Job',
    time: '5:30 PM - 7:00 PM',
    location: 'Zoom Webinar',
    description:
      'Explore the roadmap to landing top internships and job offers in corporate law firms. Includes Q&A with law firm partners.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    ticketLink: '#',
  },
];


const EventCard = ({ event }) => (
  <div className="border border-dashed border-gray-300 p-6 rounded-lg bg-white flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition">
    <div className="flex flex-col items-center justify-between space-y-2">
      <div className="bg-yellow-500 text-white font-bold text-2xl px-6 py-3 rounded">
        {event.date}
      </div>
      <div className="bg-blue-900 text-white text-sm font-semibold px-4 py-1 rounded">
        {event.month}
      </div>
      <a
        href={event.ticketLink}
        className="bg-yellow-500 text-white font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-600 transition"
      >
        BOOK SEAT
      </a>
    </div>

    <div className="flex-1">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
        <span className="flex items-center gap-1">
          <FaClock className="text-yellow-500" /> {event.time}
        </span>
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-yellow-500" /> {event.location}
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
    </div>

    <img
      src={event.image}
      alt={`Event titled "${event.title}"`}
      className="w-48 h-36 object-cover rounded shadow-md hidden md:block"
    />
  </div>
);

const HomeUpcomingEvents = () => {
  return (
    <section className="py-14 px-4 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase text-gray-800">Upcoming Events</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Stay updated with our upcoming legal workshops, training sessions, and live webinars. Seats fill fast—don’t miss out!
        </p>
      </div>
      <div className="space-y-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default HomeUpcomingEvents;
