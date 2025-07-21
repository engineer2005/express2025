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
      <div className="relative min-h-screen z-10 px-4 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-express-purple mb-6 font-playfair">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with the eXpress team for public speaking workshops, debate competitions, 
            and all your communication skill development needs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
            
            {/* Contact Information - Left Column */}
            <div className="xl:col-span-1 space-y-6">
              
              {/* Location Card */}
              <div className="group bg-gradient-to-br from-express-purple/10 to-transparent backdrop-blur-sm border border-express-purple/30 rounded-2xl p-8 hover:border-express-purple/60 hover:shadow-lg hover:shadow-express-purple/20 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-express-purple/20 p-3 rounded-full group-hover:bg-express-purple/30 transition-colors">
                    <MapPin className="text-express-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      DJ Sanghvi College of Engineering<br />
                      Plot No. U-15, Juhu Versova Link Road<br />
                      Vile Parle (West), Mumbai - 400056<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="group bg-gradient-to-br from-express-purple/10 to-transparent backdrop-blur-sm border border-express-purple/30 rounded-2xl p-8 hover:border-express-purple/60 hover:shadow-lg hover:shadow-express-purple/20 transition-all duration-500">
                <div className="text-center">
                  <div className="bg-express-purple/20 p-3 rounded-full inline-block group-hover:bg-express-purple/30 transition-colors mb-4">
                    <Mail className="text-express-purple" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quick Contact</h3>
                  <p className="text-gray-300 text-sm">
                    For immediate queries, reach out to our team leads directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Contacts - Middle Column */}
            <div className="xl:col-span-1">
              <h2 className="text-3xl font-bold text-express-purple mb-8 text-center">Our Team</h2>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-r from-express-purple/10 via-transparent to-express-purple/5 backdrop-blur-sm border border-express-purple/30 rounded-2xl p-6 hover:border-express-purple/60 hover:shadow-lg hover:shadow-express-purple/20 transition-all duration-500"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-express-purple/20 p-3 rounded-full group-hover:bg-express-purple/30 transition-colors">
                        <contact.icon className="text-express-purple" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg">{contact.role}</h4>
                        <p className="text-gray-300 font-medium">{contact.name}</p>
                        <a 
                          href={`tel:${contact.phone}`}
                          className="text-express-purple hover:text-white transition-colors flex items-center space-x-2 mt-2 text-sm font-medium group/phone"
                        >
                          <Phone size={14} className="group-hover/phone:scale-110 transition-transform" />
                          <span>{contact.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map - Right Column */}
            <div className="xl:col-span-1">
              <div className="group bg-gradient-to-br from-express-purple/10 to-transparent backdrop-blur-sm border border-express-purple/30 rounded-2xl overflow-hidden hover:border-express-purple/60 hover:shadow-lg hover:shadow-express-purple/20 transition-all duration-500 h-full">
                <div className="p-6 pb-4">
                  <h3 className="text-2xl font-bold text-express-purple mb-4 text-center">Find Us</h3>
                </div>
                <div className="px-6 pb-6">
                  <div className="w-full h-80 xl:h-96 rounded-xl overflow-hidden border border-express-purple/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0123456789!2d72.8261!3d19.1058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9578066a8d7%3A0x6de440c1d2c9a0c4!2sDJ%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1234567890123&markers=color:red%7Clabel:E%7C19.1058,72.8261"
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
          </div>

          {/* Bottom CTA Section */}
          {/* <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-express-purple/20 via-express-purple/10 to-express-purple/20 backdrop-blur-sm border border-express-purple/40 rounded-3xl p-8 hover:border-express-purple/60 hover:shadow-lg hover:shadow-express-purple/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-express-purple mb-4">Ready to Express Yourself?</h3>
              <p className="text-gray-300 max-w-md mx-auto mb-6 leading-relaxed">
                Join our vibrant community of speakers, debaters, and communication enthusiasts. 
                Let's build your voice together.
              </p>
              <div className="flex justify-center items-center space-x-2 text-express-purple">
                <Mail size={20} className="animate-pulse" />
                <span className="font-medium">Stay tuned for more ways to connect!</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact;