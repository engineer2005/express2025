
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import vcp from '../images/vcp.jpg'
import pm  from '../images/pm.jpg'
import p from '../images/p.jpg'
import p2 from '../images/p2.jpeg'
import p1 from '../images/harshil.jpg'
import c1 from '../images/c1.jpg'
import c2 from '../images/c2.jpg'
import s1 from '../images/s1.jpg'
import m1 from '../images/m1.jpg'
import m2 from '../images/m2.jpg'
import e1 from '../images/e1.jpg'
import e2 from '../images/e2.jpg'
import j1 from '../images/j1.jpg'
import o1 from '../images/o1 (1).jpg'
import o2 from '../images/o2.jpg'
import cp from '../images/cp.jpg'
import vcp2 from '../images/vcp2.jpg'
import ev1 from '../images/ev1.jpg'
import t from '../images/t.jpg'
import s2 from '../images/s2.jpg'
import j2 from '../images/j2.jpg'

import teacher from '../images/teacher.jpg' 

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Team - eXpress';
  }, []);

  // Faculty
  const faculty = {
    name: "Professor Ranjeet Puyed",
    role: "Faculty Advisor",
    image: teacher, 
  };

  // Core team
  const chairperson = {
    name: "Aniket Prasad",
    role: "Chairperson",
    image: cp, 
  };
  
  const viceChairpersons = [
    {
      name: "Kevin Savla",
      role: "Vice Chairperson",
      image: vcp, 
    },
    {
      name: "Kriish Chheda",
      role: "Vice Chairperson",
      image: vcp2, 
    }
  ];
  
  // Departments
  const departments = [
    {
      name: "Treasurer",
      members: [
        { name: "Devanshi Shah", role: "Treasurer", image: t } 
      ]
    },
    {
      name: "Secretaries",
      members: [
        { name: "Neeraja Shah", role: "Secretary", image: s2 }, 
        { name: "Harshil Raval", role: "Secretary", image: s1 } 
      ]
    },
    {
      name: "Events",
      members: [
        { name: "Ananya Patel", role: "Events Head", image: e2 }, 
        { name: "Rushabh Shah", role: "Events Head", image: ev1 } 
      ]
    },
    {
      name: "Publicity",
      members: [
        { name: "Harshil Bhanushali", role: "Publicity Head", image: p1 },
        { name: "Chhavi Rathod", role: "Publicity Head", image: p2 }
      ]
    },
    {
      name: "Creatives",
      members: [
        { name: "Disha Shetty", role: "Creatives Head", image: c2 }, 
        { name: "Shalmalee Thakur", role: "Creatives Head", image: c1 } 
      ]
    },
    {
      name: "Operations",
      members: [
        { name: "Anmol Santwani", role: "Operations Head", image: o2 },
        { name: "Dhruv Singhania", role: "Operations Head", image: o1 }
      ]
    },
    {
      name: "Marketing",
      members: [
        { name: "Dhairya Dharod", role: "Marketing Head", image: m1 },
        { name: "Atharva Kismatrao", role: "Marketing Head", image: m2 }
      ]
    },
    {
      name: "Journalism",
      members: [
        { name: "Ibrahim Kothari", role: "Journalism Head", image: j2 },
        { name: "Jash Sheth", role: "Journalism Head", image: j1 }
      ]
    },
    {
      name: "Editorial",
      members: [
        { name: "Hardik lyer", role: "Editorial Head", image: e1 }
      ]
    },
    {
      name: "Technical",
      members: [
        { name: "Pearl Mody", role: "Technical Head", image: pm }
      ]
    },
    {
      name: "Production",
      members: [
        { name: "Krishna Naudiyal", role: "Production Head", image: p }
      ]
    }
  ];

  // Faculty card component
  const FacultyCard = ({ member }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/20 group">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-express-purple/80 group-hover:border-express-purple transition-all">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-playfair font-semibold text-white mb-2">{member.name}</h3>
      <p className="text-express-purple mt-1 font-bold text-lg">{member.role}</p>
    </div>
  );

  // Member card component - increased size
  const MemberCard = ({ member }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10 group">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-express-purple/50 group-hover:border-express-purple transition-all">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-playfair font-semibold text-white">{member.name}</h3>
      <p className="text-express-purple mt-1 font-bold">{member.role}</p>
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
          
          {/* Faculty Advisor - New Section */}
          <div className="mb-16">
            <h2 className="text-center text-2xl md:text-3xl font-playfair font-bold text-express-light mb-8">Esteemed Faculty</h2>
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-md">
                <FacultyCard member={faculty} />
              </div>
            </div>
          </div>
          
          {/* Chairperson */}
          <div className="mb-16">
            <h2 className="text-center text-2xl font-playfair font-bold text-express-light mb-6">Leadership</h2>
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
              <h2 className="text-center text-2xl font-playfair font-bold text-express-light mb-6">{dept.name}</h2>
              <div className={`grid grid-cols-1 ${dept.members.length > 1 ? 'md:grid-cols-2' : ''} gap-8 max-w-2xl mx-auto`}>
                {dept.members.map((member, memberIndex) => (
                  <MemberCard key={memberIndex} member={member} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Team;
