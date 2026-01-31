import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../sanityClient';

const LATEST_POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  categories[]->{title},
  mainImage{
    asset->{url}
  },
  body
}`;

// Helper to extract text from bloack content (simple version)
function getExcerpt(body) {
    if (!body || !Array.isArray(body)) return "";
    const block = body.find(b => b._type === 'block');
    if (!block || !block.children) return "";
    return block.children.map(c => c.text).join(" ").slice(0, 150) + "...";
}

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        client.fetch(LATEST_POSTS_QUERY)
            .then(data => {
                setArticles(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="py-24 px-[5%] lg:px-[10%] bg-[#050505] relative border-t border-white/5">
                <div className="text-center text-white">Chargement des articles...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-24 px-[5%] lg:px-[10%] bg-[#050505] relative border-t border-white/5">
                <div className="text-center text-red-500">Erreur lors du chargement des articles. Veuillez vérifier votre connexion ou la configuration Sanity.</div>
            </section>
        )
    }

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

                <Link to="/blog" className="hidden md:inline-flex items-center px-6 py-3 border border-white/20 text-white font-lato text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                    Voir tous les articles
                </Link>
            </div>

            {/* Grid */}
            {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            to={`/blog/${article.slug.current}`}
                            key={article._id}
                            className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-gold/50 transition-colors duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                {article.mainImage?.asset?.url ? (
                                    <img
                                        src={article.mainImage.asset.url}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
                                )}

                                {article.categories && article.categories.length > 0 && (
                                    <div className="absolute top-4 left-4 z-20 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                        {article.categories[0].title}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 font-lato mb-4">
                                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                                    <span>Par Pasteur Alede Kokou Joseph</span>
                                </div>

                                <h3 className="font-cinzel text-xl text-white mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                                    {article.title}
                                </h3>

                                <p className="font-lato text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {getExcerpt(article.body)}
                                </p>

                                <div className="inline-flex items-center text-gold text-sm font-lato uppercase tracking-wider group/link">
                                    <span className="border-b border-transparent group-hover/link:border-gold transition-all duration-300">Lire l'article</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-400 py-12 border border-white/5 rounded-lg">
                    <p className="mb-4">Aucun article publié pour le moment.</p>
                </div>
            )}

            {/* Mobile Button */}
            <div className="mt-12 text-center md:hidden">
                <Link to="/blog" className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-lato text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                    Voir tous les articles
                </Link>
            </div>

        </section>
    );
};

export default LatestArticles;
