import React from 'react';

const articles = [
    {
        id: 1,
        category: "Vie de Couple",
        title: "Les 5 piliers d'un mariage durable",
        excerpt: "Découvrez les fondements essentiels pour bâtir une relation qui traverse le temps et les épreuves avec sérénité.",
        date: "12 Jan 2024",
        image: "https://placehold.co/600x400/1a1a1a/d4af37?text=Couple"
    },
    {
        id: 2,
        category: "Spiritualité",
        title: "Retrouver la paix intérieure",
        excerpt: "Dans un monde bruyant, apprenez à cultiver le silence et à vous reconnecter avec l'essentiel pour une vie équilibrée.",
        date: "08 Jan 2024",
        image: "https://placehold.co/600x400/222/d4af37?text=Paix"
    },
    {
        id: 3,
        category: "Leadership",
        title: "Diriger avec humilité et force",
        excerpt: "Le leadership chrétien n'est pas une question de pouvoir, mais de service. Analyse d'un modèle de gestion inspirant.",
        date: "03 Jan 2024",
        image: "https://placehold.co/600x400/151515/d4af37?text=Leadership"
    }
];

const LatestArticles = () => {
    return (
        <section className="py-24 px-[5%] lg:px-[10%] bg-[#050505] relative border-t border-white/5">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="text-left">
                    <span className="font-cinzel text-gold tracking-[3px] uppercase text-sm mb-4 block">
                        Blog & Ressources
                    </span>
                    <h2 className="font-cinzel text-4xl lg:text-5xl text-white font-bold leading-tight">
                        Dernières <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Publications</span>
                    </h2>
                </div>

                <button className="hidden md:inline-flex items-center px-6 py-3 border border-white/20 text-white font-lato text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                    Voir tous les articles
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-gold/50 transition-colors duration-500"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-4 left-4 z-20 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                {article.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-xs text-gray-500 font-lato mb-4">
                                <span>{article.date}</span>
                                <span className="w-1 h-1 bg-gold rounded-full"></span>
                                <span>Par Pasteur [Nom]</span>
                            </div>

                            <h3 className="font-cinzel text-xl text-white mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                                <a href="#">{article.title}</a>
                            </h3>

                            <p className="font-lato text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {article.excerpt}
                            </p>

                            <a href="#" className="inline-flex items-center text-gold text-sm font-lato uppercase tracking-wider group/link">
                                <span className="border-b border-transparent group-hover/link:border-gold transition-all duration-300">Lire l'article</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            {/* Mobile Button */}
            <div className="mt-12 text-center md:hidden">
                <button className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-lato text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                    Voir tous les articles
                </button>
            </div>

        </section>
    );
};

export default LatestArticles;
