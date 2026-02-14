
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
import arm from '../images/arm.jpg'
import hb from '../images/hb.jpg'
import e2 from '../images/e2.jpg'
import j1 from '../images/j1.jpg'
import o1 from '../images/o1.jpg'
import o2 from '../images/o2.jpg'
import cp from '../images/cp.jpg'
import vcp2 from '../images/vcp2.jpg'
import ev1 from '../images/ev1.jpg'
import t from '../images/t.jpg'
import s2 from '../images/s2.jpg'
import j2 from '../images/j2.jpg'
import mam from '../images/mam.jpeg'
import place from '../images/place.jpg'

import teacher from '../images/teacher.jpg' 
import { ZAxis } from 'recharts';

const Team: React.FC = () => {
  useEffect(() => {
    document.title = 'Team - eXpress';
  }, []);

  // Principal
  const principal = {
    name: "Dr. Hari Vasudevan",
    role: "Principal",
    image: "/lovable-uploads/9edbfab9-f2bb-4fc1-ba2a-3d5e35b6a7a3.png", 
  };

  // Faculty
  const faculty = {
    name: "Professor Ranjeet Puyed",
    role: "Faculty Advisor",
    image: teacher, 
  };

  // Core team
  const chairperson = {
    name: "Dhruv Thakur",
    role: "Chairperson",
    image: cp, 
  };
  
  const viceChairpersons = [
    {
      name: "Sakshi Gandhi",
      role: "Vice Chairperson",
      image: place, 
    },
    {
      name: "Vidit Thakkar",
      role: "Vice Chairperson",
      image: vcp2, 
    }
  ];
  
  // Departments
  const departments = [
    {
      name: "Treasurer",
      members: [
        { name: "Priyansh Dedhia", role: "Treasurer", image: t } 
      ]
    },
    {
      name: "Secretaries",
      members: [
        { name: "Anuja Dubbewar", role: "Secretary", image: s1 }, 
        { name: "Rudra Bhandari", role: "Secretary", image: s2 } 
      ]
    },
    {
      name: "Marketing",
      members: [
        { name: "Vedant Dighe", role: "Marketing Head", image: place },
        { name: "Mohit Kankaria", role: "Marketing Head", image: m2 }
      ]
    },
    {
      name: "Technical",
      members: [
        { name: "Lavish Jain", role: "Technical Head", image: place },
        { name: "Kyra Karkaria", role: "Technical Head", image: pm }
      ]
    },
    {
      name: "Public Relations",
      members: [
        { name: "Nandish Vyas ", role: "PR Head", image: place },
        { name: "Lavisha Boliya", role: "PR Head", image: place }
      ]
    },
    {
      name: "Production",
      members: [
        { name: "Maanvi Gupta", role: "Production Head", image: p },
        { name: "Mohammed Ali Memon", role: "Production Head", image: mam }
      ]
    },
    {
      name: "Creatives",
      members: [
        { name: "Sahana Nayak", role: "Creatives Head", image: place }, 
        { name: "Arushi Kumar", role: "Creatives Head", image: place } 
      ]
    },
    {
      name: "Logistics",
      members: [
        { name: "Raj Sawant", role: "Logistics Head", image: place },
        { name: "Mulraj Gala", role: "Logistics Head", image: o1 }
      ]
    },
    {
      name: "Events",
      members: [
        { name: "Anushka Dwivedi", role: "Events Head", image: place }, 
        { name: "Junisha Walecha", role: "Events Head", image: ev1 } 
      ]
    },
    {
      name: "Journalism",
      members: [
        { name: "Panini Shah", role: "Journalism Head", image: j2 },
        { name: "Suhani Gupta", role: "Journalism Head", image: j1 }
      ]
    },
    {
      name: "Editorial",
      members: [
        { name: "Heer Bhadra", role: "Editorial Head", image: hb}
      ]
    },
    {
      name: "Outreach",
      members: [
        { name: "Aryan Maurya", role: "Outreach Head", image: arm }
      ]
    },
    
  ];

  // Faculty card component - INCREASED SIZE
  const FacultyCard = ({ member }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/20 group">
      <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-express-purple/80 group-hover:border-express-purple transition-all">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-playfair font-semibold text-white mb-2">{member.name}</h3>
      <p className="text-custom-white mt-1 font-bold text-lg">{member.role}</p>
    </div>
  );

  // Member card component - INCREASED SIZE
  const MemberCard = ({ member }) => (
    <div className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10 group">
      <div className="w-44 h-44 rounded-full overflow-hidden mb-5 border-3 border-express-purple/50 group-hover:border-express-purple transition-all">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-playfair font-semibold text-white">{member.name==="Mohit Kankaria"&&(<span style={{color:'#000',userSelect:'all'}}>❤︎</span>)}{member.name}{member.name==="Mohit Kankaria"&&(<span style={{color:'#000',userSelect:'all'}}>❤︎</span>)}</h3>
      <p className="text-custom-white  mt-1 font-bold">{member.role}</p>
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
          
          {/* Principal Section */}
          <div className="mb-16">
            <h2 className="text-center text-2xl md:text-3xl font-playfair font-bold text-express-light mb-8">Principal</h2>
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-md">
                <FacultyCard member={principal} />
              </div>
            </div>
          </div>
          
          {/* Faculty Advisor Section */}
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
