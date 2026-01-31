import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../../sanityClient";
import { PortableText } from "@portabletext/react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url,
  body,
  author->{
    name,
    image {
      asset->{ url }
    },
    bio
  }
}`;

const RELATED_POSTS_QUERY = `*[_type == "post" && slug.current != $slug && defined(slug.current)]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url
}`;

const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            const imageUrl = value.asset._ref
                ? `https://cdn.sanity.io/images/l7k8ksvl/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
                : '';

            return (
                <figure className="my-10">
                    <img
                        src={imageUrl}
                        alt={value.alt || "Image"}
                        className="w-full h-auto rounded-none border border-white/10 shadow-lg"
                        loading="lazy"
                    />
                    {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic font-lato">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
    },
    block: {
        h1: ({ children }) => <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="font-cinzel text-2xl md:text-3xl text-gold font-bold mt-10 mb-5">{children}</h2>,
        h3: ({ children }) => <h3 className="font-cinzel text-xl md:text-2xl text-white font-bold mt-8 mb-4">{children}</h3>,
        h4: ({ children }) => <h4 className="font-cinzel text-lg md:text-xl text-gold font-bold mt-6 mb-3">{children}</h4>,
        normal: ({ children }) => <p className="font-lato text-gray-300 mb-6 leading-relaxed text-lg">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gold pl-6 py-2 my-8 italic text-white/90 bg-white/5 pr-4 rounded-r-sm font-lato">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic text-gray-400">{children}</em>,
        link: ({ value, children }) => (
            <a
                href={value?.href}
                target={value?.blank ? '_blank' : '_self'}
                rel={value?.blank ? 'noopener noreferrer' : undefined}
                className="text-gold hover:text-white underline transition-colors decoration-gold/50 hover:decoration-white"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300 font-lato ml-4 marker:text-gold">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-300 font-lato ml-4 marker:text-gold">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="pl-2">{children}</li>,
        number: ({ children }) => <li className="pl-2">{children}</li>,
    },
};

export default function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            client.fetch(POST_QUERY, { slug }),
            client.fetch(RELATED_POSTS_QUERY, { slug })
        ]).then(([postData, relatedData]) => {
            setPost(postData);
            setRelatedPosts(relatedData);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
        });

        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
        </div>
    );

    if (!post) return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-cinzel mb-4">Article non trouvé</h2>
            <Link to="/blog" className="text-gold hover:underline">Retour au blog</Link>
        </div>
    );

    return (
        <main className="w-full bg-[#050505] min-h-screen text-white/90 font-lato">
            {/* Header / Nav */}


            <div className="max-w-4xl mx-auto p-4 pt-32">
                {/* Title Section */}
                <div className="mb-10 text-center">
                    <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-500 font-lato mb-6 uppercase tracking-widest">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="w-1 h-1 bg-gold rounded-full"></span>
                        <span>{post.author ? post.author.name : 'Pasteur Alede Kokou Joseph'}</span>
                    </div>

                    <h1 className="font-cinzel text-3xl md:text-5xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                        {post.title}
                    </h1>
                </div>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="mb-12 relative">
                        {/* Decorative borders */}
                        <div className="absolute top-4 -right-4 w-full h-full border border-gold/20 -z-10 hidden md:block"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border border-white/5 -z-10 hidden md:block"></div>

                        <div className="overflow-hidden shadow-2xl relative z-10">
                            <img
                                src={post.mainImage}
                                alt={post.title}
                                className="w-full max-h-[400px] object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                    <PortableText
                        value={post.body}
                        components={portableTextComponents}
                    />
                </article>

                {/* Author Bio */}
                {post.author && (
                    <div className="flex flex-col md:flex-row items-center gap-6 mt-16 p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                        {post.author.image?.asset?.url && (
                            <img
                                src={post.author.image.asset.url}
                                alt={post.author.name}
                                className="w-24 h-24 rounded-full object-cover border-2 border-gold/50 shadow-lg"
                            />
                        )}
                        <div className="text-center md:text-left">
                            <p className="font-cinzel text-lg text-gold mb-2 uppercase tracking-wide">À propos de l'auteur</p>
                            <p className="font-bold text-xl text-white mb-3">{post.author.name}</p>
                            {post.author.bio && (
                                <div className="text-sm text-gray-400 leading-relaxed max-w-lg">
                                    <PortableText
                                        value={post.author.bio}
                                        components={portableTextComponents}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="mt-24 pt-12 border-t border-white/10">
                        <div className="text-center mb-12">
                            <span className="text-gold font-cinzel text-sm tracking-[3px] uppercase block mb-3">Découvrir plus</span>
                            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white">Articles recommandés</h2>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    to={`/blog/${relatedPost.slug.current}`}
                                    key={relatedPost._id}
                                    className="group block bg-[#0a0a0a] border border-white/5 hover:border-gold/50 transition-all duration-300"
                                >
                                    {relatedPost.mainImage && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img
                                                src={relatedPost.mainImage}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-lato uppercase tracking-wider mb-3">
                                            <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                                        </div>

                                        <h3 className="text-lg font-cinzel font-bold mb-4 line-clamp-2 text-white group-hover:text-gold transition-colors leading-snug">
                                            {relatedPost.title}
                                        </h3>

                                        <span className="text-xs font-lato text-gold uppercase tracking-wider group-hover:underline decoration-gold/50 underline-offset-4">
                                            Lire l'article
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
