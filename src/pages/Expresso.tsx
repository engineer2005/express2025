
import React, { useEffect, useState, useRef } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { ChevronRight, BookOpen, ExternalLink } from 'lucide-react';

type Edition = {
  number: number;
  title: string;
  url: string;
  description: string;
};

const Expresso: React.FC = () => {
  useEffect(() => {
    document.title = 'eXpresso - express';
  }, []);

  const [selectedEdition, setSelectedEdition] = useState<Edition | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const editions: Edition[] = [
    {
      number: 1,
      title: "Volume 1",
      url: "https://drive.google.com/file/d/10T-_Dj4pGBZzzLk0WD0HsuEuSO1LvkzA/view?usp=sharing",
      description: "Fresh perspectives and creative insights from our latest issue."
    },
    {
      number: 2,
      title: "Volume 2",
      url: "https://drive.google.com/file/d/16kkN7r82mQqtluQ6KmApMAHjcTN1nz40/view?usp=sharing",
      description: "Fresh perspectives and creative insights from our latest issue."
    },
    {
      number: 3,
      title: "Volume 3",
      url: "https://drive.google.com/file/d/1uhwCdmrdOPOB2A2HTvJcmm6zmrQW-UJO/view?usp=sharing",
      description: "Discover new voices and stories in our April collection."
    },
    {
      number: 4,
      title: "Volume 4",
      url: "https://drive.google.com/file/d/1GGL7WiGjfKUJbr8162k78S09Yo_5wCkf/view?usp=sharing",
      description: "Our comprehensive May edition featuring the best content."
    },
    {
      number: 5,
      title: "Volume:-5",
      url: "https://drive.google.com/file/d/1AkHQtf-F-5qqQ51mNQIQyYLY7WDuqb40/view?usp=sharing",
      description: "Fresh insights and stories from our June collection."
    },
    {
      number: 6,
      title: "Volume:-6",
      url: "https://drive.google.com/file/d/1LQpAbin_tUBpXPqrRlv5oLSpYFClF-3s/view?usp=sharing",
      description: "Dive into our July edition for the latest articles and stories."
    },
    {
      number: 7,
      title: "Volume:-7",
      url: "https://drive.google.com/file/d/1yl7y7yK-uP2SwsfA-MzRK6ob0Gl2PH3b/view?usp=sharing",
      description: "Explore new narratives and ideas in our August issue."
    },
    {
      number: 8,
      title: "Volume:-8",
      url: "https://drive.google.com/file/d/10Vy1LrzfvTZB4Q10YxzpiFTOe9NcP-iS/view?usp=sharing",
      description: "Explore new narratives and ideas in our September issue."
    }
  ];

  const handleOpenEdition = (edition: Edition) => {
    window.open(edition.url, "_blank");
  };

  const getEmbedUrl = (url: string): string => {
    // Convert Google Drive view URL to embed URL
    return url.replace(/\/view\?usp=(sharing|drivesdk)/, "/preview");
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 py-20 md:py-24">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl w-full">
          <h1 className="text-6xl md:text-7xl font-bold text-express-purple mb-8 font-playfair">
            eXpresso
          </h1>
          
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Our literary magazine featuring articles, stories, poems, and insights about public speaking, debating, and communication skills.
          </p>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {editions.map((edition) => (
              <div 
                key={edition.number}
                className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl overflow-hidden hover:border-express-purple/50 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-express-purple">{edition.title}</h3>
                    <span className="bg-express-purple/20 text-express-purple px-3 py-1 rounded-full text-sm">
                      Edition {edition.number}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{edition.description}</p>
                  
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => {
                        setSelectedEdition(edition);
                        setTimeout(() => {
                          previewRef.current?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }, 100);
                      }}
                      className="sherlock-button group p-3 rounded-full"
                      title="Preview Edition"
                    >
                      <BookOpen size={20} />
                    </button>
                    
                    <button 
                      onClick={() => handleOpenEdition(edition)}
                      className="sherlock-button group p-3 rounded-full"
                      title="Open in Drive"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedEdition && (
            <div ref={previewRef} className="w-full">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-express-purple">
                  Previewing: {selectedEdition.title}
                </h2>
                <button 
                  onClick={() => setSelectedEdition(null)}
                  className="text-white/70 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
              <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-express-purple/30">
                <iframe 
                  src={getEmbedUrl(selectedEdition.url)} 
                  title={`eXpresso ${selectedEdition.title}`}
                  className="w-full h-full"
                  allow="autoplay"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Expresso;
