import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Accueil', path: '/', isAnchor: false },
        { name: 'À propos', path: '/#about', isAnchor: true },
        { name: 'Services', path: '/#services', isAnchor: true },
        { name: 'Blog', path: '/blog', isAnchor: false },
        { name: 'Contact', path: '/#contact', isAnchor: true },
    ];

    const scrollToSection = (sectionId) => {
        if (!isHome) return; // If not home, Link will handle navigation
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-white/10' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl md:text-2xl font-cinzel font-bold text-white tracking-widest z-50">
                    ALEDE <span className="text-gold">JOSEPH</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-sm font-lato uppercase tracking-wider text-gray-300 hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-sm font-lato uppercase tracking-wider text-gray-300 hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}

                    <a
                        href="https://wa.me/22890144043"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-gold text-gold text-xs font-lato uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
                    >
                        Rendez-vous
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gold mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gold transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <React.Fragment key={link.name}>
                            {link.isAnchor && isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className="text-2xl font-cinzel text-white hover:text-gold"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-cinzel text-white hover:text-gold"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default AppBar;
