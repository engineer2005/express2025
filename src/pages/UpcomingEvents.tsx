
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const UpcomingEvents: React.FC = () => {
  useEffect(() => {
    document.title = 'Upcoming Events - eXpress';
  }, []);

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center font-playfair">
            Upcoming Events
          </h1>
          
          <div className="space-y-8 mt-12">
            <div 
              className="bg-black/30 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-black/50 rounded-lg overflow-hidden h-64 mb-4">
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                      <img src="public/lovable-uploads/d1d52eab-5f8d-41ec-b5c2-cb078da55802.png" alt="The Big Bang Theory" className="object-cover w-full h-full" />
                      <img src="public/lovable-uploads/05a9ed0f-9b54-4019-9e1d-a0844be0c83f.png" alt="How I Met Your Mother" className="object-cover w-full h-full" />
                      <img src="public/lovable-uploads/3a4458fd-e2ff-4280-9c61-2e5e820a4e3f.png" alt="Modern Family" className="object-cover w-full h-full" />
                      <img src="public/lovable-uploads/ea914202-e33b-4485-9224-4785401b2584.png" alt="Friends" className="object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-semibold text-white font-playfair mb-4">The Pilot: Episode 1</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 mb-6">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-express-purple" size={18} />
                      <span>Coming Soon</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 text-express-purple" size={18} />
                      <span>TBD</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 text-express-purple" size={18} />
                      <span>To Be Announced</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Get ready for the ultimate sitcom experience! "The Pilot: Episode 1" brings the charm, humor, and wit of your favorite TV sitcoms to life. Whether you're a fan of Friends, Modern Family, The Office, or Brooklyn Nine-Nine, this event will celebrate the best of sitcom culture through interactive activities, trivia, and more.
                  </p>
                  
                  <p className="text-gray-300 mb-6">
                    Join us as we dive into the world of situational comedy and unleash your inner comedian. Participation is open to all students with a passion for humor and storytelling.
                  </p>
                  
                  <button className="express-button group">
                    <span>REGISTRATION COMING SOON</span>
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
