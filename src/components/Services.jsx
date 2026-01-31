import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <section id="services" className="py-24 px-[5%] lg:px-[10%] bg-[#080808] relative">
            {/* Section Header */}
            <div className="text-center mb-20">
                <span className="font-cinzel text-gold tracking-[3px] uppercase text-sm mb-4 block">
                    Ce que nous proposons
                </span>
                <h2 className="font-cinzel text-4xl lg:text-5xl text-white font-bold mb-6">
                    Nos Domaines d'Intervention
                </h2>
                <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="group relative p-8 bg-[#111] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Icon */}
                        <div className="w-14 h-14 mb-6 text-gold bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors duration-500">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <h3 className="font-cinzel text-xl text-white mb-2 group-hover:text-gold transition-colors duration-300">
                            {service.title}
                        </h3>
                        <span className="block font-lato text-xs text-gold/80 uppercase tracking-wider mb-4">
                            {service.subtitle}
                        </span>
                        <p className="font-lato text-gray-400 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>

                        {/* Link */}
                        <Link to={`/services/${service.slug}`} className="inline-flex items-center text-sm text-white font-lato group-hover:text-gold transition-colors duration-300">
                            En savoir plus
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

