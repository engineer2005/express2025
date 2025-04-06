
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { useIsMobile } from '../hooks/use-mobile';
import { Card, CardContent } from '../components/ui/card';
import { Users, Globe, BookOpen, School, Speech, Award, Lightbulb, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - express';
  }, []);
  
  const isMobile = useIsMobile();

  const flashcards = [
    {
      id: 1,
      title: "Enhancing Public Speaking Skills",
      description: "We help students discover and refine their inner speaker"
    },
    {
      id: 2,
      title: "Shaping Responsible Global Citizens",
      description: "Our activities prepare students to think critically and act responsibly on global issues"
    },
    {
      id: 3,
      title: "Organizing Meaningful Debates",
      description: "We host debates that tackle real-world issues and relevant resolutions"
    },
    {
      id: 4,
      title: "Encouraging Innovation & Idea Sharing",
      description: "Our community fosters creativity and new perspectives through discussions"
    },
    {
      id: 5,
      title: "Preparing for a Fast-Paced World",
      description: "We equip students with the confidence and skills to succeed in today's dynamic environment"
    },
    {
      id: 6,
      title: "Building a Supportive Community",
      description: "We create a strong network of like-minded individuals who support and inspire each other"
    }
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-express-purple mb-4 font-playfair animate-fade-in">
              About Us
            </h1>
            <div className="h-1 w-24 md:w-32 bg-express-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/20 group">
              <div className="flex flex-col items-center">
                <div className="bg-express-purple/20 p-4 rounded-full mb-4 group-hover:bg-express-purple/30 transition-all">
                  <Users size={isMobile ? 32 : 40} className="text-express-purple" />
                </div>
                <h3 className="text-xl font-semibold text-express-purple mb-2">Our Community</h3>
                <p className="text-gray-300 text-center">A vibrant community of passionate debaters and public speakers from DJ Sanghvi College of Engineering.</p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/20 group">
              <div className="flex flex-col items-center">
                <div className="bg-express-purple/20 p-4 rounded-full mb-4 group-hover:bg-express-purple/30 transition-all">
                  <Globe size={isMobile ? 32 : 40} className="text-express-purple" />
                </div>
                <h3 className="text-xl font-semibold text-express-purple mb-2">Our Reach</h3>
                <p className="text-gray-300 text-center">The largest audiences and highest participant registrations across college events in the city.</p>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/30 rounded-lg p-6 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/20 group">
              <div className="flex flex-col items-center">
                <div className="bg-express-purple/20 p-4 rounded-full mb-4 group-hover:bg-express-purple/30 transition-all">
                  <BookOpen size={isMobile ? 32 : 40} className="text-express-purple" />
                </div>
                <h3 className="text-xl font-semibold text-express-purple mb-2">Our Mission</h3>
                <p className="text-gray-300 text-center">To unlock the potential of every student through public speaking, critical thinking, and confident self-expression.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 mt-8">
            <Card className="overflow-hidden border-none bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/3 bg-black/20 flex items-center justify-center p-6">
                  <img 
                    src="/lovable-uploads/1371b86a-1520-4a4d-8ffd-a331176cc323.png" 
                    alt="DJS eXpress logo" 
                    className="w-48 h-auto object-contain"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-express-purple/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <School className="text-express-purple h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-playfair font-semibold text-express-purple">What are we?</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    DJS eXpress is the official public speaking committee of DJ Sanghvi College of Engineering where we organize public speaking and debating events. We have organised many successful events in the past like illuminare and our flagship event, aryavarta which have been received with a lot of support and appreciation from the students and faculty of the college. What sets eXpress apart is the consistency and the sheer enthusiasm with which each member works which makes our events successful and make us highly coveted.
                  </p>
                </CardContent>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-none bg-gradient-to-l from-black/40 to-black/60 backdrop-blur-sm">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3 bg-black/20 flex items-center justify-center p-6">
                  <img 
                    src="/lovable-uploads/3a4458fd-e2ff-4280-9c61-2e5e820a4e3f.png" 
                    alt="What do we do" 
                    className="w-64 h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-express-purple/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <Speech className="text-express-purple h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-playfair font-semibold text-express-purple">What do we do?</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    At DJS eXpress, we strive to unlock the potential of every student, ranging from public speaking skills to critical thinking to confident self-expression. We organise debates and discussions related to real world problems and work on finding solutions. Our community empowers students to explore intellectual curiosity and equip them with skills needed in the ever-evolving world. We provide an environment for students to grow through our events which makes us entire process is a learning experience.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {flashcards.map((card) => (
                      <div key={card.id} className="rounded-lg border border-express-purple/30 overflow-hidden hover:border-express-purple/60 transition-all group">
                        <div className="p-4 bg-black/40 border-b border-express-purple/20">
                          <h3 className="text-express-purple font-medium text-lg">{card.title}</h3>
                        </div>
                        <div className="p-4 bg-express-purple/10">
                          <p className="text-sm text-gray-300">{card.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
            
            <Card className="overflow-hidden border-none bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm">
              <div className="md:flex">
                <div className="md:w-1/3 bg-black/20 flex items-center justify-center p-6">
                  <img 
                    src="/lovable-uploads/9b940661-2387-4886-9524-a60ac9df112a.png" 
                    alt="Why choose us" 
                    className="w-64 h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-express-purple/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <Award className="text-express-purple h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-playfair font-semibold text-express-purple">Why choose us?</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    As the official public speaking and debating committee of DJSCE, we are dedicated to organizing impactful and intellectually stimulating events, including debates, oration competitions, quizzes, group discussions, and much more. Our events are designed to challenge, inspire, and refine the skills of participants, ensuring an unparalleled experience.
                  </p>
                  <div className="flex items-start gap-3 mt-4">
                    <div className="bg-express-purple/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <Lightbulb className="text-express-purple h-5 w-5" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      What sets eXpress apart is our unmatched reach and engagement. With the largest audiences and highest participant registrations, we have built a reputation for exceptional publicity and unique event concepts that captivate students across the city. Our committee consists of the brightest minds in college, ensuring a platform where only the most thought-provoking discussions and innovative ideas thrive.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 bg-express-purple/20 text-express-light px-6 py-3 rounded-full border border-express-purple/30 animate-float">
              <MessageSquare className="h-5 w-5 text-express-purple" />
              Join us in our journey of intellectual growth and public speaking excellence!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
