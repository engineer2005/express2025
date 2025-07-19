import React from 'react';

const LondonStreetScene: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Misty background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-sherlock-shadow via-sherlock-fog/80 to-sherlock-shadow"></div>
      
      {/* Animated mist layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sherlock-fog/30 to-transparent animate-[drift_20s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-sherlock-fog/20 to-transparent animate-[drift_25s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sherlock-fog/10 via-transparent to-sherlock-fog/10 animate-[drift_30s_ease-in-out_infinite]"></div>
      </div>

      {/* Street silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">
          <path d="M0,200 L0,150 L200,120 L300,140 L500,110 L700,130 L900,100 L1200,120 L1200,200 Z" fill="rgba(0,0,0,0.6)"/>
          <path d="M0,200 L0,160 L150,140 L250,150 L400,130 L600,145 L800,125 L1000,135 L1200,130 L1200,200 Z" fill="rgba(0,0,0,0.4)"/>
        </svg>
      </div>

      {/* Flickering streetlamps */}
      <div className="absolute bottom-16 left-1/4">
        <div className="relative">
          <div className="w-1 h-16 bg-sherlock-shadow/80"></div>
          <div className="absolute -top-2 -left-1 w-3 h-3 rounded-full bg-sherlock-gold animate-[flicker_3s_ease-in-out_infinite]"></div>
          <div className="absolute -top-6 -left-4 w-8 h-8 rounded-full bg-sherlock-gold/20 animate-[flicker_3s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <div className="absolute bottom-20 right-1/3">
        <div className="relative">
          <div className="w-1 h-20 bg-sherlock-shadow/80"></div>
          <div className="absolute -top-2 -left-1 w-3 h-3 rounded-full bg-sherlock-gold animate-[flicker_4s_ease-in-out_infinite_1s]"></div>
          <div className="absolute -top-6 -left-4 w-8 h-8 rounded-full bg-sherlock-gold/20 animate-[flicker_4s_ease-in-out_infinite_1s]"></div>
        </div>
      </div>

      <div className="absolute bottom-12 left-2/3">
        <div className="relative">
          <div className="w-1 h-12 bg-sherlock-shadow/80"></div>
          <div className="absolute -top-2 -left-1 w-3 h-3 rounded-full bg-sherlock-gold animate-[flicker_2.5s_ease-in-out_infinite_2s]"></div>
          <div className="absolute -top-6 -left-4 w-8 h-8 rounded-full bg-sherlock-gold/20 animate-[flicker_2.5s_ease-in-out_infinite_2s]"></div>
        </div>
      </div>

      {/* Cobblestone texture overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sherlock-shadow/50 to-transparent"></div>
    </div>
  );
};

export default LondonStreetScene;