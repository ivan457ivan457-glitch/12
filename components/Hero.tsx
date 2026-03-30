
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1519225495810-7a3b0d42dece?q=80&w=2070&auto=format&fit=crop)',
          filter: 'brightness(0.9) grayscale(0.2)'
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-white fade-in space-y-6">
        <div className="inline-block border-t border-b border-white/40 py-2 px-6 mb-4 tracking-[0.2em] uppercase text-sm font-light">
          Приглашение на роспись
        </div>
        
        <h1 className="text-6xl md:text-9xl font-light serif leading-tight">
          Антон <span className="text-3xl md:text-5xl italic block md:inline mx-2">&</span> Татьяна
        </h1>
        
        <div className="text-xl md:text-2xl tracking-[0.3em] font-light mt-8">
          24 МАРТА 2026
        </div>

        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Hero;
