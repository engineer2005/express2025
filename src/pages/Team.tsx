
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Team - eXpress';
  }, []);

  // Core team
  const chairperson = {
    name: "Aniket Prasad",
    role: "Chairperson",
    image: "public/lovable-uploads/32ed3402-7bd7-49d2-8d27-cd73473fac46.png", // Aniket image
  };
  
  const viceChairpersons = [
    {
      name: "Kevin Savla",
      role: "Vice Chairperson",
      image: "public/lovable-uploads/a85a5c3b-68fb-4813-8b61-fcd569c6c074.png", // Kevin image
    },
    {
      name: "Kriish Chheda",
      role: "Vice Chairperson",
      image: "public/lovable-uploads/ce616e54-7ce1-4952-9fa7-0946d8556615.png", // Kriish image
    }
  ];
  
  // Departments
  const departments = [
    {
      name: "Treasurer",
      members: [
        { name: "Devanshi Shah", role: "Treasurer", image: "public/lovable-uploads/f5505576-529f-45c5-b28e-9a6351ca213a.png" } // Devanshi image
      ]
    },
    {
      name: "Secretaries",
      members: [
        { name: "Neeraja Shah", role: "Secretary", image: "public/lovable-uploads/e565983b-b02e-4d72-9882-de3ad8c01b13.png" }, // Neeraja image
        { name: "Harshil Raval", role: "Secretary", image: "public/lovable-uploads/936c80f5-b8a7-4e1f-b6d7-bb87d8237ba0.png" } // Harshil image
      ]
    },
    {
      name: "Events",
      members: [
        { name: "Ananya Patel", role: "Events Head", image: "public/lovable-uploads/9b940661-2387-4886-9524-a60ac9df112a.png" }, // Ananya image
        { name: "Rushabh Shah", role: "Events Head", image: "public/lovable-uploads/3413d3c5-621f-41b1-aaa0-fe601aa47bc6.png" } // Rushabh image
      ]
    },
    {
      name: "Publicity",
      members: [
        { name: "Harshil Bhanushali", role: "Publicity Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" },
        { name: "Chhavi Rathod", role: "Publicity Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Creatives",
      members: [
        { name: "Disha Shetty", role: "Creatives Head", image: "public/lovable-uploads/0b0d5dd9-9dfe-4a61-bbb5-0979d1a53df7.png" }, // Disha image
        { name: "Shalmalee Thakur", role: "Creatives Head", image: "public/lovable-uploads/8326593d-8aac-416d-8991-3559955179d2.png" } // Shalmalee image
      ]
    },
    {
      name: "Operations",
      members: [
        { name: "Anmol Santwani", role: "Operations Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" },
        { name: "Dhruv Singhania", role: "Operations Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Marketing",
      members: [
        { name: "Dhairya Dharod", role: "Marketing Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" },
        { name: "Atharva Kismatrao", role: "Marketing Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Journalism",
      members: [
        { name: "Ibrahim Kothari", role: "Journalism Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" },
        { name: "Jash Sheth", role: "Journalism Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Editorial",
      members: [
        { name: "Hardik lyer", role: "Editorial Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Technical",
      members: [
        { name: "Pearl Mody", role: "Technical Head", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    },
    {
      name: "Production",
      members: [
        { name: "Krishna Naudiyal", role: "Production Head", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" }
      ]
    }
  ];

  // Member card component - removed social media icons
  const MemberCard = ({ member }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10 group">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-express-purple/50 group-hover:border-express-purple transition-all">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-playfair font-semibold text-white">{member.name}</h3>
      <p className="text-express-purple mt-1">{member.role}</p>
    </div>
  );

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center font-playfair">
            Our Team
          </h1>
          
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Meet our dedicated team of public speaking and debate enthusiasts who work tirelessly to organize events and workshops for our community.
          </p>
          
          {/* Chairperson */}
          <div className="mb-16">
            <h2 className="text-center text-2xl font-playfair text-express-light mb-6">Leadership</h2>
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-xs">
                <MemberCard member={chairperson} />
              </div>
            </div>
            
            {/* Vice Chairpersons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {viceChairpersons.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
          
          {/* Department Heads */}
          {departments.map((dept, index) => (
            <div className="mb-16" key={index}>
              <h2 className="text-center text-2xl font-playfair text-express-light mb-6">{dept.name}</h2>
              <div className={`grid grid-cols-1 ${dept.members.length > 1 ? 'md:grid-cols-2' : ''} gap-8 max-w-2xl mx-auto`}>
                {dept.members.map((member, memberIndex) => (
                  <MemberCard key={memberIndex} member={member} />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12 bg-black/30 p-6 rounded-lg border border-express-purple/20">
            <h3 className="text-xl font-playfair text-express-purple mb-2">Want to share your team photos?</h3>
            <p className="text-gray-300">Please email your team photos to <span className="text-express-light">express@djsce.ac.in</span> with the subject line "Team Photos".</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
