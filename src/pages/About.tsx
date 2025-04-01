
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - express';
  }, []);

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-8 text-center font-playfair">
            About Us
          </h1>
          
          <div className="space-y-12 mt-8">
            <section className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10">
              <h2 className="text-2xl font-playfair font-semibold text-express-purple mb-4">What are we?</h2>
              <p className="text-gray-300 leading-relaxed">
                DJS eXpress is the official public speaking committee of DJ Sanghvi College of Engineering where we organize public speaking and debating events. We have organised many successful events in the past like illuminare and our flagship event, aryavarta which have been received with a lot of support and appreciation from the students and faculty of the college. What sets eXpress apart is the consistency and the sheer enthusiasm with which each member works which makes our events successful and make us highly coveted.
              </p>
            </section>
            
            <section className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10">
              <h2 className="text-2xl font-playfair font-semibold text-express-purple mb-4">What do we do?</h2>
              <p className="text-gray-300 leading-relaxed">
                At DJS eXpress, we strive to unlock the potential of every student, ranging from public speaking skills to critical thinking to confident self-expression. We organise debates and discussions related to real world problems and work on finding solutions. Our community empowers students to explore intellectual curiosity and equip them with skills needed in the ever-evolving world. We provide an environment for students to grow through our events which makes us entire process is a learning experience.
              </p>
            </section>
            
            <section className="bg-black/20 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10">
              <h2 className="text-2xl font-playfair font-semibold text-express-purple mb-4">Why choose us?</h2>
              <p className="text-gray-300 leading-relaxed">
                As the official public speaking and debating committee of DJSCE, we are dedicated to organizing impactful and intellectually stimulating events, including debates, oration competitions, quizzes, group discussions, and much more. Our events are designed to challenge, inspire, and refine the skills of participants, ensuring an unparalleled experience.<br /><br />
                What sets eXpress apart is our unmatched reach and engagement. With the largest audiences and highest participant registrations, we have built a reputation for exceptional publicity and unique event concepts that captivate students across the city. Our committee consists of the brightest minds in college, ensuring a platform where only the most thought-provoking discussions and innovative ideas thrive.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
