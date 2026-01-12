import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-black text-white px-[5%] lg:px-[10%] overflow-hidden">
      {/* Background subtle effect */}
      <div className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,215,0,0.03)_0%,rgba(0,0,0,0)_70%)] rounded-full z-0 pointer-events-none"></div>

      <div className="flex-1 z-10 max-w-[600px] mb-12 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
        <span className="font-cinzel uppercase tracking-[3px] text-sm text-gold block mb-4">
          Accompagnement & Formation
        </span>
        <h1 className="font-cinzel text-5xl lg:text-6xl leading-tight mb-6 font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Pasteur Alede Kokou Joseph
        </h1>
        <p className="font-lato text-lg leading-relaxed text-[#a0a0a0] mb-10 max-w-[90%]">
          Un guide spirituel dédié à l'épanouissement des couples,
          à la formation des leaders et à l'assistance de la communauté.
          Découvrez une approche bienveillante et professionnelle.
        </p>

        <div className="flex items-center flex-wrap gap-3 mb-12 font-lato text-sm text-gray-400 justify-center lg:justify-start">
          <div className="spec-item">Accompagnement Couples</div>
          <div className="text-gold">•</div>
          <div className="spec-item">Formation</div>
          <div className="text-gold">•</div>
          <div className="spec-item">Assistance</div>
          <div className="text-gold">•</div>
          <div className="spec-item">Articles</div>
        </div>

        <div className="flex gap-5">
          <button className="px-8 py-4 bg-gold text-black font-lato font-semibold uppercase tracking-wider hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300 rounded-lg">
            Prendre Rendez-vous
          </button>

        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[550px]">
          {/* Decorative frame */}
          <div className="absolute top-5 -right-5 w-full h-full border border-gold -z-10"></div>

          {/* Image container */}
          <div className="w-full h-full bg-dark-gray border border-[#333] flex justify-center items-center overflow-hidden">
            <img
              src="https://placehold.co/400x550/222/d4af37?text=Pastor+Photo"
              alt="Pasteur"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
