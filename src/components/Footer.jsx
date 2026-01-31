import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 font-lato">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <h2 className="font-cinzel text-2xl font-bold text-white mb-6">
                            Pasteur <span className="text-gold">Alede Kokou Joseph</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Dédié à l'accompagnement spirituel, à la restauration des couples et à la formation des leaders de demain.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons (SVG) */}
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-cinzel text-gold text-lg font-semibold mb-6 uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Accueil</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">À Propos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Articles</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-cinzel text-gold text-lg font-semibold mb-6 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Accompagnement Couples</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Formation Leaders</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Assistance Spirituelle</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">Conférences</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-cinzel text-gold text-lg font-semibold mb-6 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Dapaong - Tantigou</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>aledekokou9@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+228 90 14 40 43</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Pasteur Alede Kokou Joseph. Tous droits réservés.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-gold text-xs transition-colors">Mentions Légales</a>
                        <a href="#" className="text-gray-500 hover:text-gold text-xs transition-colors">Politique de Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
