
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, MapPin, Clock } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  useEffect(() => {
    document.title = 'Upcoming Events - EXPRESS';
  }, []);

  const events = [
    {
      id: 1,
      title: "Public Speaking Workshop",
      date: "March 15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Main Auditorium",
      description: "Learn essential public speaking techniques from industry professionals. This workshop focuses on confidence building and structuring impactful speeches."
    },
    {
      id: 2,
      title: "Debate Championship",
      date: "April 2, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall B",
      description: "Annual debate championship with teams from across the region. The theme this year is 'Technology and Ethics in the Modern World'."
    },
    {
      id: 3,
      title: "Speech Contest",
      date: "April 18, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "Central Theater",
      description: "Present your best 5-minute speech on any topic of your choice. Prizes for the top three performances."
    }
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center">
            Upcoming Events
          </h1>
          
          <div className="space-y-8 mt-12">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">{event.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-express-purple" size={18} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 text-express-purple" size={18} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-express-purple" size={18} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{event.description}</p>
                <button className="mt-4 express-button text-xs">
                  REGISTER NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
