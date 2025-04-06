
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Calendar, MapPin, Clock, ExternalLink, Award, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpcomingEvents: React.FC = () => {
  useEffect(() => {
    document.title = 'Upcoming Events - eXpress';
  }, []);

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSel_E5va__3Yq7HGNJZANmqdLrX4_1KrWkqxli_-PnziHsR-Q/viewform', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/djsce.express', '_blank');
  };

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
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h2 className="text-3xl font-semibold text-white font-playfair">The Pilot: Episode 1</h2>
                    <div className="mt-2 sm:mt-0">
                      <span className="bg-express-purple text-white px-3 py-1 rounded-full text-sm font-bold">
                        FREE Registration
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 mb-6">
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-express-purple" size={18} />
                      <span>11th April 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 text-express-purple" size={18} />
                      <span>10:00 AM onwards</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 text-express-purple" size={18} />
                      <span>Seminar Hall, 3rd Floor</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    🌟 Join DJS eXpress's Inaugural Event: <span className="font-bold text-white">THE PILOT: EP 1</span> 🎬✨
                  </p>
                  
                  <p className="text-gray-300 mb-6">
                    Get ready to dive into the world of laughter, wit, and iconic moments as Teams of Two battle it out in an exciting sitcom-themed challenge! From classic quizzes and debates to fun parody games, this event is your chance to star in your very own pilot episode! 🎭📺 Get Ready for a sitcom extravaganza!
                  </p>
                  
                  <div className="bg-express-purple/20 rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Award className="mr-2" size={22} />
                      Prizes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg text-center">
                        <span className="text-lg font-bold text-express-light">1st Place</span>
                        <p className="text-white font-bold text-2xl">₹4,000</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg text-center">
                        <span className="text-lg font-bold text-express-light">2nd Place</span>
                        <p className="text-white font-bold text-2xl">₹2,500</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg text-center">
                        <span className="text-lg font-bold text-express-light">3rd Place</span>
                        <p className="text-white font-bold text-2xl">₹1,500</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="mr-2 text-express-purple" size={18} />
                        <span className="text-gray-300">Aniket Prasad: 9653344645</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 text-express-purple" size={18} />
                        <span className="text-gray-300">Kriish Chheda: 9167160832</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={handleRegister}
                      className="express-button group"
                    >
                      <span>REGISTER NOW</span>
                      <ExternalLink size={16} />
                    </Button>
                    
                    <Button 
                      onClick={handleInstagram}
                      variant="outline" 
                      className="border-express-purple/50 text-white hover:bg-express-purple/10"
                    >
                      <Instagram size={18} className="mr-2 text-express-purple" />
                      <span>Follow us on Instagram</span>
                    </Button>
                  </div>
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
