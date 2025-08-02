import React, { useEffect } from "react";
import ParticleBackground from "../components/ParticleBackground";
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Award,
  Phone,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import sherlock2 from "../images/sherlock2.jpeg";
import sherlock1 from "../images/sherlock1.jpeg";
import sherlock3 from "../images/sherlock3.jpeg";
import sherlock4 from "../images/sherlock4.jpeg";
import Footer from "@/components/Footer";

const UpcomingEvents: React.FC = () => {
  useEffect(() => {
    document.title = "Upcoming Events - eXpress";
  }, []);

  const handleRegister = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSex0PAOw7S13GpJX4onbBJz2lT0jnJsjDR6jP2_NsFTj9ST8g/viewform",
      "_blank"
    );
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/djsce.express", "_blank");
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
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/30 rounded-lg p-8 transition-all duration-300 hover:border-express-purple hover:shadow-lg hover:shadow-express-purple/10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-black/50 rounded-lg overflow-hidden h-64 mb-4">
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
                      <img
                        src={sherlock2}
                        alt="sherlock2"
                        className="object-cover w-full h-full"
                      />
                      <img
                        src={sherlock1}
                        alt="sherlock1"
                        className="object-cover w-full h-full"
                      />
                      <img
                        src={sherlock3}
                        alt="sherlock3"
                        className="object-cover w-full h-full"
                      />
                      <img
                        src={sherlock4}
                        alt="sherlock4"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <a className="text-3xl font-semibold text-white font-playfair"
                      href="https://drive.google.com/file/d/1KsJkJ8DgYLYeqNNlOlTuMsWLMLmTjbKw/view?usp=sharing"
                      target="_blank"
                      aria-label="Veritas: A Scandal of Expression"
                    >
                      Veritas : A scandal of expression
                    </a>
                    <div className="mt-2 sm:mt-0">
                      {/*<span className="bg-express-purple/50 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Registration Closed
                      </span>*/}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 mb-6">
                    <div className="flex items-center">
                      <Calendar
                        className="mr-2 text-express-purple"
                        size={18}
                      />
                      <span>13th & 14th August 2025</span>
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
                    🌟 Join DJS eXpress's :{" "}
                    <span className="font-bold text-white">
                      Veritas: A Scandal of Expression
                    </span>{" "}
                    🕵️‍♂️🎩🔎
                  </p>

                  <p className="text-gray-300 mb-6">
                  🕵️‍♂️ The game is afoot!
                  Join Teams of Two in a Sherlock-inspired showdown packed with mystery, wit,
                  and a dash of drama! From clever debates to thrilling games, step into your 
                  own episode of deduction and deception. Get ready to solve, perform, and 
                  steal the spotlight! 🔍🎭
                  </p>

                  <div className="bg-express-purple/20 rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <Award className="mr-2" size={22} />
                      Prize Pool
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-black/30 p-4 rounded-lg text-center">
                        {/*<span className="text-lg font-bold text-express-light">
                          1st Place
                        </span>*/}
                        <p className="text-white font-bold text-2xl">₹1,00,000</p>
                      </div>
                      {/*<div className="bg-black/30 p-4 rounded-lg text-center">
                        <span className="text-lg font-bold text-express-light">
                          2nd Place
                        </span>
                        <p className="text-white font-bold text-2xl">₹2,500</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg text-center">
                        <span className="text-lg font-bold text-express-light">
                          3rd Place
                        </span>
                        <p className="text-white font-bold text-2xl">₹1,500</p>
                      </div>*/}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Phone className="mr-2 text-express-purple" size={18} />
                        <span className="text-gray-300">
                          Aniket Prasad: 9653344645
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 text-express-purple" size={18} />
                        <span className="text-gray-300">
                          Kriish Chheda: 9167160832
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleRegister}
                      className="bg-express-purple text-white hover:bg-express-purple/90 transition-colors group"
                    >
                      <span>REGISTER HERE</span>
                      <ExternalLink size={16} />
                    </Button>

                    <a
                      href="https://www.instagram.com/djsce.express"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors flex items-center justify-center h-10 w-10"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
      </div>
    </>
  );
};

export default UpcomingEvents;
