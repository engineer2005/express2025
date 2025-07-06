import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { MapPin, Phone, Mail, User } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - express';
  }, []);

  const contacts = [
    {
      role: "Chairperson",
      name: "Aniket Prasad",
      phone: "+91 96533 44645",
      icon: User
    },
    {
      role: "Vice Chairperson",
      name: "Kevin Savla",
      phone: "+91 70212 88189",
      icon: User
    },
    {
      role: "Vice Chairperson",
      name: "Kriish Chheda",
      phone: "+91 91671 60832",
      icon: User
    }
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 py-20 md:py-24">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl w-full">
          <h1 className="text-6xl md:text-7xl font-bold text-express-purple mb-8 font-playfair">
            Contact Us
          </h1>
          
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Get in touch with the eXpress team. We're here to help with all your public speaking and debating needs.
          </p>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-express-purple mb-6">Get In Touch</h2>
              
              {/* College Location */}
              <div className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl p-6 hover:border-express-purple/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-express-purple mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-300">
                      DJ Sanghvi College of Engineering<br />
                      Plot No. U-15, Juhu Versova Link Road<br />
                      Vile Parle (West), Mumbai - 400056<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-express-purple">Team Contacts</h3>
                {contacts.map((contact, index) => (
                  <div 
                    key={index}
                    className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl p-6 hover:border-express-purple/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <contact.icon className="text-express-purple" size={24} />
                      <div>
                        <h4 className="text-white font-semibold">{contact.role}</h4>
                        <p className="text-gray-300">{contact.name}</p>
                        <a 
                          href={`tel:${contact.phone}`}
                          className="text-express-purple hover:text-express-purple/80 transition-colors flex items-center space-x-2 mt-1"
                        >
                          <Phone size={16} />
                          <span>{contact.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl overflow-hidden hover:border-express-purple/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-express-purple mb-4">Find Us Here</h3>
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0123456789!2d72.8261!3d19.1058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9578066a8d7%3A0x6de440c1d2c9a0c4!2sDJ%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DJ Sanghvi College of Engineering Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="w-full max-w-2xl">
            <div className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl p-6 hover:border-express-purple/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-express-purple mb-4 text-center">Join Our Community</h3>
              <p className="text-gray-300 text-center mb-6">
                Follow us on social media and stay updated with our latest events, workshops, and competitions.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-2 text-express-purple">
                  <Mail size={20} />
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;