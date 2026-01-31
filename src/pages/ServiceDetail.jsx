import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Footer from '../components/Footer';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h2 className="text-3xl font-cinzel mb-4">Service non trouvé</h2>
                <Link to="/" className="text-gold hover:underline font-lato">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white font-lato">
            {/* Header / Hero for Service */}
            <div className="relative py-32 px-[5%] lg:px-[10%] overflow-hidden bg-[#050505]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gold mb-8 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Retour
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 text-gold bg-gold/10 rounded-full flex items-center justify-center">
                            {service.icon}
                        </div>
                        <span className="font-cinzel text-gold tracking-[3px] uppercase text-sm">
                            {service.subtitle}
                        </span>
                    </div>
                    <h1 className="font-cinzel text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-8">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="px-[5%] lg:px-[10%] py-16 bg-[#0a0a0a] min-h-[50vh]">
                <div className="max-w-3xl">
                    <div className="text-lg text-gray-300 leading-relaxed font-lato">
                        {service.fullDescription || service.description}
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/10">
                        <h3 className="font-cinzel text-2xl text-white mb-6">Intéressé par ce service ?</h3>
                        <p className="text-gray-400 mb-8">
                            N'hésitez pas à nous contacter pour en savoir plus ou pour prendre rendez-vous.
                        </p>
                        <Link to="/#contact" className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm inline-block">
                            Prendre contact
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
