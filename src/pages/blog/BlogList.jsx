import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../sanityClient";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  categories[]->{title},
  mainImage{
    asset->{url}
  }
}`;

export default function BlogList() {
    const [posts, setPosts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        client.fetch(POSTS_QUERY)
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("Erreur lors du chargement des posts :", error);
            });
    }, []);

    const displayedPosts = showAll ? posts : posts.slice(0, 3);
    const hasMorePosts = posts.length > 3;

    return (
        <section id="blog" className="pt-32 pb-20 bg-gray-50/50 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 pt-10">
                    <Link to="/" className="text-sm text-gray-500 hover:text-[#66C568] mb-4 inline-block">&larr; Retour à l'accueil</Link>
                    <h2 className="text-4xl font-bold text-[#1A1F2C] mb-4 font-bricolage">
                        Nos articles
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {displayedPosts.map((post) => (
                        <div key={post._id}>
                            <Link
                                to={`/blog/${post.slug.current}`}
                                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    {post.mainImage?.asset?.url ? (
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-grow">
                                    {/* Category */}
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm font-medium">
                                            {post.categories && post.categories.length > 0 ? post.categories[0].title : "Article"}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#1A1F2C] leading-tight mb-4 group-hover:text-[#66C568] line-clamp-2 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-auto">
                                        {new Date(post.publishedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {hasMorePosts && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-block border border-[#66C568] text-[#66C568] font-bold py-3 px-8 rounded-full hover:bg-[#66C568] hover:text-white transition-all duration-300"
                        >
                            {showAll ? "Voir moins" : "Voir plus d'articles"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
