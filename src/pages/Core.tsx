
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Core: React.FC = () => {
  useEffect(() => {
    document.title = 'Core Team - EXPRESS';
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Chairperson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Jamie Chen",
      role: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Taylor Reed",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 4,
      name: "Jordan Smith",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 5,
      name: "Casey Johnson",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 6,
      name: "Riley Williams",
      role: "Media Relations",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    }
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center">
            Core Team
          </h1>
          
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Meet our dedicated team of public speaking and debate enthusiasts who work tirelessly to organize events and workshops for our community.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10 group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-express-purple/50 group-hover:border-express-purple transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-express-purple mt-1">{member.role}</p>
                
                <div className="flex space-x-3 mt-4">
                  <button className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors">
                    <Mail size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors">
                    <Twitter size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Core;
