import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-[5%] lg:px-[10%] bg-black relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                    {/* Image Section */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="relative mx-auto lg:ml-0 max-w-md">
                            {/* Frame */}
                            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4"></div>

                            {/* Image */}
                            <div className="relative h-[500px] bg-[#1a1a1a] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                                <img
                                    src="/images/alede%20kokou%20joseph%202.jpeg"
                                    alt="Portrait du Pasteur"
                                    className="w-full h-full object-cover opacity-90"
                                />

                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-gold text-black p-6 min-w-[150px] text-center shadow-xl">
                                <span className="block font-cinzel text-4xl font-bold">15+</span>
                                <span className="block font-lato text-xs font-bold uppercase tracking-wider mt-1">Années d'expérience</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 w-full lg:w-1/2 text-center lg:text-left">
                        <span className="font-cinzel text-gold tracking-[3px] uppercase text-sm mb-4 block">
                            A Propos
                        </span>
                        <h2 className="font-cinzel text-4xl lg:text-5xl text-white font-bold mb-8 leading-tight">
                            Une vision pour <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">votre épanouissement</span>
                        </h2>

                        <div className="space-y-6 font-lato text-gray-400 text-lg leading-relaxed">
                            <p>
                                Je suis le Pasteur Alede Kokou Joseph, passionné par la restauration des relations et le développement du potentiel humain. Mon ministère s'articule autour d'une conviction profonde : chaque individu, chaque couple, porte en lui les germes d'une destinée exceptionnelle.
                            </p>
                            <p>
                                À travers l'accompagnement des fiancés et des couples mariés, je m'efforce de bâtir des foyers solides. Par la formation, je vise à équiper une nouvelle génération de leaders intègres et compétents.
                            </p>
                            <p>
                                Mon approche allie sagesse biblique et outils pratiques pour vous aider à surmonter les défis et à vivre une vie pleine de sens.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="font-cinzel text-2xl text-gold italic">
                                Pasteur Alede Kokou Joseph
                            </div>

                            <button className="text-white font-lato text-sm uppercase tracking-widest border-b border-gold pb-1 hover:text-gold transition-colors">
                                Lire ma biographie complète
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
