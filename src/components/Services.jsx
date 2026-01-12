import React from 'react';

const services = [
    {
        title: "Accompagnement",
        subtitle: "Couples & Fiancés",
        description: "Un suivi personnalisé pour bâtir des fondations solides. Que vous soyez en chemin vers le mariage ou désireux de renforcer votre union, nous vous offrons des outils concrets et une écoute bienveillante.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        )
    },
    {
        title: "Formation",
        subtitle: "Leadership & Croissance",
        description: "Des programmes conçus pour équiper les leaders de demain. Approfondissez vos connaissances bibliques et développez vos compétences pour servir avec excellence et intégrité.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        )
    },
    {
        title: "Assistance",
        subtitle: "Soutien & Entraide",
        description: "Une main tendue dans les moments difficiles. Nous proposons une assistance spirituelle et morale pour traverser les épreuves de la vie avec espérance et dignité.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        )
    },
    {
        title: "Ressources",
        subtitle: "Articles & Médias",
        description: "Nourrissez votre réflexion avec nos articles, études et contenus multimédias. Des ressources accessibles pour approfondir votre foi au quotidien.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
        )
    }
];

const Services = () => {
    return (
        <section className="py-24 px-[5%] lg:px-[10%] bg-[#080808] relative">
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
                {services.map((service, index) => (
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
                        <a href="#" className="inline-flex items-center text-sm text-white font-lato group-hover:text-gold transition-colors duration-300">
                            En savoir plus
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
